var input1: string = "SV001, nguyen van a; SV003, pham van c; SV006, vu thuy d";
var input2: string =
  "SV006, can tho; SV008, can tho; SV002, ha noi; SV003, da nang";
var valueconvert = convertInputs(input1, input2);
var listCode = handleCodes(valueconvert);
function convertInputs(input1: string, input2: string) {
  var list1Pre: string[] = input1.split("; ");
  var list1: string[][] = list1Pre.map(function (i: string) {
    return i.split(", ");
  });
  var list2Pre: string[] = input2.split("; ");
  var list2: string[][] = list2Pre.map(function (i: string) {
    return i.split(", ");
  });
  return { list1: list1.sort(), list2: list2.sort() };
}
function handleCodes(params: { list1: any; list2: any }) {
  var codeMatch: any = [];
  var codeFail1: any = [];
  var codeFail2: any = [];
  params.list1.map(function (i: any[]) {
    if (
      params.list2.find(function (j: any[]) {
        return j[0] === i[0];
      })
    )
      codeMatch.push(i[0]);
    else codeFail1.push(i[0]);
  });
  params.list2.map(function (i: any[]) {
    if (
      !params.list1.find(function (j: any[]) {
        return j[0] === i[0];
      })
    )
      codeFail2.push(i[0]);
  });
  return { codeMatch: codeMatch, codeFail1: codeFail1, codeFail2: codeFail2 };
}
function exam1(codeMatch: any[], list: { list1: any; list2: any }) {
  var result = codeMatch.map(function (i: string) {
    // tên
    var m1 = list.list1.find(function (j: any[]) {
      return j[0] === i;
    });
    // tỉnh
    var m2 = list.list2.find(function (j: any[]) {
      return j[0] === i;
    });
    return "".concat(i, ", ").concat(m1[1], ", ").concat(m2[1]);
  });
  return result;
}
function exam2(codeFail: any[], list: { list1?: any; list2: any }) {
  var result = codeFail.map(function (i: string) {
    var m1 = list.list2.find(function (j: any[]) {
      return j[0] === i;
    });
    return "".concat(i, ", ").concat(m1[1]);
  });
  return result;
}
console.log(exam1(listCode.codeMatch, valueconvert));
console.log(exam2(listCode.codeMatch, valueconvert));
