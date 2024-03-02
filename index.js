// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import shape classes
const { Circle, Triangle, Square } = require('./lib/shapes');

// Setup inquirer to prompt user input
async function createLogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      // Validate that input is up to three alphabetic characters
      validate: input => input.length <= 3 && input.length > 0 ? true : 'Text must be up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (e.g., "red" or "#FF0000"):',
    },
    {
      type: 'list', 
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (e.g., "blue" or "#0000FF"):',
    }
  ]);

  // Determine text size based on length of text
  const textSize = Math.max(12, 120 / answers.text.length);

  // Determine shape based on user input and instantiate with color
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  // Generate SVG markup with chosen shape and text
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${textSize}px">${answers.text}</text>
</svg>`;

  // Save SVG to logo.svg file
  fs.writeFileSync('logo.svg', svg);

  // message user logo was generated
  console.log('Generated logo.svg');
}

// Call createLogo function to start logo creation
createLogo();