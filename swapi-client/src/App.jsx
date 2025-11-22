import './App.css'
import People from './components/People';
import { apiGet } from './utils/api';

function App() {

  //apiGet("people/").then(console.log);

  return (
    <>
      <People />
    </>
  )
}

export default App
