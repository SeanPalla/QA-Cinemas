import { useState } from "react";
import StripeContainer from "../components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);
  const [paymentData, setPaymentData] = useState({
    aticket: 0,
    cticket: 0,
    kticket: 0,
  });

  const handleTicketData = (e) => {
    if (e.target.value < 0) {
      alert("Invalid Input, please enter value greater than 0.");
    } else setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>Tickets</h1>
      {showItem ? (
        <StripeContainer paymentData={paymentData} />
      ) : (
        <>
          <form>
            <label>
              Adult Tickets:
              <input
                value={paymentData.aticket}
                type="number"
                name="aticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <label>
              Child Tickets:
              <input
                value={paymentData.cticket}
                type="number"
                name="cticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <label>
              Concessionary Tickets:
              <input
                value={paymentData.kticket}
                type="number"
                name="kticket"
                onChange={handleTicketData}
                min="0"
              />
              <br />
            </label>
            <br />
            <button type="button" onClick={() => setShowItem(true)}>
              Purchase Tickets
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
