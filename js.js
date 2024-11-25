// Función para manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validación simple
    if (name && email && message) {
      alert('Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  
    // Limpiar el formulario
    document.getElementById('contactForm').reset();
  });
  