function alerttext() { 
reasons = window.prompt("Reasons for alert","None");
console.log(reasons);
document.getElementById("screwcors").innerHTML = "<img src='http://makecdt.com/twilio.php?to=7032824029&reasons="+reasons+"' display='none' />Sent";
document.getElementById("screwcors").innerHTML = "";
}
function alertemail() {
reasons = window.prompt("Reasons for alert","None");
console.log(reasons);
document.getElementById("screwcors").innerHTML = "<img src='http://makecdt.com/sendgrid.php?to=mbaile18@gmu.edu&from=literallyobama@iamadoctor.com&subj="+reasons+"&body=An%20assessment%20of%20your%20trauma%20has%20lead%20to%20the%20the%20conclusion%20that%20you%20should%20seee%20a%20primary%20care%20physician%20for%20the%20following%20reasons:%20"+reasons+"' display='none' />Sent";
document.getElementById("screwcors").innerHTML = "";
}
