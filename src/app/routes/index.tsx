import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Dashboard, Login } from '../page'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Dashboard />} />
        </Switch>
    </BrowserRouter>
)