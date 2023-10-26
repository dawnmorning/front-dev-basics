try {
  if (true) {
    const num = 10;
  }
  console.log(num);
} catch (error) {
  console.log("error: " + error);
}

try {
  const num = 10;
  num = 20;
} catch (error) {
  console.log("error: " + error);
}
