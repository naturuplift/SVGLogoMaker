# SVG Logo Maker

<br/>
<p align="center">
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=bootcamp&message=UNB&color=red" /></a>
        <a href="" >
        <img alt="JavaScript - " src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="" >
        <img alt="JavaScript - " src="https://img.shields.io/static/v1.svg?label=Node.js&message=Server&color=green" /></a>
    <a href="" >
        <img alt="JavaScript - " src="https://img.shields.io/static/v1.svg?label=npm&message=packages&color=blue" /></a>
</p>
<br/>

Create custom SVG logos with this Node.js command-line application!

## Description

The SVG Logo Maker is a command-line application built with Node.js that allows you to generate custom SVG logos. You can choose the logo's color, shape, and add text to create unique designs. The generated SVG logo can be saved to a `.svg` file for use in various projects.

## Features

- Choose from a variety of shapes and colors for your logo.
- Add text to your logo with customizable fonts and styles.
- Save the generated SVG logo to a `.svg` file.
- Simple and user-friendly command-line interface (CLI).

## Table of Contents

- [Demo Video](#demo-video)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Demo Video
[Open Demo video of README Generator][readme-generator]

## Installation

To use the SVG Logo Maker, follow these steps:

### 1. Clone this repository to your local machine:
```bash
   git clone <repository-url>
```

### 2. Navigate to the project directory:
```bash
cd SVGLogoMaker
```

### 3. Install the required dependencies:
```bash
   npm install
```

## Usage

To run the SVG Logo Maker, execute the following command in your terminal:

```bash
   node svg-logo-maker.js
```

## Options

The SVG Logo Maker provides the following options:

-   Select Shape: Choose from various shapes for your logo, such as circles, squares, or custom shapes.
-   Select Color: Pick a color for your logo from a color palette.
-   Add Text: Enter text to be displayed on the logo, customize fonts, styles, and positioning.
-   Save SVG: Save the generated SVG logo to a file with a specified filename.

## Examples

Here are some examples of how to use the SVG Logo Maker:

### 1. Create a red circular logo with text:
```bash
   node svg-logo-maker.js
```

### 2. Generate a blue square logo with custom text and save it as "my-logo.svg":
```bash
   node svg-logo-maker.js --shape square --color blue --text "My Logo" --save my-logo.svg
```

## State Flow Diagram
For a visual representation of the sequence of actions involved in the svg logo maker, refer to the [State Flow Diagram][state-flow] provided in the project documentation.

Feel free to reach out, contribute, or provide feedback to make the Password Generator Project even more robust and user-friendly!

## Contributing

Contributions to this project are welcome. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

Happy logo designing with SVG Logo Maker!

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[readme-generator]: <https://drive.google.com/file/d/1GqRstOkyOaPCBN82AsbmAx-IpdhGYCKm/view>
[state-flow]: <https://github.com/naturuplift/svg-logo-maker/blob/main/develop/assets/img/Readme%20Generator%20State%20Diagram%20v1.png>
[MIT]: <https://github.com/naturuplift/svg-logo-maker/blob/main/LICENSE>
