
import { Outlet } from 'react-router-dom'


const Users = () => {
    return (
        <div className='user_layout'>
            <Outlet/>
            {/* outlet used to get the nested routes in users */}
        </div>
    )
}

export default Users