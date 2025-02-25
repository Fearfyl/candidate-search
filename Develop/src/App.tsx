import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '60px' }}> 
        <Outlet />
      </main>
    </>
  );
}

export default App;