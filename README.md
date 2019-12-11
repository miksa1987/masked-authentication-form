This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## masked-authentication-form
This is a React component for an authentication code form, which supports regular expressions for certain
input characters only. It was inspired by this post on Medium by Indrek Lasn (Number 3): 
https://medium.com/better-programming/here-are-5-front-end-challenges-to-code-dec-2019-edition-

This is an early version still, it will get better!

## Usage 
If you wish to use this component, clone the repository and copy the directory "component" to your source directory.
Import the component as follows: "import MaskedAuthenticationForm from '/path/to/component/MaskedAuthenticationForm'"

Props:
regex: The desired regular expression for input as string. Example: [a-z]. The regular expression is case insensitive.
rounded: Toggle rounded corners for the component.

## Run the demo
Clone the repository, change to its directory and run "npm install". Then run "npm start" to view the component in development server at http://localhost:3000.

## License
This component is released under Creative Commons 4.0 license.

## TODO
- Tests
- Ability to change the number of inputs
- Make it real pretty