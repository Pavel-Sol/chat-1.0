import {Toolbar, AppBar, Grid, Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useContext} from 'react'

import { LOGIN_ROUTE} from '../utils/consts'
import {Context} from './../index'

const Navbar = () => {
   const {auth} = useContext(Context) 
   const [user, loading, error] = useAuthState(auth);

   return(
      <AppBar position="static">
         <Toolbar variant="dense">
            <Grid container justify='flex-end'>
               {user 
               ? <Button onClick= {() => auth.signOut()}
                color='primary'
                variant='contained'>ВЫЙТИ</Button>
               : <NavLink to={LOGIN_ROUTE}>
                  <Button color='primary' variant='contained'>ЛОГИН</Button>
               </NavLink>
               }
            </Grid>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar