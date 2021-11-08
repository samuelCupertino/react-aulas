import { useRef, useCallback, useMemo, useState } from 'react'
import { InputLogin } from './components/InputLogin'
import { ButtonLogin } from './components/ButtonLogin'
import { useUsuarioLogado } from '../../shared/hooks'

export const Login = () => {
    const { nomeDoUsuario } = useUsuarioLogado()
    
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() => email.length * 1000, [email.length])

    const handleLogin = useCallback(() => {
        inputPasswordRef.current?.focus()
        console.log(email, password)
    }, [email, password])
 
    return (
        <form>
            <p>Quantidade de caracteres no email: {emailLength}</p>

            <p>{nomeDoUsuario}</p>

            <InputLogin 
                label="Email"
                value={email}
                onChange={setEmail}
                onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin 
                label="Senha"
                type="password"
                value={password}
                ref={inputPasswordRef}
                onChange={setPassword}
            />
            
            <ButtonLogin type="button" onClick={handleLogin}>
                Login
            </ButtonLogin>
        </form>
    )
}