import {Container, TextField, Button} from '@material-ui/core'
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useContext, useState} from 'react'

import {Context} from './../index'


const Chat = () => {

   const {auth, firestore} = useContext(Context) 
   const [user, loading, error] = useAuthState(auth);
   const [value, setValue] = useState('')

   const sendMessage = () => {
      console.log(value)
   }

   return(
      <Container>
         <div className="chat__wrapper">
            <div className="messages__wrapper">
               <div className="messages">
               </div>
            </div>
            <div className="form__wrapper">
            <div className="form">
                  <TextField 
                     fullWidth
                     rowsMax={3}
                     variant='outlined'
                     value={value}
                     onChange={e => setValue(e.target.value)}/>
                  <Button
                     style={{marginLeft: '15px', marginTop: '10px'}}
                     variant="contained"
                     color="primary"
                     onClick={sendMessage} >отправить</Button>
               </div>
            </div>
         </div>
      </Container>
   )
}

export default Chat