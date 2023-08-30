const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", calculateAge);
clearBtn.addEventListener("click", clearInputs);

function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);
  const comparisonDate = document.getElementById("comparisonDate").value;

  if (isNaN(day) || isNaN(month) || isNaN(year) || !comparisonDate) {
    alert("Please select all the fields correctly.");
    return;
  }

  const birthday = new Date(year, month, day);
  const comparisonTimestamp = new Date(comparisonDate).getTime();

  if (isNaN(birthday.getTime())) {
    alert("Please select a valid date for the birthday.");
    return;
  }

  if (birthday.getTime() > comparisonTimestamp) {
    alert("Comparison date must be after the birthday.");
    return;
  }

  const difference = comparisonTimestamp - birthday.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = Math.floor(days / 365);

  resultDiv.innerHTML = `<p><b>Age:</b> ${years} years </p> <p>${days} days</p><p> ${weeks} weeks</p> <p>${hours} hours</p><p> ${minutes} minutes</p><p> ${seconds} seconds</p>`;
  clearBtn.style.display = "inline";
}

function clearInputs() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("comparisonDate").value = "";
  resultDiv.innerHTML = "";
  clearBtn.style.display = "none";
}


function setCurrentDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; 
  const currentDay = currentDate.getDate();

  document.getElementById("day").value = currentDay;
  document.getElementById("month").value = currentMonth;
  document.getElementById("year").value = currentYear;
  document.getElementById("comparisonDate").value = currentDate
    .toISOString()
    .split("T")[0];
}

setCurrentDate();