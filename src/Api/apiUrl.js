const BaseUrl=`http://localhost:8080/`

export const url={
    // user related urls
    login:`${BaseUrl}api/v1/user/signin`,
    signup:`${BaseUrl}api/v1/user/signup`,
    searchUser:`${BaseUrl}api/v1/user`,
    logoutUser:`${BaseUrl}api/v1/user/logout`,
    passwordUpdate:`${BaseUrl}api/v1/user/updatePassword`,
    userUpdate:`${BaseUrl}api/v1/user/updateUser`,
    avatarUpdate:`${BaseUrl}api/v1/user/updateAvatar`,

    //chat related urls
    allChatFetching:`${BaseUrl}api/v1/chat/getChats`,
    getChat:`${BaseUrl}api/v1/chat`

}

export const tokenName="access_token"