function OddOne(arr) {
  let result = [];

  function helper(helperInput) {
      let test=helperInput[0];
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  console.log(result);
  return result;
}
OddOne([1, 2, 3, 4, 5, 6, 7, 8, 9]);
