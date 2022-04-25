//Pincode Validation 
let pincodeCheck = RegExp('^[1-9]{1}[0-9]{5}$');
let pincodeCheck1 = RegExp('^[1-9]{1}[0-9]{2}[\\s][0-9]{3}$');

//UC1 Pincode
let sampleCheck1 = pincodeCheck.test(400088);
console.log(sampleCheck1);

//UC2 Pincode
let sampleCheck2 = pincodeCheck.test("A400088");
console.log(sampleCheck2);
