data1=document.getElementById("head");
data2=document.getElementById("ca");
data3=document.getElementById("price");
data4=document.getElementById("cart");

function addto()
{
    data4.textContent="Added to cart";
    data4.style="background-color:white;color:black";
}
function red()
{
    data2.style="background-color:red";
    data3.style="background-color:red";
    data4.style="background-color:red;color:white";
    data1.src='rcar.jpg';
}

function black()
{
    data2.style="background-color:black";
    data3.style="background-color:black";
    data4.style="background-color:black;color:white";
    data1.src='bcar.jpg';
}
function grey()
{
    data2.style="background-color:grey";
    data3.style="background-color:grey";
    data4.style="background-color:grey;color:white";
    data1.src='acar.jpg';
}