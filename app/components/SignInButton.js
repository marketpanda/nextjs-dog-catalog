'use client'

import Link from "next/link"
import Image from "next/image"
import { useSession, signIn, signOut} from 'next-auth/react'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'

import {
    ArrowRightOnRectangleIcon,
    Cog8ToothIcon,
    IdentificationIcon

} from '@heroicons/react/24/solid'

const SignInButton = () => {
    const {data: session} = useSession()

    if (session && session.user) {
        return (
            <div>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    

    return (
        <button onClick={() => signIn()}>Sign In
        
        </button>
    )
}

export default SignInButton