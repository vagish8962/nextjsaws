import {
  CognitoUserPool,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

export const poolData = {
  UserPoolId: "us-east-1_Yh64PeF7J",
  ClientId: "q061hdsb9ln2nu0qa34o41e9b",
};

export const userPool = new CognitoUserPool(poolData);

export const createUser = (formData) => {
  return new Promise((resolve, reject) => {
    const { email, password } = formData;
    return userPool.signUp(email, password, [], null, (err, result) => {
      if (err) {
        console.log(err.message);
        reject(err);
        return;
      }
      console.log(result);
      resolve(result.user);
    });
  });
};

export const verifyUser = (username, verifyCode) => {
  return new Promise((resolve, reject) => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    return cognitoUser.confirmRegistration(verifyCode, true, (err, result) => {
      if (err) {
        console.log(err.message);
        reject(err);
        return;
      }
      console.log(result);
      resolve(result);
    });
  });
};
