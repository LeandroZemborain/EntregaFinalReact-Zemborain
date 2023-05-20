import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const collectionOrders = "orders";

const BuyComponent = () => {
  const { car,cleanCar } = useContext(GeneralContext);
  const navigate = useNavigate();

  const _totalCompra = useMemo(() => {
    return car.reduce((partialSum, item) => partialSum + item.price, 0);
  }, [car]);
 

  const _order = useMemo(() => {
    const items = car.map((item) => ({ item, amount: 1 }));
    const date = new Date().toLocaleDateString("es-MX");//9/5/2023
    return { items, date };
  }, [car]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`Orden de compra creada folio: ${id}`);
      cleanCar();
      navigate("/");
    });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-10 m-5">
          <table>
            <tbody>
              <tr>
                <td colSpan={2} className="h4">Resumen de la venta</td>
              </tr>
              <tr>
                <td className="h5">Articulos: </td>
                <td colSpan={2} className="h5"> {" "+car.length+" "} Unidad(es)</td>
              </tr>
              <tr>
                <td className="h5">Total: </td>
                <td className="h5">${_totalCompra}</td>
              </tr>
              <tr>
                <td>
                  <button disabled={car.length === 0} onClick={cleanCar} className="btn btn-danger mt-5">
                    Vaciar
                  </button>
                </td>
                <td>
                  <button disabled={car.length === 0} onClick={actionBuy} className="btn btn-primary mt-5">
                    Comprar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
