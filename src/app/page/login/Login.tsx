import { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => console.log(email, password)

    return (
        <form>
            <div>
                <label htmlFor="">
                    <samp>Email</samp>
                    <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <samp>Senha</samp>
                    <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
                </label>
            </div>
            <button type="button" onClick={handleLogin}>Entrar</button>
        </form>
    )
}