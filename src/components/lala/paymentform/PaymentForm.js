import React, { useContext } from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";
import "./payment.css";

import { useNavigate } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

import { MdArrowForwardIos } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { TbMinusVertical } from "react-icons/tb";

import { FaInfoCircle } from "react-icons/fa";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import SearchNav from "../header/SearchNav";
import { Context } from "../../context/Context";

class PaymentFormClass extends React.Component {
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
    alert("Your payment was successful!");
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;
    const { navigation, state, dispatch } = this.props;
    return (
      <div>
        <SearchNav
          selected={false}
          passenger={false}
          payment={true}
          additional={false}
        />
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
                  <p className="font-[700]">Name on card:</p>
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
                  <p className="font-[700]">Card Number:</p>
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
                  <p className="font-[700]">Expiration Date:</p>
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
                  <p className="font-[700]">CVC:</p>
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
                <div
                  onClick={() => navigation("/boardingpass")}
                  className="form-actions flex justify-center "
                >
                  <button className="border-2 p-2 bg-[#232B38] text-white font-[600] rounded-md mt-4 w-[20rem]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="fixed bottom-0 w-screen">
          <div className="h-[88px] bg-[#232B38] w-full text-white flex items-center justify-center  ">
            <div className="flex items-center ">
              <div className="w-[426.66px] px-[15px]">
                <p className="text-[14.67px] font-[700] mb-[10px]">Departure</p>
                <div className="flex items-center gap-2 text-[12px] font-[500] ">
                  <p>
                    {state?.selectedflightobject?.departureAirportCity.slice(
                      0,
                      3
                    )}
                    -{" "}
                    {state?.selectedflightobject?.arrivalAirportCity.slice(
                      0,
                      3
                    )}
                  </p>
                  <BsFillCircleFill className="w-[5.16px] h-[6px]" />
                  <p>
                    {state?.firstDateDay.slice(0, 3)}, {state?.firstDate}
                  </p>
                </div>
                <div className="flex items-center text-[12px] gap-1 font-[500]">
                  <div className="flex items-center gap-1">
                    <p>Departure</p>
                    <p>{state?.selectedflightobject?.departureTime}</p>
                  </div>
                  <TbMinusVertical />
                  <div className="flex items-center gap-1">
                    <p>Arrival</p>
                    <p>{state?.selectedflightobject?.arrivalTime}</p>
                  </div>
                </div>
              </div>
              <div className="w-[170.66px] flex"></div>
              <div className="w-[256.68px] float-right ">
                <p className="text-[12px] font-[500] text-right">
                  Total price for 1 passenger
                </p>
                <div className="flex items-center gap-2 justify-end">
                  <div className="text-[12px] font-[500]">
                    <p className="h-[12px]">EUR</p>
                    <p>Euro</p>
                  </div>
                  <p className="text-[22px] font-[700]">
                    {state?.selectedPrice}.42
                  </p>
                </div>
              </div>
              <div
                onClick={() => navigation("/payment")}
                className="px-[15px] cursor-pointer"
              >
                <div className="bg-[#E81932] px-[12px] py-[6px] rounded-[4px] w-[140.66px] h-[68px] flex items-center justify-between text-white ">
                  <p className="font-[700] text-[14px]">Continue</p>
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();
  const { state, dispatch } = useContext(Context);

  return (
    <PaymentFormClass
      {...props}
      navigation={navigation}
      state={state}
      dispatch={dispatch}
    />
  );
}
