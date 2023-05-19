import React, { memo, useContext, useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
import "./NavBarComponent.css";
const nameCollection = "categories";
/*
  @params props type Array
*/
const NavBarComponent = (props) => {
  const { car } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection });

  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            width={150}
            height={80}
            src={require('../Arropando_logo.png')} 
            alt=""
            srcSet=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListOptionNavBarComponent nameOption={dataProcess}></ListOptionNavBarComponent>
        </div>
        {car.length >= 0 ? (
          <NavLink to="/products/car" className="carrito">
            <span>🛒: </span>
            {car.length}
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default memo(NavBarComponent);
