type DividerProps = {
  style?: string
}
export const Divider = ({style}:DividerProps) => {
  return (
    <div className={'divider after:bg-customGray-300/20 before:bg-customGray-300/20 '+style}></div>
  )
}
