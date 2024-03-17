export function setupRefresh(element, refreshElement) {
    let counter = 0;
  
    const setCounter = (count) => {
      counter = count;
      element.innerHTML = `counter is (${counter})`;
    };
  
    const resetCounter = () => {
      setCounter(0);
    };
  
    element.addEventListener('click', () => setCounter(counter + 1));
    refreshElement.addEventListener('click', resetCounter);
  
    setCounter(0); // Inicializar el contador cuando se carga la página
  }
  