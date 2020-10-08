const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => { // 'never' usage is rare. Used when a function will never reach its end
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => { // annotation for destructured arguments
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
