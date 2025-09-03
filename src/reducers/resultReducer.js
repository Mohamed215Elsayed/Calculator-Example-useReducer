export default function resultReducer(state, action) {
  const first = Number(action.payload.firstNumber);
  const second = Number(action.payload.secondNumber);

  switch (action.type) {
    case "ADD":
      return first + second;
    case "SUB":
      return first - second;
    case "MULT":
      return first * second;
    case "DIV":
      return second !== 0 ? first / second : "Error (÷0)";
    default:
      return state;
  }
}
