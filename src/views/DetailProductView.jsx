import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
const nameCollection = "items";

const DetailProductView = () => {
  const { idProduct: documentId } = useParams();
  const { addToCar } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const [amount, setAmount] = useState(1);
  const { title, image, description, price, category } = data;
  const addBtnAction = () => {
    addToCar(data);
    alert("Agregado al carrito");
  };

  return (
    <Fragment>
      <div className="row my-2">
        <div className="col-5 offset-md-3">
          <h2 className="text-danger">Oferta por tiempo limitado !!!</h2>
        </div>
        <div className="col-4">
          <h3>
            Categoria: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-md-2">
          <div className="card mb-3 shadow  py-2 px-5">
            <div className="row ">
              <div className="col-md-4">
                <img src={image} width={500} height={500} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price*amount}</small>
                  </p>
                  <p className="h7 my-3" style={{fontSize: 15 +"px" }}>
                    <span > Cantidad: </span>
                    {amount}{" "}
                    <div className="btn-group">
                      <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-secondary btn-sm"
                      style={{fontSize: 10 +"px" }}
                      >
                        +
                      </button>
                      <button
                        disabled={amount === 1}
                        onClick={() => setAmount(amount - 1)}
                        className="btn btn-outline-secondary btn-sm"
                        style={{fontSize: 10 +"px" }}
                      >
                        -
                      </button>
                    </div>
                  </p>
                  <button onClick={addBtnAction} className="btn btn-outline-danger btn-md">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;
