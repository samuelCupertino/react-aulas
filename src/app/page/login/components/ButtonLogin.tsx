import React from "react";

interface IBtnLoginProps {
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

export const ButtonLogin: React.FC<IBtnLoginProps> = ({type, onClick, children}) => (
    <button type={type} onClick={onClick}>
        <span>{children}</span>
    </button>
)