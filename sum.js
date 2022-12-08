//1. Sum of nums
const nums = [4, 2, 2, 1, 1];
function sum(nums) {
  let summary = 0; //integer to store the sum
  //go through the array by length
  for (let i = 0; i < nums.length; i++) {
    summary = summary + nums[i];
  }
  console.log("A tömb számainak összege:", summary);
}

//2. Sum only the numbers
const nums2 = ["a", 4, 2, 2, 1, 1];
function sumnumbers(nums2) {
  let summary2 = 0; //integer to store the sum
  let onlynums2 = []; //array to collect the numbers from nums2
  for (let i = 0; i < nums2.length; i++) {
    //checks for numbers and push them to new array
    if (typeof nums2[i] === "number") {
      onlynums2.push(nums2[i]);
    } else {
      console.log("Hiba: -->", nums2[i], "<-- nem adható össze!");
    }
  }
  //sums the numbers in the new array
  for (let i = 0; i < onlynums2.length; i++) {
    summary2 = summary2 + onlynums2[i];
  }
  console.log("A tömb számainak összege:", summary2);
}

//3. Sums array objects after conversion attempt
const nums3 = ["a", 4, 2, 2, 1, 1];
function sumcorrect(nums3) {
  let summary3 = 0; //integer to store the sum
  let onlynums3 = []; //array to collect the numbers from nums2
  for (let i = 0; i < nums3.length; i++) {
    //checks for numbers and push them to new array
    if (typeof nums2[i] === "number") {
      onlynums3.push(nums3[i]);
    } else {
      if (parseInt(nums3[i]) === "number") {
        onlynums3.push(nums3[i]);
      }
      console.log("Hiba: -->", nums3[i], "<-- nem adható össze!");
    }
  }
  //sums the numbers in the new array
  for (let i = 0; i < onlynums3.length; i++) {
    summary3 = summary3 + parseInt(onlynums3[i]);
  }
  console.log("A tömb számainak összege:", summary3);
}
