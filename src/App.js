import "./App.css";

import Header from "./Layout/Header/Header";
//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactSec from "./Layout/Section/ContactSec";
import Contribute from "./Pages/Contribute";
import DMCA from "./Pages/DMCA";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contribute />
      <ContactSec />
      <DMCA />
    </div>
  );
}

export default App;
