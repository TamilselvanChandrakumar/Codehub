import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export const  UseThemeContext=()=>{
    const themecontext=useContext(ThemeContext)

    if(themecontext===undefined){
        throw new Error("theme context is not defined")
    }
    return themecontext
}