const revenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  outros: 19849.53,
}

const percentageByState = (object) => {
  let total = 0;
  const objWithPercentByState = {} 
  for (const state in object) {
    total += object[state];
  }
  for (const state in object) {
    const findPercentage = ((object[state] / total) * 100).toFixed(2);
    objWithPercentByState[state] = Number(findPercentage);
  }
  return objWithPercentByState;
};  

console.log(percentageByState(revenueByState));
// Saída no console
// { SP: 37.53, RJ: 20.29, MG: 16.17, ES: 15.03, outros: 10.98 }
