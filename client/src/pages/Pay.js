import { useState } from "react";
import StripeContainer from "../components/StripeContainer";
import React from "react";
import Select from "react-select";
import ".//paymentStyle.css";

function Payment() {
  const [showItem, setShowItem] = useState(false);
  const [paymentData, setPaymentData] = useState({
    aticket: 0,
    cticket: 0,
    kticket: 0,
  });

  const { aticket, cticket, kticket } = paymentData;
  const aAmount = aticket * 10;
  const cAmount = cticket * 5;
  const kAmount = kticket * 7;
  const totalAmount = (aAmount + cAmount + kAmount) * 100;

  const handleTicketData = (e) => {
    if (e.target.value < 0) {
      alert("Invalid Input, please enter value greater than 0.");
    } else setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const options = [
    { value: "BlackAdam", label: "Black Adam" },
    { value: "Deadpool", label: "Deadpool" },
    { value: "HowToTrainYourDragon", label: "How To Train Your Dragon" },
    { value: "Jaws", label: "Jaws" },
    { value: "ShawshankRedemption", label: "Shawshank Redemption" },
  ];

  return (
    <div className="Payment">
      {showItem ? (
        <StripeContainer paymentData={paymentData} />
      ) : (
        <>
          <div className="SelectMovieDiv">
            <h1 className="SelectMovie">Select Movie</h1>
            <Select className="SelectMovieOption" options={options} />
          </div>
          <form className="PaymentForm">
            <h1 className="SelectTickets">Select Tickets</h1>
            <label className="AdultTicket">
              Adult Tickets: £10 Each
              <br />
              <input
                className="AdultInput"
                value={paymentData.aticket}
                type="number"
                name="aticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <label className="ChildTicket">
              Child Tickets: £5 Each
              <br />
              <input
                className="ChildInput"
                value={paymentData.cticket}
                type="number"
                name="cticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <label className="ConTicket">
              Concessionary Tickets: £7 Each
              <br />
              <input
                className="ConInput"
                value={paymentData.kticket}
                type="number"
                name="kticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <p className="totalPay">Total Amount: £{totalAmount / 100}</p>
            <button
              className="PurchaceButton"
              type="button"
              onClick={() => setShowItem(true)}>
              Purchase Tickets
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Payment;
