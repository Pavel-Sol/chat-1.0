import {Container, TextField, Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useContext, useState} from 'react'

import {Context} from './../index'
import Loader from './Loader'


const Chat = () => {

   const {auth, firestore, firebase} = useContext(Context);
   const [user, loading, error] = useAuthState(auth);
   const [value, setValue] = useState('');

   const [messages, loadingMsg] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
   )


   const sendMessage = () => {
      firestore.collection('messages').add({
               uid: user.uid,
               text: value,
               displayName: user.displayName,
               photoURL: user.photoURL,
               createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('')
   }


   if(loadingMsg || !user || !messages) {
      return <Loader/>
   }

   return(
      <Container>
         <div className="chat__wrapper">
            <div className="messages__wrapper">
               <div className="messages">
                  {
                     messages.map((message) =>
                        <div key={message.uid} 
                        className={message.uid === user.uid? 'message__container-my' : 'message__container-alien'}>
                           <div className='message__avatar'>
                              <img src={message.photoURL} alt="" />
                           </div>
                           <div className={message.uid === user.uid? 'message__text-my' : 'message__text-alien'}>{message.text}</div>
                        </div>
                        )
                  }
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
                     endIcon={<SendIcon />}
                     onClick={sendMessage} >отправить</Button>
               </div>
            </div>
         </div>
      </Container>
   )
}

export default Chat