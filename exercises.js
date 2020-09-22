function countSheep(sheep) {
  for (let i = sheep; i >= 0; i--) {
    if (i === 0) {
      console.log('All sheep jumped over the fence');
    }
    else {
      console.log(`${i}: Another sheep jumps over the fence`);
    }
  }
}
countSheep(5);