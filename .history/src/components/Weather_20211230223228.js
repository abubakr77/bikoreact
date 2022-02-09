import React from "react";

const Weather = (props) => {
  return (
    <div>
      <p> tempreature:{props.tempreature}</p>
      <p>city:{props.city}</p>
      <p>country:{props.country}</p>
      <p>humidity:{props.humidity}</p>
    </div>
  );
};
export default Weather;
