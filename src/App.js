import './App.css';
import CompleteTable from './components/CompleteTable';
import IncompleteTable from './components/IncompleteTable';

function App() {
  return (
    <div className="App">
      <IncompleteTable/>
      <CompleteTable/>
    </div>
  );
}

export default App;
