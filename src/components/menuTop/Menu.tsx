import React from 'react';
import {
  Link
} from "react-router-dom";

function MenuTop() {
  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pagetest">Test</Link>
            </li>
          </ul>
        </nav>
  );
}

export default MenuTop;
