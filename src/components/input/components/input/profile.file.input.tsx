import { useRef, useState } from "react";
import { FilePreview } from '../view/media.preview';
import { FaCamera } from "react-icons/fa6";

type ProfileInputProps = {
    previewed?: boolean
    avatar:React.ReactNode
}
export const ProfileInput = (props:ProfileInputProps)=>{
    const {previewed=false, avatar} = props
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files){
            setFiles([...files,...Array.from(e.target.files)])
        }
    }
    const removeFile = (index:number)=>{
        setFiles(files.filter((_,i)=> i !== index))
    }

    const handleClick = ()=>{
        fileInputRef.current?.click()
    }
    const gridClass = ()=>{
        switch (files.length) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            default:
                return 'grid-cols-3';
        }
    }
    return(
        <div className="">
            <input 
                type="file" 
                name="" 
                id="" 
                multiple
                style={{display:"none"}} 
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <div className="relative w-fit cursor-pointer" onClick={handleClick}>
                {avatar}
                <span className="p-1.5 bg-gray-500 text-white bg-opacity-40 rounded-full absolute right-2 bottom-2 flex items-center">
                    <FaCamera />
                </span>
            </div>
            {
                previewed && <div className={`grid gap-1 mt-4 ${gridClass()}`}>
                    {
                        files.map((file, index)=>(
                            <FilePreview file={file} index={index} removeFile={()=>removeFile(index)} key={index}/>
                        ))
                    }
                </div>

            }
        </div>
    )
}