import {Container, Button} from '@material-ui/core'
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {useContext} from 'react'
import firebase from 'firebase';

import {Context} from './../index'

const Login = () => {
   const {auth} = useContext(Context)

   const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
   }


   return(
      <Container>
         <div className="login__wrapper">
            <div className="login__card">
               <Button 
               onClick= {login} 
               variant="contained"
               color="primary" 
               endIcon={<HowToRegIcon />} >войти с google</Button>
            </div>
         </div>      
      </Container>
   )
}

export default Login