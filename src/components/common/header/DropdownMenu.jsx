import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <Link to='/solutions/aws'>AWS Service Delivery: Amazon EC2 for Windows</Link>
        <Link to='/solutions/sdp'> AWS Migration and Modernization Consulting</Link>
        <Link to='/solutions/storage'>AWS Storage Consulting</Link>
        <Link to='/solutions/mso'>AWS Managed Service Provider</Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
