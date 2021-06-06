import React from "react";

export default function FormattedDate(props){
    let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday",];
    let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  

    let minutes= props.date.getMinutes();
        if (minutes <10) {minutes= `0${minutes}`;}

    return (
        <div>
            {day} {hours}:{minutes} {ampm}
        </div>
    );
    
}