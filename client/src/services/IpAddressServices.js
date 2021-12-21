import HttpService from "./HttpService";

export const LoadIpAddressData = () => {
    const http = new HttpService();
    let ipAddressDataUrl = "ipAddress";
    const tokenId = "user-token";

    return http.getData(ipAddressDataUrl, tokenId)
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}

export const AddIpAddressService = (data) => {
    const http = new HttpService();
    let addIpAddressUrl = "ipAddress";
    const tokenId = "user-token";

    return http.postData(data, addIpAddressUrl, tokenId)
        .then((response) => {
            return data;
        })
        .catch((error) => {
            return error;
        })
}