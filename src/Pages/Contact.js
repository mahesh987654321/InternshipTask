import React from "react";

const Contact = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        paddingTop: "2rem",
      }}
    >
      <div>
        <h1>Office Address</h1> <br />
      </div>
      <div>
        <h5 style={{ textAlign: "center" }}>
          22024, No. 3/1-A-1, 16th Main Road, HAL 2nd Stage, Kodihalli,
          Indiranagar Bangalore Bangalore KA 560068 IN
        </h5>
      </div>
      <div>
        <h1>Mobile</h1>
      </div>
      <div>
        <h5>(+91) 702 702 44 96</h5>
      </div>
      <div>
        <h1>Email</h1>
      </div>
      <div>
        <h5>contactus@vidyuttech.com</h5>
      </div>
    </div>
  );
};

export default Contact;
