import React from "react";
import SearchForm from "../containers/SearchForm";
import Logo from "../../images/CNN-logo.jpg";

const WeatherWidget = props => (
  <div className="weatherDiv">
    <a target="_blank" href="http://www.booked.net/weather/new-york-18103">
      <img
        src="https://w.bookcdn.com/weather/picture/32_18103_1_1_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=16890"
        alt="booked.net"
      />
    </a>
  </div>
);

export default WeatherWidget;
