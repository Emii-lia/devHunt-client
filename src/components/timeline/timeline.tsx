type TimelineProps = {
    child1:React.ReactNode
    child2?:React.ReactNode
    child3?:React.ReactNode
    child4?:React.ReactNode
    child5?:React.ReactNode
}
export const Timeline = (props:TimelineProps) => {
    const { child1, child2, child3, child4, child5} = props
  return (
    <ul className="timeline timeline-vertical">
        {
            child1 &&
            <li>
                <div className="timeline-start bg-transparent border-none">{child1}</div>
                <div className="timeline-middle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#5555" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                </div>
            </li>
        }
        {
            child2 &&
            <li>
                <div className="timeline-middle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#5555" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                </div>
                <div className="timeline-end  bg-transparent border-none">{child2}</div>
            </li>
        }
        {
            child3 &&
            <li>
                <div className="timeline-start bg-transparent border-none">{child3}</div>
                <div className="timeline-middle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                </div>
            </li>
        }
        {
            child4 &&
            <li>
                <div className="timeline-middle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                </div>
                <div className="timeline-end timeline-box">{child4}</div>
            </li>
        }
        {
            child5 &&
            <li>
                <div className="timeline-start timeline-box">{child5}</div>
                <div className="timeline-middle">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                </div>
            </li>
        }
    </ul>
  )
}
