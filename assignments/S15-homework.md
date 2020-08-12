What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?

A CSS preprocessor is a program that allows you to generate CSS from the preprocessor's own unique syntax. CSS preprocessors add additonal capabilities to that of the default CSS. They enable to use logic in variables, nesting, inheritance, mixins, functions, and mathematical operations. There are many CSS preprocessors, and they have additional features that do not exist in pure CSS. Some example of css preprocessors are Sass, Less and Stylus.  

An example useage would be when a color is set as a variable, only one place where the variable was declared needs to updated instead of going through the whole CSS document to update the color.

To use a CSS preprocessor, you must install a CSS compiler on your web server or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.

In React, styled components, are components that only send required css of the component that is beining rendered. Since the component contains a mixture of both Javascript and CSS, the behavioral and styling aspects of a web page, it is considered to violate the sepration of concerns.  