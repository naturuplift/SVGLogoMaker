// import shape classes
const { Circle, Triangle, Square } = require('./shapes');

// Testing Circle class
describe('Circle', () => {
    // Test to verify if Circle class correctly renders its SVG markup
  test('renders correct SVG markup', () => {
    const circle = new Circle('blue');
    // Expect rendered SVG to match expected output
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
  });
});

// Testing Triangle class
describe('Triangle', () => {
    // Test to verify if Triangle class correctly renders its SVG markup
    test('renders correct SVG markup', () => {
      const triangle = new Triangle('red');
      // Expect rendered SVG to match expected output
      expect(triangle.render()).toEqual(`<polygon points="150,25 75,150 225,150" fill="red" />`);
    });
});

// Testing Square class
describe('Square', () => {
    // Test to verify if Square class correctly renders its SVG markup
    test('renders correct SVG markup', () => {
      const square = new Square('green');
      // Expect rendered SVG to match expected output
      expect(square.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="green" />`);
    });
});