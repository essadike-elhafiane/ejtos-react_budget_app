import React, {  useState } from "react";
// import { AppContext } from "../context/AppContext";
import "../index.css";

const Currency = () => {
//   const [action, setAction] = useState("");
//   const { currency, dispatch } = useContext(AppContext);

//   const handleCurrencyChange = (event) => {
//     const updatedCurrency = event.target.value;
//     setAction(updatedCurrency);
//     // event.target.value = '';
//     dispatch({
//       type: "SET_CURRENCY",
//       payload: updatedCurrency,
//     });
//   };
const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');
const [show , setShow] = useState(false);
// const ref = React.createRef();

const currencies = [
  '$ Dollar',
  '£ Pound',
  '€ Euro',
  '₹ Rupee',
];

const handleCurrencyChange = (event) => {
  setSelectedCurrency(event.target.value);
};

return (
    <div className="alert  alert-secondary">
      <div className="currency-dropdown">
      <span onClick={()=> setShow(!show)}>
      <span className="selected-currency"> currency ({selectedCurrency})</span>
      <span className="dropdown-arrow">▼</span>
      </span>

      {show && <div className="current-options">
        { currencies.map((currency) => (
          <div key={currency} >
            <button
              className={currency === selectedCurrency ? 'selectedC' : 'notSelectedC'}
              value={currency}
              onClick={(event) => {handleCurrencyChange(event)
                setShow(false)
              
              } }
            >
              {currency}
            </button>
          </div>
        ))}
      </div>}
    </div>
    </div>
);
};
export default Currency;
