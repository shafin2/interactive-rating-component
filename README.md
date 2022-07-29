# interactive-rating-component
# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

(Screenshots\Screenshot.png)
(Screenshots\Screenshot 1.png)
(Screenshots\Screenshot 2.png)

### Links

- Solution URL: https://github.com/shafin2/interactive-rating-component
- Live Site URL: https://shafin2.github.io/interactive-rating-component

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

First of all I learn about flexbox, with flexbox it is very easy to vertically center the div.Then I learn how to make response on same page.I do that with display:none property and display it flex through javascript.In js i learn how to take value from input.I also learn how to make variables in css

To see how you can add code snippets, see below:

```css
:root{
    /* Screen widths */
    --big-screens: 1440px;
    --small-screens: 375px;

    /* Colors */
    /* Primary */
    --orange:hsl(25, 97%, 53%);
    /* Neutral */
    --color-0:hsl(0, 0%, 100%);
    --color-1:hsl(217, 12%, 63%);
    --color-2:hsl(216, 20%, 36%);
    --color-3:hsl(213, 19%, 18%);
    --color-4:hsl(216, 12%, 8%); 

    /* Fonts */
    /* family */
    --ff-primary:'Edu VIC WA NT Beginner', cursive;
    /* size */  
    --fs-heading: ;
    --fs-paragraph: 15px;
    /* weights */
    --fw-light: 400;
    --fw-bold: 700;

}
```
```js
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        btnval=parseInt(btns[i].innerHTML)
        console.log(btnval)
    })
}
```


### Continued development

I will focus on responsiveness of website,see other properties of css and learn more about JS


### Useful resources

- https://goalkicker.com/CSSBook/CSSNotesForProfessionals.pdf - These notes arebery useful

## Author

- Frontend Mentor - [@shafin2](https://www.frontendmentor.io/profile/shafin2)


