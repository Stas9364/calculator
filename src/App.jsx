import GlobalStyle from "./styles/globalStyles";
import React from "react";
import {useSelector} from "react-redux";
import {themeSelector} from "./redux";
import {Header} from "./components";
import {AppRoutes} from "./screens";

function App() {
  const theme = useSelector(themeSelector);
  return (
    <div className="App">
      <GlobalStyle theme={theme}/>
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
