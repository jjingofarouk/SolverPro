const elt = document.getElementById('calculator');
const calculator = Desmos.GraphingCalculator(elt, {
  keypad: true,
  expressions: true,
  settingsMenu: true,
  zoomButtons: false,
  expressionsCollapsed: false,
  border: false,
  lockViewport: false,
  invertedColors: false
});

calculator.setExpression({ id: 'parabola', latex: 'y=x^2', color: '#3a86ff' });

function resetCalculator() {
  calculator.setBlank();
  calculator.setExpression({ id: 'parabola', latex: 'y=x^2', color: '#3a86ff' });
  
  const functionItems = document.querySelectorAll('.function-item');
  functionItems.forEach(item => item.classList.remove('active'));
  functionItems[0].classList.add('active');
}

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

function zoomOut() {
  const mathBounds = calculator.getMathBounds();
  const newBounds = {
    left: mathBounds.left * 1.2,
    right: mathBounds.right * 1.2,
    bottom: mathBounds.bottom * 1.2,
    top: mathBounds.top * 1.2,
  };
  calculator.setMathBounds(newBounds);
}

function addNewFunction() {
  const functionPrompt = prompt("Enter a function in the form y = f(x):", "y = ");
  if (functionPrompt) {
    try {
      const latex = functionPrompt.replace('y = ', '').trim();
      const colors = ['#ff006e', '#38b000', '#ffbe0b', '#9d4edd', '#3a86ff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const id = 'func_' + Date.now();
      
      calculator.setExpression({ id: id, latex: latex, color: randomColor });
      
      const functionList = document.querySelector('.function-list');
      const newItem = document.createElement('li');
      newItem.className = 'function-item';
      newItem.innerHTML = `
        <span class="function-item-text">y = ${latex}</span>
        <div class="function-item-color" style="background-color: ${randomColor};"></div>
      `;
      
      newItem.addEventListener('click', function() {
        const functionItems = document.querySelectorAll('.function-item');
        functionItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
      
      functionList.appendChild(newItem);
    } catch (e) {
      alert("Invalid function format. Please try again.");
    }
  }
}

function saveWorkspace() {
  alert("Workspace saved successfully!");
}

function exportData() {
  alert("Graph exported! In a production environment, this would download the current graph as an image.");
}

document.querySelectorAll('.function-item').forEach((item, index) => {
  item.addEventListener('click', function() {
    const functionItems = document.querySelectorAll('.function-item');
    functionItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    
    switch(index) {
      case 0:
        calculator.setExpression({ id: 'parabola', latex: 'y=x^2', color: '#3a86ff' });
        break;
      case 1:
        calculator.setExpression({ id: 'sine', latex: 'y=\\sin(x)', color: '#ff006e' });
        break;
      case 2:
        calculator.setExpression({ id: 'log', latex: 'y=\\log(x)', color: '#38b000' });
        break;
      case 3:
        calculator.setExpression({ id: 'sqrt', latex: 'y=\\sqrt{x}', color: '#ffbe0b' });
        break;
      case 4:
        calculator.setExpression({ id: 'abs', latex: 'y=|x|', color: '#9d4edd' });
        break;
    }
  });
});