import { useState } from "react";
import { logout as logoutHandler } from "./userLogOut";

const getUserDetails = () => {
    const userDetails = localStorage.getItem("user")

    if(userDetails){
        return JSON.parse(userDetails)
    }else{
        return null
    }

}
export const useUserDetails = () => {
    const [userDetails, ] = useState(getUserDetails())
    const logout = () => {
        logoutHandler
    }

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : "Guest",
        logout
    }
}