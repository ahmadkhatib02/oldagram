# Oldagram

Oldagram is a web application that mimics Instagram with a twist: famous historical figures such as Vincent van Gogh, Gustave Courbet, and Joseph Ducreux are the one who post. Users can view their posts, profiles, and interact by "liking" the posts.

## Project Structure

This project contains the following files:

- **index.html**: The main HTML structure of the page, including links to external resources like stylesheets and scripts.
- **styles.css**: The stylesheet that defines the layout and styles of the application.
- **index.js**: The JavaScript file that dynamically generates posts and handles interactions like "liking" a post.

## Features

- Dynamically generated posts from an array of famous historical figures.
- "Like" buttons that update the like count when clicked.
- Responsive design to ensure good display on various screen sizes.

## Getting Started

To run this project on your local machine:

1. Clone the repository or download the project files.
2. Open `index.html` in any modern browser.

### Prerequisites

You need a modern web browser that supports HTML5, CSS3, and JavaScript (e.g., Chrome, Firefox, Edge).

## Usage

- Open the `index.html` file in your browser to view the feed.
- Click on the "like" button under any post to increase the like count.
  
## File Overview

### index.html

This file sets up the basic structure of the webpage, including the following components:
- A header with the Oldagram logo and user profile picture.
- A main section where the posts will be dynamically inserted by JavaScript.

### styles.css

The CSS file controls the layout and appearance of the page. Some key styles include:
- Responsive centering of the main content.
- Styling for user avatars, post images, and buttons.
- Hover and focus effects for interactive elements like the buttons.

### index.js

The JavaScript file handles the dynamic generation of the posts and user interactions. Notable functionality includes:
- A `generate` function that loops through the `posts` array and inserts post content into the HTML.
- Event listeners for the "like" buttons that update the number of likes when clicked.

## Website

You can check out the website [here](https://oldagram01.netlify.app/).

## Future Improvements

- Add a comment section where users can add their own comments.
- Implement local storage to save the number of likes even after refreshing the page.

## License

This project is open-source and available under the MIT License.
"# oldagram" 
