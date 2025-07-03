import logo from './logo.svg';
import './App.css';
import './CustomStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App app-bg">
      <header className="navbar-simple">
        <span className="navbar-title">Mi App</span>
      </header>
      <div className="main-section">
        <div className="search-bar">
          <select className="form-select form-select-sm" style={{ width: 'auto', minWidth: '120px', maxWidth: '200px', marginRight: '0.5rem' }}>
            <option value="option1">Opción 1</option>
            <option value="option2">Opción 2</option>
            <option value="option3">Opción 3</option>
          </select>
          <input
            type="text"
            placeholder="Buscar..."
            className="form-control"
            style={{ marginRight: '0.5rem' }}
          />
          <button className="btn btn-primary">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
