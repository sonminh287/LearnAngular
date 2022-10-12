let input: string = "0254681214";
let result: string = "";
for (let x = 0; x < input.length; x++) {
  let str_num1 = Number(input[x - 1]);
  let str_num2 = Number(input[x]);
  if (str_num1 % 2 == 0 && str_num2 % 2 == 0) {
    result = result + input[x] + " - ";
  } else {
    result = result + input[x];
  }
}
console.log(`Kết quả : ${result}`);
