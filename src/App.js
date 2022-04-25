import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import SearchProduct from './Components/SearchProduct/SearchProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/searchItems" element={<SearchProduct></SearchProduct>}></Route>
          <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
