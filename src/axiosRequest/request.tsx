import axios from "axios";

export const GetData = async (url: string) => {
    const response = await axios.get(url).then((res: any) => res.data).catch((err: any) => { console.log(err) });
    return response;
}

export const PostData = async (url: string, body: any) => {
    const response = await axios.post(url, body).then((response: any) => response.data).catch((err: any) => { console.log(err) });
    return response;
}

export const PostWithAuthentication = async (url: any, token: any, data?: any) => {
    
    const response = await axios({
        method: "POST",
        url: url,
        data: data || {},
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return response;
}