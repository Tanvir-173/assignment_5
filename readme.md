1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

Id -> single element

ClassName -> multiple elements (HTMLCollection)

querySelector -> first match (CSS selector)

querySelectorAll -> all matches (NodeList)

2. How do you create and insert a new element into the DOM?

Answer:
Create the element -> document.createElement()

Insert it into the DOM -> appendChild()

3. What is Event Bubbling and how does it work?

Answer:

Event Bubbling:

Event bubbling is the process in the DOM where an event starts from the innermost (child) element and then propagates upward through its parent elements until it reaches the root (document).

How it works:

You click (or trigger an event) on a child element.

The event handler on that element runs first.

Then the same event “bubbles up” to its parent, then grandparent, and so on.


4. What is Event Delegation in JavaScript? Why is it useful?

answer:

Event Delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single listener to their parent.
The event then bubbles up from the child to the parent, and we handle it there.

5. What is the difference between preventDefault() and stopPropagation() methods?

answer:


preventDefault() -> blocks the default action of the element.

stopPropagation() -> blocks the event flow to parent/ancestor elements.

