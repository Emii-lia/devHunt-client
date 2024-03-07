import React, {useState} from "react";
import { Button, IconButton } from "../../../button";
import { FaPencil } from "react-icons/fa6";


type DynamicInputProps = {
   content?: string,
    label: string,
    style?: string,
    type: string,
    size?:"small"|"medium"|"large",
};


export const DynamicInput = (props: DynamicInputProps) => {
    const {content, label, style, type, size="medium"} = props;
    const [value, setValue] = useState<string>(content || '')
    const [isOpen, setIsOpen] = useState<boolean>(false);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
    return (
        <div className="flex grow">
            {
                isOpen ?
                    (
                        <div className="flex grow justify-center items-center gap-2">
                            <form
                                className="flex grow justify-center items-center gap-2"
                            >
                                <input
                                    type={type}
                                    name={label}
                                    className={`in-input grow focus:ring-0 focus:border-0 in-input-${size}`}
                                    defaultValue={content}
                                    // value={value}
                                    autoFocus
                                    onBlur={()=>setIsOpen(false)}
                                    onChange={handleChange}
                                />
                                <Button
                                    onClick={()=>handleSubmit}
                                    label="Edit"
                                    type="submit"
                                    size={size}
                                    variant="primary"
                                />
                            </form>
                        </div>
                    ) : (
                        <div className={`flex justify-center items-center gap-3 ${labelSize}`}>
                            <p className={`px-4 py-2 ${style}`}>{content}</p>
                            <span>
                                <IconButton onClick={()=> setIsOpen(true)} icon={<FaPencil />} variant="icon" style="border-none" size={size}/>
                            </span>
                        </div>
                    )
            }


        </div>
    );
};