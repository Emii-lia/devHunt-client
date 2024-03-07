type TextAreaProps = {
    cols?:number,
    rows?:number,
    style?:string,
    placeholder:string
    onChanged:()=>void
    size?:"small"|"medium"|"large" 
}
export const TextArea = (props:TextAreaProps)=>{
    const {cols, rows=1, placeholder, style, onChanged, size="medium"} = props
    
    return(
        <div className="w-full h-full">
            <textarea name="" id="" cols={cols} rows={rows} onChange={onChanged} className={`in-input in-input-${size} focus-visible:outline-none focus:ring-transparent ${style}`} placeholder={placeholder} autoFocus></textarea>
        </div>
    )
}