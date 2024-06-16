# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Vanilla JavaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```.error-image{
    background-image: url(images/icon-error.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 95%;
}
```
```js
const checkForm = function(){
    inputs.forEach(input => {
        if (!(input.value)){
            document.querySelector(`.${input.name}_pop_up`).classList.remove('hidden');
            document.querySelector(`#${input.id}`).classList.add('error');
            document.querySelector(`#${input.id}`).classList.add('pop_up');
            document.querySelector(`#${input.id}`).classList.add('error-image');
            document.querySelector(`#${input.id}`).value = ' '
            if(input.id == 'email'){
                document.querySelector('#email').value = emailErr
            }
        }})
};   
```

## Author

- Frontend Mentor - [@faridah-11](https://www.frontendmentor.io/profile/faridah-11)
- Twitter - [@fari_is_shy](https://www.twitter.com/fari_is_shy)
