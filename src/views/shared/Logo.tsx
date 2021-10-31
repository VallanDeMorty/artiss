import React, { FC } from "react";

import "./Logo.css";

const artissLogo = require("./artiss.svg");

const Logo: FC = () => (
  <h1 className="Logo">
    <i dangerouslySetInnerHTML={{ __html: artissLogo.default }} />
  </h1>
);

export default Logo;
