import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

import Nabar from './components/Navbar';
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Nabar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
