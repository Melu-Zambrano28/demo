import App from '../App'
import { DashboardComponent } from '../components/Dashboard/DashboardComponent'
import { SideBar } from '../components/SideBar/SideBarComponent'

export const routers = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/dashboard',
        element: (
            <SideBar>
                <DashboardComponent />
            </SideBar>
        ),
    },
    {
        path: '/agenda',
        element: (
            <SideBar>
                <div>Agenda</div>
            </SideBar>
        ),
    },
]
