import React from 'react';
import "./MainTop.css";
import Sunset1 from './img/sunset1.jpg';
function MainTop() {
    return (
        <div className="top_body">
          <div className="main_left">
            <h1>Welcome</h1>
            <h2>This is the same landing I created in HTML<br />but now I migrated it onto a React.js app.<br />I will be adding more functionality into<br />this one though so stay tuned.</h2>
            <ul>
              <li>Create About page</li>
              <li>Lessons learned page</li>
              <li>Link to original html page & Kanye gallery</li>
              <li>Routing pages together</li>
            </ul>
            <button className="contact_button grow">contact</button>
          </div>
          <div className="main_right">
          <img className="sunset" src={Sunset1} />
          </div>
        </div>
    )
}

export default MainTop;
