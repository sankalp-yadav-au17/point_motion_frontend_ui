import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nvbar from './components/Nvbar';
import Portfolio_Company from "./components/Portfolio_Company"

function App() {
  return (
    <main className='vh-100'>
      <Nvbar/>
      <Portfolio_Company/>
    </main>
  );
}

export default App;
