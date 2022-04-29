import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Counter } from './components/class/Counter'
import { Private } from './components/Auth/Private'
import { Profile } from './components/Auth/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter message="The Count is : "/>
        <Private IsLoggedIn={true} Component={Profile}/>
        </header>
    </div>
  );
}

export default App;
