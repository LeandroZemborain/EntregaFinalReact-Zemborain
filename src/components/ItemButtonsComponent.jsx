import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const ItemButtonsComponent = ({showDelete,showInfo,removeThisItem,idProduct}) => {
  return (
    <Fragment>
      {showDelete ? (
        <button className="btn btn-danger btn-sm" onClick={removeThisItem}>
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/products/detail/${idProduct}`}>
          <button className="btn btn-outline-info btn-sm">+ info</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ItemButtonsComponent;
