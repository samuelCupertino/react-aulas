import React, { useState, useCallback, useEffect } from 'react'

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string
    logout: () => void
}

export const UsuarioLogadoContext = React.createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData)

export const UsuarioLogadoProvider: React.FC = ({children}) => {
    const [nome, setNome] = useState('')

    useEffect(() => {
        setTimeout(() => setNome('nome'), 2000)
    }, [])

    const handleLogout = useCallback(() => {
        console.log('Logout...')
    }, [])
    
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}