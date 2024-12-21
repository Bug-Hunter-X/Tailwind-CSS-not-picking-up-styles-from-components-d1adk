```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'], // <-- Include html files and fix potential glob error
  theme: {
    extend: {
      // ... your custom theme configurations ...
    },
  },
  plugins: [],
};
```