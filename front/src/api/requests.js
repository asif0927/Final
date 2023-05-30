import { BASE_URL } from "./baseurl";
import axios from "axios";

export const getAllDesigns=async ()=>{
    let globalData;
    await axios.get(`${BASE_URL}`)
    .then((res)=>{
        globalData=res.data;
    })
    return globalData;
}
export const getDesignsById=async (id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/${id}`)
    .then((res)=>{
        globalData=res.data;
    })
    return globalData;
}
export const postDesigns=async (payload)=>{
    await axios.post(`${BASE_URL}`,payload)
}
export const deleteDesigns=async (id)=>{
    await axios.delete(`${BASE_URL}/${id}`)
}