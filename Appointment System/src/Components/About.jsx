import React from "react";

const About = () => {
  return (
    <div style={{ margin: "80px" }} className="formcontainer">
      <div>
        {" "}
        <img width={600} src="building.jpg" alt="House" />
      </div>

      <div>
        <h1 style={{ padding: "40px" }}>Our Story</h1>
        <hr />
        <p style={{ padding: "40px" }}>
          The McCann family is no stranger to excellent veterinary care. With a
          combined 25+ years of clinical and emergency experience, they have the
          expertise needed to provide nothing but the best for your pet. We know
          that pets are a part of the family, and it is our philosophy to help
          them live longer, happier, and healthier lives.
        </p>
      </div>
    </div>
  );
};

export default About;
