import { AppRouter } from '../../app.router';
import './layout.css';
import { Menu } from './menu/menu';

export function Layout() {
    return (
        <div>
            {/*Header*/}
            <div className='h-5 bg-light'>

            </div>
            {/*Center*/}
            <div className='h-92 row'>
                {/*menu*/}
                <div className='col-2 bg-light'>
                    <Menu>
                        
                    </Menu>
                </div>
                {/*container*/}
                <div className='col-10 bg-white'>
                    <AppRouter></AppRouter>

                </div>

            </div>
        </div>
    )
}