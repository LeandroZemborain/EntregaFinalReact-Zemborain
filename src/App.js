import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import NavBarComponent from "./components/NavBarComponent";
import AboutView from "./views/AboutView";
import { routes } from "./routes";
import ItemFormView from "./views/ItemFormView";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
import DetailCarView from "./views/DetailCarView";
import OrderView from "./views/OrderView";
function App() {
  const [car, setCar] = useState([]);

  const addToCar = (item) => {
    setCar([...car,item]);
  };

  const removeToCar = (item) => {
    const newArray = car.filter(_item => _item.id !== item.id);
    setCar(newArray)
  };

  const cleanCar = () => {
    setCar([]);
  };

  return (
    <GeneralContext.Provider value={{ addToCar,car,removeToCar,cleanCar }}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path={routes.root} element={<ProductsView />}></Route>
          <Route path="/products/detail/:idProduct" element={<DetailProductView />}></Route>
          <Route path={routes.aboutView} element={<AboutView />} />
          <Route path="/search" element={<ItemFormView />}></Route>
          <Route path="/products/car" element={<DetailCarView />}></Route>
          <Route path="/category/:category" element={<ProductsView />}></Route>
          <Route path="/order" element={<OrderView />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
