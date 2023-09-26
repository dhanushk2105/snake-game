function getRandomCoordinates(n) {
    const randomX = Math.random() * n;
    const randomY = Math.random() * n;
  
    return { x: randomX, y: randomY };
  }

  export default getRandomCoordinates;
  