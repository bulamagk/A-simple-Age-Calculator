const text = document.getElementById("text");
const dateInput = document.getElementById("date");

function calcAge() {
  const totalMSInYear = 365 * 24 * 60 * 60 * 1000;
  const now = new Date().getTime();
  let selectedDate = dateInput.value;

  if (!selectedDate) {
    text.innerHTML = "Please Select Date";
    return;
  }

  let age;
  let myTotalMS;

  selectedDate = new Date(selectedDate).getTime();
  myTotalMS = now - selectedDate;

  age = myTotalMS / totalMSInYear;

  if (Math.sign(age) == -1) {
    text.innerText = "Invalid Date";
    return;
  }

  age = Math.floor(age);

  text.innerHTML = `You are ${age} Year(s) Old`;
}
