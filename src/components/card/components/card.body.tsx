import { CardBodyProps } from "../types/card.type"

export const CardBody = (props:CardBodyProps) => {
    const { children } = props
    return (
        <div className='card-body'>
            {children}
        </div>
    )
}
