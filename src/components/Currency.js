import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../index.css";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState("£ Pound");
  const [show, setShow] = useState(false);
  const currencies = ["$ Dollar", "£ Pound", "€ Euro", "₹ Rupee"];

  const handleCurrencyChange = (event) => {
    const updatedCurrency = event.target.value;
    setSelectedCurrency(updatedCurrency);
    const currencySymbol = updatedCurrency.split(" ")[0];
    dispatch({
      type: "CHG_CURRENCY",
      payload: currencySymbol,
    });
  };

  return (
    <div className="alert  alert-secondary">
      <div className="currency-dropdown">
        <span onClick={() => setShow(!show)}>
          <span className="selected-currency">
            {" "}
            currency ({selectedCurrency})
          </span>
          <span className="dropdown-arrow">▼</span>
        </span>

        {show && (
          <div className="current-options">
            {currencies.map((currency) => (
              <div key={currency}>
                <button
                  className={
                    currency === selectedCurrency ? "selectedC" : "notSelectedC"
                  }
                  value={currency}
                  onClick={(event) => {
                    handleCurrencyChange(event);
                    setShow(false);
                  }}
                >
                  {currency}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Currency;
