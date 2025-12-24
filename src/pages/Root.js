import {Outlet} from 'react-router-dom'
import MainNavigation from '../Components/MainNavigation';
import classes from './Root.module.css'
function RootLayout(){
   return(
   <>
   <MainNavigation/>

    <Outlet/>
   
   </>
   );   
}

export default RootLayout;
