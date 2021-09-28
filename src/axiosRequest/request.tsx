import axios from "axios";

export const GetData = async (url: string) => {
    const response = await axios.get(url).then((res: any) => res.data).catch((err: any) => { console.log(err) });
    return response;
}

export const PostData = async (url: string, body: any) => {
    const response = await axios.post(url, body).then((response: any) => response.data).catch((err: any) => { console.log(err) });
    return response;
}

export const PostWithAuthentication = async (url: any, token: any) => {
    const response = await axios({
        method: "POST",
        url: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((res: any) => {
        return res.data
    }).catch((err:any) => {console.log(err); localStorage.removeItem("__token")});
    return response;
}