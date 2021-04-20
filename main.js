function getPara1()
{
    var inputs = [];
    for (var i = 1; i<=6; i++)
    {
        inputs.push(document.getElementById("right_1" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        inputs.push(document.getElementById("right_2" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        inputs.push(document.getElementById("right_3" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        inputs.push(document.getElementById("right_4" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        inputs.push(document.getElementById("right_5" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        inputs.push(document.getElementById("right_6" + i).value);
        inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs.join(". ");
        document.getElementById("para1").innerHTML = inputs;
    }

}