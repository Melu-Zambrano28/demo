import { Outlet } from 'react-router-dom'
import { SideBar } from './components/SideBar/SideBarComponent'

function App() {
    return (
        <SideBar>
            <Outlet />
        </SideBar>
    )
}

export default App
