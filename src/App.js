import logo from './logo.svg';
import './App.css';
import { withContext } from './context';
import { PrimaryButton } from '@fluentui/react';
function AppBase(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.context.test}
        </a>
        <PrimaryButton text="Click me!"/>
      </header>
    </div>
  );
}

const App = withContext(AppBase)
export default App
