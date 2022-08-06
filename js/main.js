var elModalOpenButton = document.querySelector(".btn-menu");
var elModalOpenlink = document.querySelector(".mabile-header");
var elList = document.getElementById("list1");
var elList1 = document.getElementById("list2");
var elList2 = document.getElementById("list3");
var input = document.querySelector("input");

elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("nav--active");
});

////////////////////////////////////////
function addlist() {
  if (input == input) {
    elList.classList.add("add--active")
    elList1.classList.add("add--active")
    elList2.classList.add("add--active")
  }
  else {
    elList.classList.remove("add--active")
    elList1.classList.remove("add--active")
    elList2.classList.remove("add--active")
  }
}

console.log(addlist);