//Once press compute interest button
function compute() {
  //input principal amount
  var principal = document.getElementById("principal").value;
  //input rate amount
  var rate = document.getElementById("rate").value;
  //input no. of years
  var years = document.getElementById("years").value;
  //formula to calculate interest
  var interest = (principal * years * rate) / 100;
  //to get the currect date
  var year = new Date().getFullYear() + parseInt(years);

  //the paragraph that contain infos
  var result = document.getElementById("result").value;

  //to change the HTML content of the result
  //br - line break, mark - highlight
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <mark>${principal}</mark>,<br>  
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${year}</mark>.`;

  if (principal <= 0) {
    //input data validation (must be positive number)
    alert("Enter a positive number");
    document.getElementById("principal").focus(); //focus to the principal column after clicking ok
  }
}

//Slider text to indicate amount
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
