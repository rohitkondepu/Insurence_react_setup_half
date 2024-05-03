import { Link } from 'react-router-dom';
import './menu.css';
export const Menu = ()=>{
    return (
        <div>
            <ul className="menu">
                <li >
                    <Link to = '/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to ='/lead-management'>Leads</Link>
                </li>
            </ul>
        </div>
    )
}