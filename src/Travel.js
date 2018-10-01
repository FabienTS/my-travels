import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={photo} />
    <figcaption>
      <blockquote>{}</blockquote>
      <cite>{country}</cite><br/>
      <cite>{destination}</cite><br/>
      <cite>{distance}</cite><br/>
    </figcaption>
  </figure>
);

export default Travel;