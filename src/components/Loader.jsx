import {CircularProgress, Container} from '@material-ui/core'

const Loader = () => {
   return(
      <Container>
         <div className="loader__wrapper">
            <CircularProgress />
         </div>
      </Container>
   )
}

export default Loader