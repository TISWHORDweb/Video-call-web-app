import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Config/routes';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
    </BrowserRouter>
  );
}

export default App;
