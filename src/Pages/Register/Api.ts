import toast from "react-hot-toast";
import { API } from "../../Utils/BackApi";

export class registerPageApi{
    async registerDetails(data:any){
        try{
            const response=await API.post('/register',data)
            toast.success(response.data.message,{position:"top-right"})
        }catch(error){
            toast.error("something went Wrong...!",{position:"top-right"})
        }
    }
}

export const registerpageapi= new registerPageApi()