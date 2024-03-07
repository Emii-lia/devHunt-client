type JoinProps = {
    children:React.ReactNode
}
export const Join = ({children}:JoinProps) => {
  return (
    <div className='join'>
        {children}
    </div>
  )
}
