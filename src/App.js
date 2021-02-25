import React from "react";
import {CheckoutForm} from "./Checkout/CheckoutForm";

const initialClient = {
    firstName : '',
    lastName: '',
    phoneNumber: null,
    deliveryType: '',
    address1: '',
    address2: '',
    comment: ''
};

function App() {

  return (
      <div>
          <CheckoutForm initialClient={initialClient}/>
      </div>
  )
}

export default App;
