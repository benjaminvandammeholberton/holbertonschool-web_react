import logo from './175b85183ecedb529e14.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">email</label>
          <input type="text" id="email"></input>
          <label htmlFor="password">password</label>
          <input type="password" id="password"></input>
          <button type="submit">Ok</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {currentYear} - {footerCopy}
        </p>
      </footer>
    </div>
  );
}

export default App;
