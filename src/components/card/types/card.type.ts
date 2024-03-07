export type CardHeaderProps = {
    imageUrl?:string
}
export type CardTitleProps = {
    title:string
    rightIcon?:React.ReactNode
    badge?:React.ReactNode
}

export type CardActionsProps = {
    children:React.ReactNode
    position?:"start"|"center"|"end"
}
export type CardBodyTitleProps = {
    style?:string
    children:React.ReactNode
}
export type CardProps = {
    children:React.ReactNode
    shadow?:"sm"|"md"|"lg"|"xl"|"none"
    style?:string
    overlay?:boolean
}
export type CardBodyProps = {
    children:React.ReactNode
}