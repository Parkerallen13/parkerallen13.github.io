console.log(document.getElementById("Header1"));

document.getElementById("Header1").addEventListener("click", function(e)
{
    alert("Congrats! You clicked Header 1");
    document.getElementById("image").src = "/img/DSC_0505.jpeg";

})

document.getElementById("Header2").addEventListener("click", function(e)
{
    document.getElementById("Header2").style.color = "green";
    document.getElementById("image").src = "/img/DSC_0505.jpeg";

}, 2000)

document.getElementById("image").addEventListener("mouseover", function(e)
{
    document.getElementById("image").src = "/img/DSC_0505.jpeg";

})