type BadgeProps = {
    children:React.ReactNode
    variant?:"neutral"|"primary"|"secondary"|"accent"|"ghost"|"info"|"success"|"warning"|"error"
    size?:"small"|"medium"|"large"
    style?:string
    outline?:boolean
}
export const Badge = (props:BadgeProps) => {
    const { children, size="medium", outline=false, variant, style } = props
    const badgeSize = ()=>{
        switch (size) {
            case "small":
                return "badge-sm"        
        
            case "medium":
                return "badge-md"        
        
            case "large":
                return "badge-lg"        
        
            default:
                return "badge-md"
        }
    }
    const badgeVariant = ()=>{
        switch (variant) {
            case "accent":
                return "badge-accent"        
        
            case "neutral":
                return "badge-neutral"        
        
            case "primary":
                return "badge-primary"        
        
            case "secondary":
                return "badge-secondary"        
        
            case "ghost":
                return "badge-ghost"        
        
            case "success":
                return "badge-success"        
        
            case "info":
                return "badge-info"        
        
            case "warning":
                return "badge-warning"        
        
            case "error":
                return "badge-error"        
        
            default:
                return ""
        }
    }
    return (
        <span className={"badge "+`${badgeVariant()} ${style} ${badgeSize()} ${outline && "badge-outline"}`}>
            {children}
        </span>
    )
}
