"use strict";

console.log("test");

// ========== Retrieve elements by id, class, tag name

// // id
//     var header = document.getElementById('main-title');
//     console.log(header);

// // class - will return an HTMLCollection
//     var cards = document.getElementsByClassName('card');
//     console.log(cards);
//     console.log(cards[0]);
//     cards.pop(); // ERROR: Array specific method
//     var cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
//     cardsArr.pop();
//     console.log(cardsArr);


//
// // tag
//     var sections = document.getElementsByTagName('section');
//     console.log(sections);
//
//
// // ========== Query Selector and Query Selector All
//
// // querySelector()
//
//     var headerTitle = document.querySelector('header h1');
//     var headerTitle = document.querySelector('#main-title');
//     console.log(headerTitle);
//
//     var li = document.querySelector('li'); // only returns first matching
//     console.log(li);
//
//     var secondLi = document.querySelector('li:nth-child(2)');
//     console.log(secondLi);
//
//
//
// // ========== Direct access to form inputs
//
//     var forms = document.forms;
//     console.log(forms['feedback-form'].feedback.value);
//
//
// // ========== Accessing and modifying elements and properties
//
// // get value of innerHTML
//     var title = document.getElementById("main-title");
//     console.log(title);
//
//     console.log(title.innerHTML);
//     console.log(title.innerText);
//
// // set value of innerHTML
//     title.innerHTML = "<em>Hi MOM!</em>";
//
// // set value of innerText
//     title.innerText = "<em>Hi MOM!</em>";
//
// // append value to innerText (works the same with innerHTML)
//     title.innerHTML += " ...and hi Mom!";
//
//
// // ========== Accessing and modifying attributes
//
// // check if attribute exists
//     var cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));
//
// // get an attribute value
//     console.log(cowboy.getAttribute('data-1'));
//
// // create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));
//
// // remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);
//
//
// // ========== Accessing and modifying styles
//
// // single style
//     var jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";
//
// // apply multiple style changes
//     Object.assign(jumbotron.style, {
//         border: "10px solid black","font-family": "times", "text-decoration": "underline"
//     });
//
// // styling node list
//     var tableRows = document.getElementsByTagName("tr");
//     for (var i = 0; i < tableRows.length; i += 1) {
//         tableRows[i].style.background = "red";
//     }
//
//
// // ========== Add / Remove Elements
//
// see curriculum links