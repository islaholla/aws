import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <Link to='/solutions/aws'>Windows Migration</Link>
        <Link to='/solutions/sdp'> AWS Migration</Link>
        <Link>AWS Storage Services</Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
