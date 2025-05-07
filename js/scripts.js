const animals = [
    { id: 'jaguar', sound: 'sonidos/jaguar.mp3' },
    { id: 'condor', sound: 'sonidos/condor.mp3' },
    { id: 'delfin', sound: 'sonidos/delfin.mp3' },
    { id: 'rana', sound: 'sonidos/rana.mp3' }
  ];
  
  animals.forEach(animal => {
    const element = document.getElementById(animal.id);
    const audio = new Audio(animal.sound);
  
    audio.addEventListener('loadedmetadata', () => {
      // Establecer la duración máxima en 20 segundos
      const maxDuration = 20;
      if (audio.duration > maxDuration) {
        audio.currentTime = audio.duration - maxDuration;
      }
    });
  
    element.addEventListener('click', () => {
      // Reproducir sonido
      audio.play();
  
      // Animación con anime.js
      anime({
        targets: element,
        rotate: '+=360', // Rotar 360 grados desde la posición actual
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: false // Asegura que la animación se ejecute una sola vez
      });
    });
  });
  
  

  