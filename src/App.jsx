import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContent.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' && 'light-mode'} app`}>
      <Header />
      <Main />
      <Contacts />
    </div>
  )
}

export default App
