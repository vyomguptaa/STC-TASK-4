function reg(frm) {
    var a = 0;

    var text1 = document.getElementById("name").value;
    var checkname = /^[a-zA-Z]{0,30}$/;

    if (checkname.test(text1)) {
        document.getElementById("name_lab").style.visibility = "hidden";
        a += 1;
    } else {
        document.getElementById("name_lab").style.visibility = "visible";
    }

    var text2 = document.getElementById("register").value;
    var checkreg = /^[a-z0-9]+$/i;

    if (checkreg.test(text2)) {
        document.getElementById("reg_lab").style.visibility = "hidden";
        a += 1;
    } else {
        document.getElementById("reg_lab").style.visibility = "visible";
    }

    var text3 = document.getElementById("email").value;
    var checkemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (checkemail.test(text3)) {
        document.getElementById("email_lab").style.visibility = "hidden";
        a += 1;
    } else {
        document.getElementById("email_lab").style.visibility = "visible";
    }

    var text4 = document.getElementById("phone").value;
    var checknum = /^[6-9][0-9]{9}$/;

    if (checknum.test(text4)) {
        document.getElementById("phone_lab").style.visibility = "hidden";
        a += 1;
    } else {
        document.getElementById("phone_lab").style.visibility = "visible";
    }

    var text5 = document.getElementById("dob").value;
    var checkdob = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (checkdob.test(text5)) {
        document.getElementById("db").style.visibility = "hidden";
        a += 1;
    } else {
        document.getElementById("db").style.visibility = "visible";
    }


    if (a == 5) {
        document.getElementById("success").style.visibility = "visible";
    } else {
        document.getElementById("success").style.visibility = "hidden";
    }



    var text6 = document.getElementById("prog").value;
    console.log(text1);
    console.log(text2);
    console.log(text5);
    console.log(text6);
    console.log(text3);
    console.log(text4);


}