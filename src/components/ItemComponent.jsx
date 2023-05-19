import React, { useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemButtonsComponent from "./ItemButtonsComponent";

const ItemComponent = (props) => {
  const { data, showInfo, showDelete } = props;
  const { id: idProduct, title, image, description, price } = data;
  const { removeToCar } = useContext(GeneralContext);

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
  };

  const removeThisItem = () => {
    removeToCar(data);
  };

  return (
    <div className="card shadow h-100">
      <h6 className="card-header d-flex justify-content-around">
        {showShortValue(title, 25)}
        <ItemButtonsComponent 
        showInfo={showInfo} 
        showDelete={showDelete} 
        idProduct={idProduct}
        removeThisItem={removeThisItem} />
      </h6>
      <img className="card-img-top" width={200} height={230} src={image} alt="" />
      <div className="card-body d-flex row align-items-end">
        <p className="text-muted">{showShortValue(description)}</p>
        <p className="h5" >Precio de venta - $ {price}</p>
      </div>
    </div>
  );
};

export default ItemComponent;
