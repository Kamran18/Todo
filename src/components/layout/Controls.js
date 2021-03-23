import React from "react";
import "./Controls.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { MdSort } from "react-icons/md";

function Controls() {
  return (
    <div className="controls">
      <Link to="/" className="link">
        <AiFillHome size={20}/>
      </Link>
      <Link to="/add-new" className="link">
        <RiAddCircleFill size={20}/>
      </Link>
    </div>
  );
}

export default Controls;
