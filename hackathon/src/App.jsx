import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./output.css";
import "./custom.css";
import NewsApp from "./components/News";
import Services from "./components/Services";
import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerifier from "./components/Verfication";
import Helpdesk from "./components/Helpdesk";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Finder from "./components/Finder";
import DomainEmailFinder from "./components/Domainemailfinder";
// import Databreached from "./components/Databreached";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/Services"} element={<Services />} />
        <Route path={"/Finder"} element={<Finder />} />
        <Route path={"/DomainEmailFinder"} element={<DomainEmailFinder />} />
        <Route path={"/Email-Verifier"} element={<EmailVerifier />} />
        <Route path={"/Helpdesk"} element={<Helpdesk />} />
        {/* <Route path={"/Databreached"} element={<Databreached />} /> */}
        <Route path={"/News-App"} element={<NewsApp />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={"/About"} element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
