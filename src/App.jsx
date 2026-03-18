import React from "react";
import { Header, Footer, About, Projects } from "./components/Index.jsx";
import "./stylesheets/application.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default App;
