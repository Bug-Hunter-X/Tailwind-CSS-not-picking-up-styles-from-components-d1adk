# Tailwind CSS - Styles Not Picking Up

This repository demonstrates a common issue encountered when using Tailwind CSS: styles not being picked up from components, despite seemingly correct configuration.  The problem often stems from incorrectly specifying the `content` array in the Tailwind configuration file ( `tailwind.config.js` ). 

The `bug.js` file contains the incorrect configuration, and `bugSolution.js` provides the corrected version.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server (instructions may vary based on your project setup).
4. Observe that styles are not applied correctly in `index.html`. 
5. Replace `tailwind.config.js` with `bugSolution.js`. 
6. Run the development server again and observe that styles are now correctly applied.

## Solution

The core issue lies in the `content` array within `tailwind.config.js`.  Ensure that the paths you're specifying correctly match the locations of your components and templates.  The most common mistakes involve typos, missing file extensions, or incorrect glob patterns.