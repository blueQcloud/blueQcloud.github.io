

var size_prices = new Array();
size_prices["S"]=15;
size_prices["M"]=21;
size_prices["L"]=30;


function getSizeprices()
{
    var pizzaSizePrice=0;
    var theForm = document.getElementById("pizza_form");
    var selectedSize = theForm.elements["size"];
    pizzaSizePrice = size_prices[selectedSize.value];

    return pizzaSizePrice;
}

function getQuantity()
{

    var theForm = document.forms["pizza_form"];
    var quantity = theForm.elements["quantity"];
    var howmuch =0;
        howmuch = parseInt(quantity.value);
    console.log(howmuch)
    return howmuch;
}


function getTotal_1 () {
    var pizzaPrice_1 = getQuantity() * getSizeprices()
    if (isNaN(pizzaPrice_1)){
        pizzaPrice_1 = 0
    }
    document.getElementById("sideView").innerHTML =
        pizzaPrice_1 ;
    return pizzaPrice_1;
}


function getSizeprices2()
{
    var pizzaSizePrice=0;
    var theForm = document.getElementById("pizza_form");
    var selectedSize = theForm.elements["size2"];
    pizzaSizePrice = size_prices[selectedSize.value];

    return pizzaSizePrice;
}

function getQuantity2() {

    var theForm = document.forms["pizza_form"];
    var quantity = theForm.elements["quantity2"];
    var howmuch = 0;

        howmuch = parseInt(quantity.value);
    return howmuch;
}

function getTotal_2 () {
    var pizzaPrice_2 = getQuantity2() * getSizeprices2()
    if (isNaN(pizzaPrice_2)){
    pizzaPrice_2 = 0
    }
    document.getElementById("sideView2").innerHTML =
        pizzaPrice_2 ;
    console.log(pizzaPrice_2);
    return pizzaPrice_2;
}

function getSizeprices3() {

    var pizzaSizePrice=0;
    var theForm = document.getElementById("pizza_form");
    var selectedSize = theForm.elements["size3"];
    pizzaSizePrice = size_prices[selectedSize.value];

    return pizzaSizePrice;
}

function getQuantity3() {

    var theForm = document.forms["pizza_form"];
    var quantity = theForm.elements["quantity3"];
    var howmuch = 0;
        howmuch = parseInt(quantity.value);

    return howmuch;
}

    function getTotal_3 () {
        var pizzaPrice_3 = getQuantity3() * getSizeprices3();
        if (isNaN(pizzaPrice_3)){
            pizzaPrice_3 = 0
        }
        document.getElementById("sideView3").innerHTML =
            pizzaPrice_3 ;
        return pizzaPrice_3;
    }


        function getTotal() {
            // add eeerrrrthang together by making a new variable mayne
            var pizzaPrice = getTotal_1() + getTotal_2() + getTotal_3();
            console.log(getTotal_3());
            console.log(pizzaPrice);
            document.getElementById('totalPrice').innerHTML =
                "Total Amount $" + pizzaPrice;

        }





