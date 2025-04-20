# SolverPro Graphing Calculator

**SolverPro** is a fully functional graphing calculator built using the **Desmos API**. It allows users to plot mathematical expressions, interact with graphs, and perform various operations such as zooming and resetting the graph. This project is designed to be simple, user-friendly, and easily customizable.

---

## Features

- **Interactive Graphing**: Plot mathematical expressions and visualize them on a coordinate plane.
- **Default Expression**: A default parabola (`y = x^2`) is plotted when the calculator loads.
- **Reset Functionality**: Clear the calculator and reset it to the default state with a single click.
- **Zoom In/Out**: Adjust the viewport to zoom in or out of the graph.
- **Responsive Design**: The calculator is designed to work seamlessly on different screen sizes.
- **Customizable**: Easily add more expressions, change colors, or extend functionality.

---

## How to Use

### 1. **Plotting Expressions**
- Enter mathematical expressions in LaTeX format using the `calculator.setExpression` method.
- Example:
  ```javascript
  calculator.setExpression({ id: 'line', latex: 'y = 2x + 3', color: Desmos.Colors.RED });
  ```

### 2. **Resetting the Calculator**
- Click the **Reset** button to clear all expressions and reset the calculator to its default state.

### 3. **Zooming**
- Use the **Zoom In** and **Zoom Out** buttons to adjust the viewport of the graph.

### 4. **Customizing the Calculator**
- Add more buttons or controls to extend functionality.
- Modify the `options` object in the `Desmos.GraphingCalculator` initialization to enable or disable features like the keypad, expressions list, or settings menu.

---

## Installation

### 1. **Clone the Repository**
   ```bash
   git clone https://github.com/jjingofarouk/SolverPro.git
   cd SolverPro
   ```

### 2. **Open in a Browser**
   - Open the `index.html` file in your preferred browser.

### 3. **Run on a Live Server**
   - Use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code to run the project locally.

---

## Code Structure

### **HTML**
- The `index.html` file contains the structure of the webpage, including the calculator container and control buttons.

### **CSS**
- The `style` tag in the HTML file defines the styling for the calculator and controls, ensuring a clean and responsive design.

### **JavaScript**
- The `script` tag includes the logic for initializing the Desmos calculator, adding default expressions, and handling user interactions (e.g., reset, zoom).

---

## Customization

### **Adding More Expressions**
- Use the `calculator.setExpression` method to add more graphs or equations.
  ```javascript
  calculator.setExpression({ id: 'circle', latex: 'x^2 + y^2 = 25', color: Desmos.Colors.GREEN });
  ```

### **Changing Colors**
- Use the `color` property to customize the color of graphs.
  ```javascript
  calculator.setExpression({ id: 'line', latex: 'y = -x + 5', color: '#FFA500' });
  ```

### **Extending Functionality**
- Add more buttons or controls to handle additional features, such as saving/loading graphs or changing graph settings.

---

## Example Usage

### **Plotting Multiple Expressions**
```javascript
calculator.setExpression({ id: 'parabola', latex: 'y = x^2', color: Desmos.Colors.BLUE });
calculator.setExpression({ id: 'line', latex: 'y = 2x + 3', color: Desmos.Colors.RED });
calculator.setExpression({ id: 'circle', latex: 'x^2 + y^2 = 25', color: Desmos.Colors.GREEN });
```

### **Zooming Programmatically**
```javascript
function zoomIn() {
  const mathBounds = calculator.getMathBounds();
  const newBounds = {
    left: mathBounds.left * 0.8,
    right: mathBounds.right * 0.8,
    bottom: mathBounds.bottom * 0.8,
    top: mathBounds.top * 0.8,
  };
  calculator.setMathBounds(newBounds);
}
```

---

## Dependencies

- **Desmos API**: The calculator is powered by the Desmos API, which is included via a script tag.
  ```html
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
  ```

---

## Contributing

Contributions are welcome! If you'd like to improve SolverPro, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Desmos** for providing an excellent graphing API.
- **Open Source Community** for inspiration and support.

---

## Contact

For questions or feedback, feel free to reach out:

- **Email**: jjingofarouq@gmail.com
- **GitHub**: https://github.com/jjingofarouk

---

Enjoy using **SolverPro**! 🚀
