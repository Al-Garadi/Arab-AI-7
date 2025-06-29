// Replaced all icon imports with the new icon path
// Option 1: If you're NOT using Next.js, replace with standard <img>
import React from 'react'; // Make sure React is imported
import appIcon from '../assets/logo.png'; // Adjust this path based on your actual structure

const Icon = () => (
  <img src={appIcon} alt="App Icon" width={64} height={64} />
);

export default Icon;
