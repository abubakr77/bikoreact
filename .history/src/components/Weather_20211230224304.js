import React from "react";

const Weather = (props) => {
  return (
    <div>
      {props.tempreature && <p> tempreature:{props.tempreature}</p>}
      {props.city && <p>city:{props.city}</p>}
      {props.country && <p>country:{props.country}</p>}
      {props.humidity && <p>humidity:{props.humidity}</p>}
      {props.humidity && <p>humidity:{props.humidity}</p>}
    </div>
  );
};
export default Weather;
