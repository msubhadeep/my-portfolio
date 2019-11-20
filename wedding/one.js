// window.sr = ScrollReveal();
// sr.reveal(".showcase-left", {
//   duration: 3000,
//   origin: "left",
//   distance: "200px",
//   delay: 1000
// });
// sr.reveal(".showcase-right", {
//   duration: 3000,
//   origin: "right",
//   delay: 1000,
//   distance: "200px"
// });
// sr.reveal(".midb" , {
//   duration: 3000,
//   delay: 1500,
//   origin: "bottom"
// });

// sr.reveal("#footext" , {
//   duration: 3000,
//   delay: 1000,
//   origin: "bottom",
//   viewFactor: 0.3
// });
           
// sr.reveal(".in", {
//   duration: 2000,
//   origin: "left",
//   distance: "300px",
//   viewFactor: 0.2
// });
// sr.reveal("#demo", {
//   duration: 2000,
//   origin: "right",
//   distance: "300px",
//   viewFactor: 0.2
// });
//--------------------------------AOS ----------------------------------------


//---------------------------------------- timer ---------------------------------

// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2019 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes and " + seconds + " seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
