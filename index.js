// Load required modules
const readline = require('readline');
const fs = require('fs');

// Setup readline to read input from console and output responses
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to prompt user
function getUserInput(prompt) {
  // return promise
  return new Promise((resolve) => {
    //display prompt and wait answer
    rl.question(prompt, (answer) => {
      // once answer ready return promise
      resolve(answer);
    });
  });
} 

// function to create logo
async function createLogo() {
  const text = await getUserInput('Enter up to three characters for the text: ');
  const textColor = await getUserInput('Enter text color (e.g., "red" or "#FF0000"): ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shapeInput = await getUserInput(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shape = shapeOptions.includes(shapeInput) ? shapeInput : 'circle'; // Default to circle if input is invalid
  const shapeColor = await getUserInput('Enter shape color (e.g., "blue" or "#0000FF"): ');

  // Determine text size based on length of text
  const textSize = Math.max(12, 120 / text.length);

  // Generate SVG markup based on selected shape
  let svg = '';
  switch (shape) {
    case 'circle':
      // If circle, create a circle shape in SVG
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
               <circle cx="150" cy="100" r="75" fill="${shapeColor}" />
               <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${textSize}px">${text}</text>
             </svg>`;
      break;
    case 'triangle':
      // If triangle, create a triangle shape in SVG
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
               <polygon points="150,25 75,150 225,150" fill="${shapeColor}" />
               <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${textSize}px">${text}</text>
             </svg>`;
      break;
    case 'square':
      // If square, create a square shape in SVG
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
               <rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />
               <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${textSize}px">${text}</text>
             </svg>`;
      break;
    default:
      break;
  }

  // Save SVG to logo.svg file
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
  rl.close();
}

// Call createLogo function to start logo creation
createLogo();