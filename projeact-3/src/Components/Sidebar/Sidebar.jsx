import React from "react";

import { FaCartArrowDown } from "react-icons/fa";
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <FaCartArrowDown />
          </h1>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
