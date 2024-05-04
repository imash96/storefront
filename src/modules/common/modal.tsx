import XMarkIcon from "@icons/x-mark"
import { useEffect } from "react"

type ModalProps = {
    show: boolean
    close: () => void
    size?: "small" | "medium" | "large"
    search?: boolean
} & React.PropsWithChildren


export default function Modal({ show, close, size = "medium", search = false, children, }: ModalProps) {
    const closeOnEscape = (ev: KeyboardEvent) => { if (ev.key === 'Escape') close() }

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscape);
        return () => document.body.removeEventListener("keydown", closeOnEscape);
    });

    return (
        <div className="relative z-[75]" onClick={close}>
            <div id="modal-curtain" className={`fixed inset-0 bg-bg-disable bg-opacity-60 backdrop-blur-sm ${show ? 'mOpen' : 'mClose'}`} />
            <div className="fixed inset-0 overflow-y-auto">
                <div id='modal' className={`flex min-h-full h-full items-center justify-center p-4 text-center ${show ? 'open' : 'close'}`}>
                    <div className={`flex flex-col rounded-sm border border-border-base justify-start w-full transform overflow-auto bg-bg-subtle-c py-5 px-6 text-left align-middle shadow-xl transition-all max-h-[85vh] ${size === "small" && "max-w-md"} ${size === "medium" && "max-w-xl"} ${size === "large" && "max-w-3xl"}`} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Title = ({ children, close }: { close: () => void } & React.PropsWithChildren) => {
    return (
        <div className="flex items-center justify-between mb-3 text-grey-81">
            <div className="text-lg">{children}</div>
            <button onClick={close}>
                <XMarkIcon width={20} />
            </button>
        </div>
    )
}

const Description = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="flex text-sm text-grey-81 items-center justify-center pt-2 pb-4 h-full">
            {children}
        </div>
    )
}

const Body = ({ children }: React.PropsWithChildren) => {
    return <div className="flex-1">{children}</div>
}

const Footer = ({ children }: React.PropsWithChildren) => {
    return <div className="flex items-center justify-end gap-x-4 mt-2">{children}</div>
}

Modal.Title = Title
Modal.Description = Description
Modal.Body = Body
Modal.Footer = Footer