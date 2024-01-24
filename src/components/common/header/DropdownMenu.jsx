import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
 const [isDropdownVisible, setDropdownVisible] = useState(false);
 const [isShow, setShow] = useState(false);

  const handleMouseEnter = () => {
    isDropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)
  };
  const compatancy = () => {
    isShow ? setShow(false) : setShow(true)
  };

  return (
    <div className="dropdown-menu">
      <ul>
        <Link onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseEnter}>SDP
            {isDropdownVisible && <div className="windows"> <ul><Link to="/solutions/sdp">Windows Solution</Link></ul></div>}

        </Link>
        
        <Link onMouseEnter={compatancy}
              onMouseLeave={compatancy}>Competency
        {isShow && 
        <div className="aws">
              <ul>
              <Link to="/solutions/aws">AWS</Link>
              <a>Cloud Migration</a>
              </ul>
        </div>
      }
            
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
