function getRandom(arr) {
    const random =  Math.floor(Math.random() * arr.length);
    return arr[random]
  }
  
  export { getRandom };