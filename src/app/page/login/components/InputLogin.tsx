import React from 'react'

interface IInputLoginProps {
    type?: string
    label?: string
    value?: string
    ref?: React.RefObject<HTMLInputElement>
    onChange?: (newValue: string)=> void
    onPressEnter?: () => void
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => (
    <div>
        <label>{props.label}</label>
        <input
            type={props.type}
            value={props.value}
            onChange={ev => props.onChange?.(ev.target.value)} 
            onKeyDown={ev => ev.key === 'Enter' && props.onPressEnter?.()}
            ref={ref}
        />
    </div>
))
