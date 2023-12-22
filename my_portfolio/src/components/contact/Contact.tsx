import React from "react";
import "./contact.css";

const Contact = () => {
  const phone = "+49 16097999589";
  const email = "babaianvalentina05@gmail.com";

  return (
    <div className="contact_container">
      <h1 className="contact_header">I'll be glad to hear your suggestions:</h1>
      <p className="location"> &#128205; Germany, NRW: Moenchengladbach</p>
      <p className="phone">
        &#x260E;
        <a href={`tel:${phone}`} style={{ marginLeft: "15px" }}>
          {phone}
        </a>
      </p>
      <p className="email">
        &#x1F4E9;
        <a href={`mailto:${email}`} style={{ marginLeft: "15px" }}>
          {email}
        </a>
      </p>
      <div className="profilsLinks">
      <p className="gitHab">
        <a href="https://github.com/babaianv" target="_blank">
          <img
            src="https://img.shields.io/badge/GitHub-3b3d3e?logo=github"
            alt="GitHub"
          />
        </a>
      </p>

      <p className="linkedIn">
        <a
          href="https://www.linkedin.com/in/valentyna-babaian-641373204/"
          target="_blank"
        >
          <p/>
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin"
            alt="LinkedIn"
          />
        </a>
      </p>
      </div>
    </div>
  );
};

export default Contact;
