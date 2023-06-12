import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";

const DomainEmailFinder = () => {
  const [email, setEmail] = useState([]);

  const fetchDomainEmail = () => {
    let input = "tcetmumbai.in";
    fetch(`https://api.hunter.io/v2/domain-search?domain=${input}&api_key=7a2ea45441592dcb3d0c7d424c5d9064b7bee12f`)
      .then(response => response.json())
      .then(data => {
        setEmail(data.data.emails);
      })
      .catch(error => {
        console.error("Error fetching domain email:", error);
      });
  };

  useEffect(() => {
    fetchDomainEmail();
  }, []);

  return (
    <div>
      {email.map(response => (
        <li key={response.value}>{response.value}</li>
      ))}
    </div>
  );
};

export default DomainEmailFinder;
