import toast from "react-hot-toast";
import { API } from "../../Utils/BackApi";

export class loginApi{
    async loginDetails(data:any){
        try{
            const response=await API.post('/login',data)
            toast.success(response.data.message,{position:"top-right"})
        }catch(error){
            toast.error("Somthing went Wrong...!")
        }
    }

}

export const loginpageapi=new loginApi()