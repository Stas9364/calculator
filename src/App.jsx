import './App.css';
import {AppRoutes} from "./containers";
import {Header} from "./components";

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
