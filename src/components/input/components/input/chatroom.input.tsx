import { FaMicrophone, FaPaperPlane, FaStop } from "react-icons/fa6"
import { ChangeEvent, useRef, useState } from "react"
// import 'regenerator-runtime/runtime';
// import useSpeechToText from "react-hook-speech-to-text"
import { IconButton } from "../../../button";
import { FileInput } from "./file.input";
import { FaImage } from "react-icons/fa";

type ChatRoomInputProps = {
    send: ()=>void
}
export const ChatRoomInput = (props:ChatRoomInputProps)=>{
    const { send } = props
    const [message, setMessage] = useState<string>("")
    // const [showMic, setShowMic] = useState<boolean>(true)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(
            e.target.value
        )
    }
    const sendMessage = ()=>{
        if(message !== ""){
            send()
            setMessage("")
        }
    }
    // const {
    //     error,
    //     isRecording,
    //     results,
    //     startSpeechToText,
    //     stopSpeechToText,
    // } = useSpeechToText({
    //     continuous: true,
    //     // crossBrowser: true,
    //     useLegacyResults: false
    // });
    // if (error) {
    //     setShowMic(false)
    // }

    // const textArea = textAreaRef.current
    // let res = ""
    // useEffect(()=>{
    //     for(let result of results){
    //         typeof(result) === "string"?res =result: res=result.transcript
    //     }
    //     if (textArea) {
    //         textArea.value += " "+ res
    //     }
    // },[results.length])
    // const toggleRecord = ()=>{
    //     if(isRecording){
    //         stopSpeechToText()
    //     }
    //     else{
    //         startSpeechToText()

    //     }
    // }

    return(
        <form className="fixed w-full flex bg-white ml-0 right-0 bottom-0 py-3">
            <div className="space-x-2 px-3 py-2 w-full rounded-lg bg-gray-50 ">
                <FileInput icon={<FaImage/>} multiple size="large" variant="icon" previewed="before">
                    <div className="flex flex-row justify-between items-center w-full">
                        <textarea ref={textAreaRef} id="chat" autoFocus onChange={handleMessageChange} rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                        <IconButton onClick={sendMessage} icon={<FaPaperPlane/>} variant="secondary" size="large"/>
                    </div>
                </FileInput>
                {/* {
                    showMic &&
                    <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100" onClick={toggleRecord}>
                        <span>
                            {
                                isRecording?
                                <FaStop size={19}/>:
                                <FaMicrophone size={19}/>
                            }
                        </span>
                        <span className="sr-only">Voice message</span>
                    </button>
                } */}
              
            </div>
        </form>
    )
}