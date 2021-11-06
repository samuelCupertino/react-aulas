import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Dashboard } from '../page'


export const Routes = () => (
    <BrowserRouter>
        <Switch>

            <Route path="/" element={<Dashboard />} />

            <Route path="*" element={<Dashboard />} />
        </Switch>
    </BrowserRouter>
)