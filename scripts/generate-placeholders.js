const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder image
function createPlaceholderSVG(width, height, text, bgColor = '#f0f8ff', textColor = '#0089FF') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '../assets/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
const placeholders = [
  { name: 'mmt-logo.png', width: 120, height: 30, text: 'MMT Logo' },
  { name: 'referral-icon.png', width: 60, height: 60, text: 'Referral' },
  { name: 'offer1.jpg', width: 300, height: 150, text: 'Bank Card Deals' },

  { name: 'emirates.jpg', width: 300, height: 150, text: 'Emirates' },
  { name: 'emirates-logo.png', width: 50, height: 50, text: 'E' },
  { name: 'tamara.jpg', width: 150, height: 120, text: 'Tamara Hotels' },

  { name: 'tamara-logo.png', width: 40, height: 40, text: 'T' },
  
  { name: 'pnr-icon.png', width: 40, height: 40, text: 'PNR' },
  { name: 'flight-status-icon.png', width: 40, height: 40, text: 'FS' },
  { name: 'partner1.jpg', width: 200, height: 120, text: 'Partner 1' },
 // { name: 'partner2.jpg', width: 200, height: 120, text: 'Partner 2' },
  { name: 'place.jpg', width: 300, height: 200, text: 'Place' },
  {
    name: 'adventure.jpg',
    width: 300,
    height: 300,
    text: 'Adventure',
    bgColor: '#4CAF50',
    textColor: '#fff'
  },
  {
    name: 'google-logo.png',
    width: 100,
    height: 100,
    text: 'G',
    bgColor: '#fff',
    textColor: '#4285F4'
  },
];

placeholders.forEach(({ name, width, height, text }) => {
  const svg = createPlaceholderSVG(width, height, text);
  const filePath = path.join(imagesDir, name);
  
  // For PNG files, we'll just create an empty file for now
  // In a real app, you would use a library like sharp to convert SVG to PNG
  fs.writeFileSync(filePath, '');
  console.log(`Created placeholder for ${name}`);
});

console.log('Placeholder generation complete!'); 