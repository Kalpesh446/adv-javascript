let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let stringhr = hr;
    let stringmin = min;
    let stringsec = sec;
    let stringcount = count;

    if (hr < 10) {
      stringhr = "0" + stringhr;
    }
    if (min < 10) {
      stringmin = "0" + stringmin;
    }
    if (sec < 10) {
      stringsec = "0" + stringsec;
    }
    if (count < 10) {
      stringcount = "0" + stringcount;
    }

    document.getElementById("hr").innerHTML = stringhr;
    document.getElementById("min").innerHTML = stringmin;
    document.getElementById("sec").innerHTML = stringsec;
    document.getElementById("count").innerHTML = stringcount;
    setTimeout("stopwatch()", 10);
  }
}
