import React from "react";

const Weather = (props) => {
  return (
    < className='info'>
      {props.tempreature && <p className='info-key'> tempreature:<span className="info-value">{props.tempreature}</span></p>}
      {props.city && <p>city:{props.city}</p>}
      {props.country && <p>country:{props.country}</p>}
      {props.humidity && <p>humidity:{props.humidity}</p>}
      {props.error && <p>error:{props.error}</p>}
    </div>
  );
};
export default Weather;
