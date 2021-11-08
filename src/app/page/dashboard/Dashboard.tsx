import { useCallback, useState } from 'react'

interface IListItem {
    title: string
    isSelected: boolean
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IListItem[]>([])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((ev) => {
        if (ev.key === 'Enter' && ev.currentTarget.value.trim()) {
            const title = ev.currentTarget.value
            ev.currentTarget.value = ''
            setLista(oldLista => [
                ...oldLista, 
                ...oldLista.every(e=> e.title!==title) ? [{title, isSelected:false}] : []
            ])
        }
    }, [])

    return (
        <>
            <p>Lista</p>

            <input onKeyPress={handleInputKeyDown} />

            <p>{lista.filter(e=> e.isSelected).length}</p>

            <ul>
                {lista.map(({title, isSelected}) => (
                    <li key={title}>
                        <input 
                            type="checkbox" 
                            checked={isSelected} 
                            onChange={
                                (ev) => setLista(oldLista => [
                                    ...oldLista.map(e=> e.title===title ? {...e, isSelected: !e.isSelected} : e) 
                                ])
                            }
                        />
                        <span>{title}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}