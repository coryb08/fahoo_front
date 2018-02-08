import React from "react";
import SearchForm from "../containers/SearchForm";
import Logo from "../../images/CNN-logo.jpg";

const Header = props => (
  <div className="header">
    <div className="mainLogo">
      <img
        className="imageLogo"
        src="http://studiorokit.com/wp-content/uploads/2013/09/new-yahoo-logo-flat.png"
      />
    </div>
    <SearchForm />
  </div>
);

export default Header;
