import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,


    checkAuth : async () =>{
        try{
            const res= await axiosInstance.get("/auth/check")
            set({authUser: res.data})
        }
        catch(error){
             console.log("error in checkingAuth",error)
            set({authUser:null})
           
        } finally{
            set({isCheckingAuth: false});
        }
    }
}))