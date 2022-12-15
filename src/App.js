import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer greeting={"Sin stock de Productos!!!"} />
      <Productos/>
      <Footer/>
    </div>
  );
}

export default App;
