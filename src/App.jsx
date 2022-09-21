import {AppRoutes} from "./containers";
import {Header} from "./components";
import GlobalStyle from "./styles/globalStyles";
import React from "react";
import {useSelector} from "react-redux";

function App() {
  const color = useSelector(state => state.settings.selectedTheme);

  return (
    <div className="App">
      <GlobalStyle theme={color}/>
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
