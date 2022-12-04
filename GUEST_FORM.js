const submit = document.querySelector("#submit");
  const fn = document.querySelector("#firstname");
  const mn = document.querySelector("#middlename");
  const ln = document.querySelector("#lastname");
  const phone = document.querySelector("#phonenumber");
  const cn = document.querySelector("#companyname");
  const pp = document.querySelector("#purpose");
  const pn = document.querySelector("#platenumber");
  const ty = document.querySelector("#type");
  const cl = document.querySelector("#color");

// function changeVal()
// {

//   const value = e.value;
//   const text = e.options[e.selectedIndex].text;
  
// }

  // var getValue = document.getElementById('color').selectedOptions[0].value;
 

  // var cl = document.getElementsByName('color')[0];
//  const cl = document.querySelector("#color");
  //  let cl = document.querySelector("#color").val();

  //  var c1 = $("#color").val();

  const br = document.querySelector("#brand");

  const msg = document.querySelector("#error-msg");
  const msg1 = document.querySelector("#error-msg1");
  const msg2 = document.querySelector("#error-msg2");
  const msg3 = document.querySelector("#error-msg3");
  const msg4 = document.querySelector("#error-msg4");
  const msg44 = document.querySelector("#error-msg44");
  const msg5 = document.querySelector("#error-msg5");
  const msg6 = document.querySelector("#error-msg6");
  const msg7 = document.querySelector("#error-msg7");
  const msg8 = document.querySelector("#error-msg8");



  submit.addEventListener("click", function(e) {
    e.preventDefault();

   
    if(fn.value.length === 0)
    {

      msg.innerHTML = "<p class='error'> please enter your first name <i class='error-icon fas fa-exclamation-circle'></i></p> ";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);
    }
    else if(mn.value.length === 0)
    {
      msg1.innerHTML = "<p class='error'> please enter your middle name <i class='error-icon fas fa-exclamation-circle'></i></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }
    else if(ln.value.length === 0)
    {
      msg2.innerHTML = "<p class='error'> please enter your last name <i class='error-icon fas fa-exclamation-circle'></i></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }

    else if(phone.value.length === 0)
    {
      msg3.innerHTML = "<p class='error'> please enter your phone number <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }

    else if(cn.value.length === 0)
    {
      msg4.innerHTML = "<p class='error'> please enter your company name <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }

    else if(pp.value.length === 0)
    {
      msg44.innerHTML = "<p class='error'> please fill this out for security purposes <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }

    else if(pn.value.length === 0)
    {
      msg5.innerHTML = "<p class='error'> please enter your vehicle plate number <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    } 

    else if(cl.value.length === 0)
    {

      msg6.innerHTML = "<p class='error'> please select your based color <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }

    else if(ty.value.length === 0)
    {
      msg7.innerHTML = "<p class='error'> please select your vehicle type  <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }
    else if(br.value.length === 0)
    {
      msg8.innerHTML = "<p class='error'> please select your vehicle brand <i class='error-icon fas fa-exclamation-circle'></p>";
      setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
      setTimeout(()=> document.querySelector(".error").remove(),2000);

    }


  });