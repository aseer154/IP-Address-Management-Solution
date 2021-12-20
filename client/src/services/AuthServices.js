import HttpService from "./HttpService";

export const RegisterUserService = (credentials) => {
    const http = new HttpService();
    let signupUrl = 'auth/signup';

    return http.postData(credentials, signupUrl)
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            return error;
        });
}

export const LoginUserService = (credentials) => {
    const http = new HttpService();
    let loginUrl = "auth/login";

    return http.postData(credentials, loginUrl)
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            return error;
        });
}

export const LogoutUserService = () => {
    const http = new HttpService();
    let logoutUrl = "auth/logout";
    const tokenId = "user-token";

    return http.getData(logoutUrl, tokenId)
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            return error;
        })
}