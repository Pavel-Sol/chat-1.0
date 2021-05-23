import {Container, Grid, Button} from '@material-ui/core'
import HowToRegIcon from '@material-ui/icons/HowToReg';;

const Login = () => {
   return(
      <Container>
         <div className="login__wrapper">
            <div className="login__card">
               <Button 
               variant="contained"
               color="primary" 
               endIcon={<HowToRegIcon />} >войти с google</Button>
            </div>
         </div>      
      </Container>
   )
}

export default Login