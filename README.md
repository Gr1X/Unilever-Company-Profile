# React Company Profile Website (Unilever Dummy)

This project is a functional, multi-page dummy company profile website built for Unilever. It was created as a submission for an Assistant Lab Lecturer (Aslab) test for the "Introduction to Internet Technology" course.

The application is built entirely on the front-end using React, React Router for navigation, and Tailwind CSS for styling. It demonstrates proficiency in component-based architecture, API integration, and modern UI/UX practices (like scroll animations).

## ✨ Key Features

* **5-Page SPA Navigation:** Uses React Router to create a seamless single-page application experience across five distinct pages: Home, About Us, Products, News, and Contact.
* **Dynamic Content (API Integration):**
    * **Products Page:** Fetches 25 product listings from the `dummyjson.com` API and displays them in a responsive grid.
    * **News Page:** Fetches the 10 latest articles related to "Unilever" from the `newsapi.org` API.
    * **Home Page:** Fetches 3 articles from `newsapi.org` to display in the "Latest News" section.
* **Reusable Component Architecture:**
    * `Navbar`: A dynamic, fixed navbar that changes from transparent to a solid blue background (and swaps logos) on scroll.
    * `Footer`: A consistent footer component with navigation links, contact info, and social media icons.
    * `Banner`: A reusable banner component used across all sub-pages (`About`, `News`, `Products`, `Contact`) to display titles and subtitles with a background image.
* **Modern UI/UX:**
    * **Scroll Animations:** Implements the `AOS` (Animate On Scroll) library to add engaging "fade-up" and "zoom-in" animations as the user scrolls.
    * **Responsive Design:** Fully responsive layout using Tailwind CSS utility classes.
* **Static Pages:** Includes comprehensive, hardcoded pages for "About Us" (Mission, History, Values) and "Contact Us" (Address, Email, Map Embed).

## 🛠️ Tech Stack

* **Core:** React.js
* **Routing:** React Router (`react-router-dom`)
* **Styling:** Tailwind CSS
* **Animations:** AOS (Animate on Scroll)
* **APIs:**
    * NewsAPI (for fetching articles)
    * DummyJSON (for fetching products)

## ⚠️ API Key Note

The `news.jsx` and `home.jsx` components use a hardcoded API key for NewsAPI. For a real-world production environment, this key should be stored securely in a `.env` file and accessed via environment variables.
