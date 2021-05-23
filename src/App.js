import { BrowserRouter } from 'react-router-dom';
import Nabar from './components/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Nabar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
