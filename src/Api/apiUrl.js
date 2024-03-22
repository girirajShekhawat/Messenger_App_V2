const BaseUrl=`http://localhost:8080/`

export const url={
    login:`${BaseUrl}api/v1/user/signin`,
    signup:`${BaseUrl}api/v1/user/signup`,
    searchUser:`${BaseUrl}api/v1/user`
}

export const tokenName="access_token"