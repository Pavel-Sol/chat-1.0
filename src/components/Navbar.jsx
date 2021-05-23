import {Toolbar, AppBar, Grid, Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

import { LOGIN_ROUTE} from '../utils/consts'

const Navbar = () => {
   const user = false

   return(
      <AppBar position="static">
         <Toolbar variant="dense">
            <Grid container justify='flex-end'>
               {user 
               ?<Button className='test' color='primary' variant='contained'>ВЫЙТИ</Button>
               :<NavLink to={LOGIN_ROUTE}>
                  <Button color='primary' variant='contained'>ЛОГИН</Button>
               </NavLink>
               }
            </Grid>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar