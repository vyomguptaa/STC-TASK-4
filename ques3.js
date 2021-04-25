function mov() {
    var table = document.getElementById("display");
    var row = table.insertRow(1);
    var name = row.insertCell(0);
    var number = row.insertCell(1);
    var movie = row.insertCell(2);
    var kind = row.insertCell(3);
    var money = row.insertCell(4);


    name.innerHTML = document.getElementById("name").value;
    number.innerHTML = document.getElementById("number").value;
    movie.innerHTML = document.getElementById("movie").value;
    kind.innerHTML = document.getElementById("type").value;

    var price = document.getElementById("type").value;
    var a = 0;
    if (price == "Platinum") {
        a = 500;
    } else if (price == "Gold") {
        a = 350;
    } else if (price == "Silver") {
        a = 250;
    } else if (price == "Bronze") {
        a = 200;
    }
    money.innerHTML = a;
}