import clsx from "clsx"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

type InputProps = {
    label?:string
    name:string
    placeholder:string
    showIcon?:boolean
    style?:string
    size?:"small"|"medium"|"large"
    onChanged:()=>void

}
export const PasswordInput = (props:InputProps)=> {
    const {label, name, placeholder, style, onChanged, showIcon=false, size="medium"} = props
    const [show, setShow] = useState<boolean>(false)
    let labelSize = "text-base"
    switch (size!) {
        case "small":
            labelSize = "text-sm"
            break;
        case "medium":
            labelSize = "text-base"
            break;
        case "large":
            labelSize = "text-lg"
            break;
        default:
            labelSize = "text-base"
            break;
    }
    return (
        <div className={`w-full flex flex-col ${labelSize}`}>
            {
                label && (
                    <label htmlFor={name} className={`label ${labelSize}`}>
                        {label}
                    </label>
                )
            }
            <div className="flex-1 relative">
               
                <input 
                    type={show?"text":"password"}
                    
                    id={name}
                    placeholder={placeholder}
                    onChange={onChanged}
                    className={clsx(
                        "in-input",
                        style,
                        `input-${size}`
                    )}
                />
                {
                    showIcon && <span className={`absolute bottom-1/4 right-0 px-3 cursor-pointer ${labelSize}`} onClick={()=>setShow((show:boolean)=>!show)}>
                       {!show?<FaRegEye/>:<FaRegEyeSlash/>}
                    </span>
                }
            </div>
        </div>
    )
}