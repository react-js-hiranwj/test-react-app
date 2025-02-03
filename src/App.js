import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate(); /* useNavigate is a hook */

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the React App</h1>
        <button className='users-button' onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
