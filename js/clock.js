const clock = document.getElementById("clock");

function nowTime() {
  const [hour, minute] = [new Date().getHours(), new Date().getMinutes()];
  clock.innerText = `${hour} : ${String(minute).padStart(2, "0")}`;
}

nowTime();
setInterval(nowTime, 1000);
