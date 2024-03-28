const BaseUrl=`http://localhost:8080/`

export const url={
    login:`${BaseUrl}api/v1/user/signin`,
    signup:`${BaseUrl}api/v1/user/signup`,
    searchUser:`${BaseUrl}api/v1/user`,
    logoutUser:`${BaseUrl}api/v1/user/logout`,
    passwordUpdate:`${BaseUrl}api/v1/user/updatePassword`,
    userUpdate:`${BaseUrl}api/v1/user/updateUser`
}

export const tokenName="access_token"