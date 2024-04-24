# I am testing 2 major UI libraries for Tailwind, so I plan to build 2 sites with them.
@flowbite_ui

@daisyui_


# It should be fun to build with them, 

I'm not building any major sites, but landing pages with them to see how the learning curve works and how they perform

## daisyui

# Install daisyUI:
npm i -D daisyui@latest

# Then add daisyUI to your tailwind.config.js files:
module.exports = {
  //...
  plugins: [require("daisyui")],
}
## to use aos in react

we need to follow this major steps

## install the package

npm install --save aos@next

## to initialize AOS

import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


