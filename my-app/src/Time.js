import React from "react";

export default function Time() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];

  function createMarkup() {
    return {
      __html: ` ${day} ${month} ${date}, ${year};
   ${hours}:${minutes}`
    };
  }

  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
