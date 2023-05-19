import OptionNavBarComponent from "./OptionNavBarComponent";
import { NavLink } from "react-router-dom";

const ListOptionNavBarComponent = (props) => {
  const { nameOption } = props;
  const isActiveClass = ({isActive}) => {
    return isActive ? 'active nav-link text-primary':'nav-link';
   };

  return (
    <>
      <div className="navbar-nav">
        {nameOption.map((item, index) => {
          return <OptionNavBarComponent key={index} titleOption={item} />;
        })}
      </div>
      <div className="navbar-nav">
        <NavLink to={`/aboutView`} className={isActiveClass}>
          Nosotros
        </NavLink>
        {/* <NavLink to={`/search`} className={isActiveClass}>
          Búsqueda
        </NavLink> */}
      </div>
    </>
  );
};

export default ListOptionNavBarComponent;
