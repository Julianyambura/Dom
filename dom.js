//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//document.all[10].textContent = "Hello";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID//
//console.log(document.forms[0].id('header.title'));
var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

//GetELEMENTBYCLASSNAME//
var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items.style.backgroundColor = '#f4f4f4';doesn't work
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//GETELEMENTBYTAGNAME//
var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li.style.backgroundColor = '#f4f4f4';doesn't work
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSSELECTOR//
var header = document.querySelector("#main-header");
// console.log(header);
header.style.borderBottom = "solid 4px #ccc";
var input = document.querySelector("input");
input.value = "Hello World";
var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";
var item = document.querySelector(".list-group-item");
item.style.color = "red";
var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "red";
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "red";

//QUERTYSELECTROALL//
var titles = document.querySelectorAll(".title");
// console.log(titles);
titles[0].textContent = "Hello";

var odd = document.quertySelectorAll("li:nth-child(odd)");
var even = document.quertySelectorAll("li:nth-child(even)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "red";
}

titles[1].textContent = "Goodbye";
for (var i = 0; i < titles.length; i++) {
  titles[i].style.color = "red";
}

//TRANVERSING THE DOM
// var itemlist = document.querySelector('#item');
// console.log(itemlist.parentNode);
DataTransferItemList.parentNode.style.backgroundColor = "grey";

// console.log(itemlist.parentNode.parentNode);

//parentElement
// console.log(itemlist.parentElement);
// console.log(itemlist.parentElement.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);

// childNode
// console.log(itemlist.childNodes);
// console.log(itemlist.childNodes[0].nodeName);
console.log(item.List.children);

// console.log(itemlist.childNodes[1].nodeName);

//firstChild
// console.log(itemlist.firstChild);

//firstElementchild
// console.log(itemlist.firstElementChild);

//lastElementchild
// console.log(itemlist.lastElementChild);

//nextSibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextSibling.nextSibling);

//nextElementsibling
// console.log(itemlist.nextElementSibling);
