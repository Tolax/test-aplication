import './App.css';
import Requests from './Components/Requests';
import Violations from './Components/Violations';
import Calendar from './Components/Calendar';

function App() {

  return (
    <div className="App">
      <Calendar/>
      <Violations/>
    </div>
  );
}

export default App;
