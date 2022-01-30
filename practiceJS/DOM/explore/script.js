// exploring DOM
let val;
val = this;
val = window;
val = window.document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.body;
val = document.domain;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[3];
val = document.links[2].href;

console.log(val);





// DOM selector (single element)
// getting an element
let value;
value = document.getElementById('doc-title');  

// changing style
value.style.color = 'orange'; 
value.style.background = 'gray';
value.style.textAlign = 'center';

// changing Content
value.innerHTML = '<i>Programming Languages</i>';


// getting an element
let element = document.querySelector('ol li:last-child');
element = document.querySelector('ul li:nth-child(2)');

// changing style
element.style.background = 'green';

console.log(element);





// Traversing the DOM
let token;
let item = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');

token = item;
token = listItem;

// Get Child Nodes
token = item;
token = item.childNodes;
token = item.childNodes[1].nodeName;
token = item.childNodes[1].nodeType;

/* nodeType 
1. Element
2. Attribute
3. Text Node
8. Comment
9. Document Itself
10. Doctype 
*/


token = item.children;
token = item.children[0];

token = item.firstChild;
token = item.firstElementChild;
token = item.lastChild;
token = item.lastElementChild;
token = item.childElementCount;

token = listItem.children;
token = listItem.parentElement;
token = listItem.parentNode;
token = listItem.parentElement.parentElement;

token = listItem.nextSibling;
token = listItem.nextElementSibling;


console.log(token);






// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add ID and Class
olItem.className = 'a new anoterClass';
olItem.id = 'b newItem';

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('Dart'));

document.querySelector('ol').appendChild(olItem);
console.log(olItem);



let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);
console.log(link);




// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('Top Programming Language in the world'));
newHeading.className = 'sample-class';

let oldHeading = document.querySelector('h3');
let parent = document.querySelector('.container');
parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);





// Remove Element
let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');

listItems[0].remove();

list.removeChild(listItems[7]);

list.classList.add('test');
list.classList.add('testNew');

list.classList.remove('sample');

let val = list.hasAttribute('class');
list.setAttribute('title', 'newTitle');
list.removeAttribute('title');
console.log(val);

console.log(list);
console.log(listItems);





// Events of JavaScript
let hello = () => {
    document.body.style.background = 'gray';
    document.body.style.color = 'white';
}

// Even Listener
let magicBtn = document.getElementById('magic');
magicBtn.addEventListener('click', massege);

function massege() {
    console.log('Button Clicked');
}