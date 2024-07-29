import React from "react";
import Header from "../../components/Header/Header";
import Error404 from "../../containers/error404/Error404";
import Footer from "../../components/Footer/Footer";

function NotFound(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Error404 theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default NotFound;
