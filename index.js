var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenavbar = document.getElementById("close-navbar")

menuicon.addEventListener("click",function()
{
sidenav.style.right=0
})

closenavbar.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})