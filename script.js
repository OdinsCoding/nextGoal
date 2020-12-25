function setGoals(goals) {
  const circle = document.querySelector('circle');
  const percentdiv = document.querySelector('.percent');
  const completed = document.querySelector('.completed');
  completed.innerHTML = goals;
  const totaldiv = document.querySelector('.total');
  const total = totaldiv.innerHTML;
  let pc = (goals * 100) / total;
  const r =
    (circle.getAttribute('r').replace('%', '') * percentdiv.clientWidth) / 100; //actual radius of the circle
  const c = Math.PI * (r * 2); //circumference is 2*pi*r

  if (isNaN(goals)) {
    pc = 100;
  } else if (pc < 0) {
    pc = 0;
  } else if (pc > 100) {
    pc = 100;
  }
  document.querySelector('.number h2').innerHTML =
    Math.floor(pc) + '<span>%</span>';

  const length = (pc * c) / 100;

  circle.style.strokeDasharray = length + ' ' + (c - length);
  circle.style.strokeWidth = length > 0 ? '5%' : 0;
}

// On page load, manually set the goals to 50 for demonstration purposes
setGoals(100);
