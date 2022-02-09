import React from "react";
import Modals from "./components/Modals"
import ContactForm from "./components/ContactForm";
/* import CrudApp from "./components/CrudApp"; */
import CrudApi from "./components/CrudApi";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="p-4">
      <h1>Ejercicios con React</h1>
      <hr></hr>
      <Modals></Modals>
      <hr></hr>
      <ContactForm></ContactForm>
      <hr></hr>
      <SelectsAnidados/>{/* Api no esta funcionando */}
      <hr></hr>
      <SongSearch></SongSearch>
      <br></br>
      <br></br>
      <hr></hr>
      <CrudApi></CrudApi>
      <br></br>
      <br></br>
      <hr></hr>
      {/* <CrudApp></CrudApp> */}
    </div>
  );
}

export default App;
