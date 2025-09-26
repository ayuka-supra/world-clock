function updateTime() {
  //paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM, Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  //jakarta
  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Asia/jakarta");

  jakartaDateElement.innerHTML = jakartaTime.format("MMMM, Do YYYY");
  jakartaTimeElement.innerHTML = jakartaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
