import { useState } from "react";
import img from "../assets/logo/logo.png";
import "reactjs-popup/dist/index.css";
import { Modal, Ripple, initTE } from "tw-elements";
import axios from "axios";

const EmailVerifier = () => {
  initTE({ Modal, Ripple });

  const apikey = "find_your_own_api_from_hunter.io";
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  let [allData, setAllDate] = useState({});
  let [apiResult, setApiresult] = useState([]);
  let changeHandler = (e) => {
    setAllDate({ ...allData, [e.target.name]: e.target.value });
  };
  const verifyEmail = async (email) => {
    try {
      const response = await axios.get(
        `https://api.hunter.io/v2/email-verifier?email=${allData.email}&api_key=${apikey}`
      );
      setApiresult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let submitHandler = async (e) => {
    openModal();
    e.preventDefault();
    verifyEmail();
  };
  console.log(apiResult);
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-black bg-orange-400 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">Secure-Suit</a>
            </div>
            <img src={img} alt="" srcset="" />
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Want To Check For Credential Breach</span>
              <a href="#" className="underline">
                Click Here!
              </a>
            </p>
            <p className="mt-6 text-sm text-center text-black-300">
              Read our{" "}
              <a href="#" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                conditions
              </a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Chack Authenticity Of Mail
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Enter Email
                </label>
                <input
                  name="email"
                  onChange={changeHandler}
                  type="email"
                  id="web-url"
                  autofocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center space-x-2"></div>
              <div>
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-orange-500 rounded-md shadow hover:bg-orange-900 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Find Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10  w-50 h-30px ">
          <div className="bg-white w-1/2 rounded-lg p-8">
            <h2 className=" text-2xl font-bold mb-4">
              Email Authenticity : {apiResult.score + "%"}
            </h2>
            <h2 className=" text-2xl font-bold mb-4">
              Email Status : {apiResult.status}
            </h2>

            <h2 className=" text-2xl font-bold mb-4">
              Email Deliverity Status : {apiResult.result}
            </h2>

            <button
              onClick={closeModal}
              className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-2px-4 rounded mt-4 justify-center align-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailVerifier;
