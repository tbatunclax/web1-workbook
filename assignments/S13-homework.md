## What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)

Tags are main buidling blocks for an HTML document. Most tags have have an opening and closing tags. 

A "Class" is an attribute in a html tag, which can contain one or more class elements. Multiple html tags can share the same class element or value. The difference between an ID and a Class is that an ID is unique and each page can have only one element with the same ID. A class attribute can contain one or more class values and the class value can be used multiple times in a page. 

In a class selector the class name is preceded by a period "." and in an ID selector, the name is preceded by a hash character "#". Both CSS and Javascript can access and manipulate the HTML tags using the specific ID or class name selectors.  

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element. It is the score/rank that determines which style declarations are applied to an element. If there are two or more conflicting CSS rules that point to the same element, for example by the ID and class, the specificity of an ID ranks higher than a class, and therefore, the ID's rules will ultimately be applied.