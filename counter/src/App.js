import logo from './logo.svg';
import './App.css';
import {Counter} from "./Components/counter"

function App() {

  let c = 0;

  return (
    <div className="App">
        < Counter value={c} />  

    </div>
  );
}

export default App;
