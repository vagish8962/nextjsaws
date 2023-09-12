import * as AWS from "aws-sdk/global";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { poolData } from "./cognito";

export function getAccessToken(Username, Password) {
  return new Promise((resolve, reject) => {
    const authenticationData = {
      Username,
      Password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: Username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const accessToken = result.getIdToken().getJwtToken();
        resolve(accessToken);
      },

      onFailure: function (err) {
        reject(err.message || JSON.stringify(err));
      },
    });
  });
}

export async function postUserInfoToGigya(data, token) {
  const body = {
    profile: {
      header: {
        isoLanguage: "en",
        isoCountry: "ca",
        brandCode: "BHB009",
        campaignId: "PN004407",
        campaignDescription: "Always On",
        origin: "newsletter",
        formType: "signUp",
        entity: "PRM2.6",
      },
      consumerIdentity: {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
      },
      contactDetail: {
        address: {
          postalCode: "A1A1A1",
        },
        email: data.email,
      },
      optInStatus: {
        unileverEmailConsent: true,
        legalAgeConsent: true,
      },
    },
  };

  const rootUri = process.env.NEXT_PUBLIC_GIGYA_URL;
  const url = `${rootUri}/v3/profile/save`;
  const gigyaResponse = await await fetch(url, {
    method: "POST",
    headers: {
      Authentication: `Token ${token}}`,
      "x-api-key": process.env.NEXT_PUBLIC_KEY,
    },
    body: JSON.stringify(body),
  }).json();
  return gigyaResponse;
}

export async function getUserInfoFromLesp() {
  const rootUri = process.env.NEXT_PUBLIC_LESP_URL;
  const url = `${rootUri}/user/ca/users/info`;
  const lespResponse = await await fetch(url, {
    method: "POST",
    headers: {
      Authentication: `Token ${token}}`,
      "x-api-key": process.env.NEXT_PUBLIC_KEY,
    },
    body: JSON.stringify(body),
  }).json();
  return lespResponse;
}
