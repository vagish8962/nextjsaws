
//get staticcontent api 
export async function getContentStatictics(type) {
    // https://lesp-uat.unileversolutions.com/content/ca/static/content?language=en&type=contentDonateMeal
    const URL = `${process.env.Api_EndPoint}/content/${process.env.market}/static/content?language=en&type=${type}`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             "x-api-key": process.env.xAPi,
             Authorization:`Bearer ${process.env.token}`,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}
//get staticcontent api 
export async function getInitiativeStatictics() {
    // https://lesp-uat.unileversolutions.com/content/ca/initiatives-statistics
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/initiatives-statistics`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}

//get initiative types api
export async function getInitiativetypes() {
    // https://lesp-uat.unileversolutions.com/user/ca/initiative-types
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/initiative-types`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}
//get couponse aggregated api
export async function getCouponseAggregated() {
    // https://lesp-uat.unileversolutions.com/user/ca/coupons-aggregated
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/coupons-aggregated`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}
//get couponse reedeem api
export async function getCouponRedeem(brandCode,pointsValue) {
    // https://lesp-uat.unileversolutions.com/user/ca/coupons-aggregated
    const URL = `${process.env.Api_EndPoint}/coupons/${process.env.market}/redeem?brandCode=${brandCode}&pointsValue=${pointsValue}`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}
//Donate&plantTree GetResponse Api
export async function getInitiativeResponse(initiativeType) {
    // https://lesp-uat.unileversolutions.com/user/ca/initiatives
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/initiatives`
    const requestBody = typeof initiativeType === 'object' ? initiativeType : {};
    const fetchPayload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
        body: JSON.stringify(requestBody),
    }
    try {
        console.log("checking", URL, fetchPayload, fetchPayload.body)
        const response = await fetch(URL, fetchPayload,)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}


////Donate&plantTree GetResponse Api
export async function getBrands() {
    // https://lesp-uat.unileversolutions.com/content/ca/brands
    const URL = `${process.env.Api_EndPoint}/content/${process.env.market}/brands`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}

////Donate&plantTree GetResponse Api
export async function getUserPoints() {
    // https://lesp-uat.unileversolutions.com/user/ca/users/points
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/users/points`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}

//Redeem Coupon Api
export async function redeemCoupon(brandCode,pointsValue) {
    // https://lesp-uat.unileversolutions.com/user/ca/users/points
    const URL = `${process.env.Api_EndPoint}/user/${process.env.market}/coupons/redeem?brandCode=${brandCode}&pointsValue=${pointsValue}`
    const fetchPayload = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${process.env.token}`,
             "x-api-key": process.env.xAPi,
        },
    }
    try {
        const response = await fetch(URL, fetchPayload)
        const data = await response.json()
        return data
    } catch (error) {
        return {
            error: 'Unexpected Error: Looks like we are having some issues with our service.',
        }
    }
}