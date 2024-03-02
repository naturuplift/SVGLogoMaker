// Shape classes

// Circle implementation
class Circle {
    constructor(color) {
      this.color = color;
    }
  
    // Method to generate SVG markup for circle
    render() {
      return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
    }
}

// Triangle implementation
class Triangle {
    constructor(color) {
      this.color = color;
    }

    // Method to generate SVG markup for triangle
    render() {
      return `<polygon points="150,25 75,150 225,150" fill="${this.color}" />`;
    }
}

// Square implementation
class Square {
    constructor(color) {
      this.color = color;
    }

    // Method to generate SVG markup for square
    render() {
      return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

// Exporting Circle, Triangle, and Square classes
// User exported making it available for use in the app
module.exports = { Circle, Triangle, Square };