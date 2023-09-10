import './App.css';

//Constant elements (header and footer); 
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';

//Elementos de rotas de links
import {BrowserRouter, Routes, Route} from "react-router-dom";

//pages
import Home from './Pages/Home';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
