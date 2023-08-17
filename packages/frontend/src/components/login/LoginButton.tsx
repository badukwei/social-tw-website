import React from 'react'
import { IconType } from 'react-icons';

interface LoginButtonProps {
    icon?: IconType
    text?: string
    isLoading: boolean
    onClick?: () => void
    title: string
    subTitle?: string
    color: string
    setNoteStatus?: () => void
}

// TODO: signup with wallet and without wallet
const LoginButton: React.FC<LoginButtonProps> = ({
    icon: Icon,
    text,
    onClick,
    isLoading,
    title,
    subTitle,
    color,
    setNoteStatus
}) => {
    return (
        <div className='
            flex 
            flex-col 
            justify-center 
            items-center
            w-full
            gap-2
            text-white
        '>
            <button
                type='button'
                onClick={onClick}
                disabled={isLoading}
                className={`
                flex
                flex-col
                justify-center
                items-center
                w-4/5
                max-w-[650px]
                py-4
                bg-[${color}]
                rounded-xl
                text-white
                hover:bg-gray-500
                focus:outline-offset-0
                bg-opacity-70
                drop-shadow-md
                drop-shadow-black
                `}
            >
                <span className='text-white font-semibold text-2xl tracking-wider'>{title}</span>
                <span className='text-xs tracking-wider'>{subTitle}</span>
            </button>
            {text &&
                <p
                    className='tracking-wider cursor-pointer'
                    onClick={setNoteStatus}
                >
                    什麼是 <span className='text-[#52ACBC] '>{text}</span> ?
                </p>
            }

        </div>
    )
}

export default LoginButton
