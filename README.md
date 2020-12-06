# Millburn Robotics Website

## https://millburn-robotics-2020.web.app/

Hi! Chances are, if you are reading this, you are wondering how the Millburn Robotics Website was made. In summary, it was made in the span of around a week. It is my first full-fledged React website, and was done using typescript.

# Frontend

The website is a single page application (SPA) built with React and Typescript, which essentially means you don't have to reload in order to visit different pages. This prevents the website from having to reload assets such as the navbar on page change, as that would be a waste of time. Instead, it only changes the necessary HTML.

## Create-React-App

Because I am relatively new to React, I chose this toolchain. A toolchain is something that assists your program in development, setting up much of the boilerplate so you can focus on only the parts you need. Create-React-App was great because I could get my site up and running quickly, but I later decided I wanted to edit how my site was bundled (how all of my documents get put in a tiny package for the web), so I had to eject my project with `npm eject`. This allowed me to edit the "internals" of the toolchain.

## Why Typescript?

Javascript is the language of the web, so why did I chose to write my website in Typescript? Though Javascript is an amazing language, it lacks in what I consider an important feature: type checking. Type checking is a feature that lets you, the coder, know if you are using the right type of variable in a situation. For example, type checking tells you that you need to put a circle into the circle shaped hole. Without type checking, you may put the square in the hole, and your website will likely crash.

Though my Typescript is no where near elegant, it greatly assisted me throughout the development process.

## All Libraries

Here is a list of all of the libraries used and a brief description of their purpose:

- **Material-Ui**: A styling library which was used as a foundation for the styling done in the website
- **Webpack, Eslint, Babel, and PostCSS**: Libraries that help turn the React Typescript code into optimized web code
- **Jest**: A testing framework installed by create-react-app, but never used
- **React-Multi-Carousel**: A library that provided a foundation for the Carousel used on the home page
- **React-Particles-Js**: A library that provided a foundation for the particles seen in the hero of the site.
- **React Reveal**: A library that provided animations and transitions as seen when the website is reloaded.
- **React-GA**: A library that interfaced with google analytics so I can view metrics about the user experience

_For more information, visit my package.json_

# Backend

Technically, this website is serverless. It is hosted on Firebase, and uses an API launched on Heroku.

## Firebase

As someone who is not too experienced in deploying a website, firebase was the biggest relief throughout the whole process. It was so straight forward and simple, it provided one less worry while deploying.

Firebase allows you to easily connect domains and host a website (and much more that I did not utilize). There was no money paid in the process of deploying and creating this website, so the best part about Firebase is that it is completely free to get started.

## Heroku

Heroku is an easy to use online tool that allows you to deploy programs. I was extremely proud of my Contact Us form on the website, so I decided it would be even better if it worked. One of my teammates, Zayn Rekhi, quickly whipped up a django api that worked with the contact us form. I did not code the api so I can not explain the developer experience. Instead, I asked Zayn how it was:

> Heroku isn't meant to host apps for free, and have them online non-stop. That made it tougher to have an app online for free, non-stop

\-- Zayn Rekhi

# Thank you!

Thank you for reading through my description. Make sure to check out the website, I worked real hard on it.
