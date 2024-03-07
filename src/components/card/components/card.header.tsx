import { CardHeaderProps } from "../types/card.type"

export const CardHeader = (props:CardHeaderProps) => {
    const { imageUrl } = props
    return (
        <figure>
            <img src={imageUrl} alt="card image" />
        </figure>
  )
}
