import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";
import "./payment.css";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import SearchNav from "../header/SearchNav";

export default class PaymentForm extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("You have finished payment!");
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div>
        <SearchNav />
        <div key="Payment">
          <div className="App-payment mt-5">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
            {/* <h1>Enter your payment details</h1>
                         <h4>please input your information below</h4> */}
            <div className="flex justify-center mt-4">
              <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
                <div className="form-group w-[20rem]">
                  <small>Name on card:</small>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    pattern="[a-z A-Z-]+"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group w-[20rem]">
                  <small>Card Number:</small>
                  <input
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    pattern="[\d| ]{16,22}"
                    maxLength="19"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group w-[20rem]">
                  <small>Expiration Date:</small>
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group w-[5rem]">
                  <small>CVC:</small>
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <input type="hidden" name="issuer" value={issuer} />
                <div className="form-actions flex justify-center ">
                  <button className="border-2 p-2 bg-[#232B38] text-white font-[600] rounded-md mt-4 w-[20rem]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
