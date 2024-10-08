import clsx from "clsx"

type inputType = "text" | "number" | "date" | "password" | "email" | "search" | "year"
type InputProps = {
    label?:string
    name:string
    iconEnd?:React.ReactNode
    iconStart?:React.ReactNode
    placeholder:string
    style?:string
    onChanged:()=>void
    type:inputType
    size?:"small"|"medium"|"large" 
    disabled?:boolean

}
export const InputField = (props:InputProps)=> {
    const {label, name, iconStart,iconEnd, placeholder, style, onChanged, type, size="medium", disabled=false} = props
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
                {
                    iconStart && <span className={`absolute left-0 top-1/2 -translate-y-1/2 px-5 text-customGray-300/80 ${labelSize}`}>
                        {iconStart}
                    </span>
                }
                <input 
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    onChange={onChanged}
                    disabled={disabled}
                    className={clsx(
                        "in-input",
                        {
                            "px-14": iconStart,
                        },
                        style,
                        `in-input-${size}`,
                        disabled && "cursor-not-allowed bg-customGray-100/20 text-customGray-400"
                    )}
                />
                {
                    iconEnd && <span className={`absolute top-1/3 text-customGray-300/80  right-0 px-2 ${labelSize}`}>
                        {iconEnd}
                    </span>
                }
            </div>
        </div>
    )
}