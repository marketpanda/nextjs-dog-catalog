import {Dialog} from '@headlessui/react'
import { useRef } from 'react'

export function Modal({onClose = () => {}, children}) {
    let overlay = useRef()

    return (
        <Dialog
            static 
            open={true}
            onClose={onClose}
            initialFocus={overlay}
            className="fixed inset-0 z-10 flex items-center justify center"
        >
            <Dialog.Overlay
                ref={overlay}
                className="fixed inset-0 bg-gray-800/60"
            />
            <div className='reltive flex items-center justify-center w-1/2'>
                {children}
            </div>  
        </Dialog>
    )
}