#focusable

##Overview

"focusable" is a small javascript function, implementing "focusable" behavior that can be attached to any DOM-element.

##API

"focusable" behavior is attached to a DOM element via "focusable" class:

```html
  <div id="div1" class="focusable"></div>
  <div id="div2" class="focusable"></div>
  ...

  <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
  <script type="text/javascript" src="focusable.js"></script>
```
Effect: whenever "focusable" element is clicked (or its descendant DOM-element is clicked), it gets "focused" class. 
If some other DOM-element had "focused" class before, it will lose it, so at any time there is only one DOM-element
having "focused" class.

"focusable" elements trigger two new event types: "gotFocus.focusable" and "lostFocus.focusable". Handlers can be 
attached like this:

```javascript
$(".testDiv").on("gotFocus.focusable", function(event) {
  console.log("got focus:", event.target);
});
```
##Copyright and License

Copyright 2013 (c) Andrey Hihlovskiy

All versions, present and past, of "focusable" script are licensed under MIT license:

* [MIT](http://opensource.org/licenses/MIT)
