function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
 if(userid_validation(uid))
{
if(passid_validation(passid))
{
if(allLetter(uname))
{

if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
return false;

} 

function userid_validation(uid)
{
  var numbers = /^[0-9]+$/;
  if(uid.value.match(numbers))
  {
  
  return true;
  }
  else
  {
  alert(' numeric characters only ');
  uid.focus();
  return false;
  }
}
function passid_validation(passid)
{
  var passw=  /^[A-Za-z]\w{6,12}$/;
  if(passid.value.match(passw)) 
  { 
  return true;
  }
  else
  { 
  alert('Wrong password... try only character in between 6 to 12 character only')
  passid.focus();
  return false;
  }
}
function allLetter(uname)
{ 
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))
  {
  
  return true;
  }
  else
  {
  alert(' alphabet characters only ');
  uname.focus();
  return false;
  }
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
