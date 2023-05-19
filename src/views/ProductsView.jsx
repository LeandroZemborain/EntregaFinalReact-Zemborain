import React, { Fragment, memo, useMemo } from "react";
import ItemComponent from "../components/ItemComponent";
import useFirestore from "../utils/useFirestore";
import { useParams } from "react-router-dom";
const nameCollection = "items";

const ProductsView = (props) => {
  const { category } = useParams();

  const options = useMemo(() => {
    const _optionwithFilters =  { nameCollection, filters: { where: ["category", "==", category] } };
    const _optionWithOutFilters = { nameCollection };
    return category ?_optionwithFilters : _optionWithOutFilters ;
  }, [category]);

  const [data, loading] = useFirestore(options);

  
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 p-4 g-5">
          {loading ? (
            <h1>Cargando⏳</h1>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ItemComponent showInfo data={item}  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(ProductsView);
