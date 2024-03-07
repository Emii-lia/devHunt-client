import { FaX } from "react-icons/fa6"

type ModalProps = {
    children:React.ReactNode
    open:boolean
}
export const Modal = ({children, open}:ModalProps) => {
    return (
        <dialog id="my_modal_1" className="modal" open={open}>
            <div className="modal-box bg-[#f8f7f4]">
                <form method="dialog" className="modal-backdrop">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost text-customGray-400 absolute right-2 top-2">
                        <FaX/>
                    </button>
                </form>
               <>
                {children}
               </>
            </div>
        </dialog>  
    )
}
