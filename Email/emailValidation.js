//Email Validation
//UC1 Email
let emailCheck1 = RegExp('^[a-z]{3,}$');
let sampleCheck5 = emailCheck1.test("abc");
console.log(sampleCheck5);

//UC2 Email
let emailCheck2 = RegExp('^[a-z]{3,}?(@[a-z]{2,})$');
let sampleCheck6 = emailCheck2.test("abc@bridgelabz");
console.log(sampleCheck6);

//UC3 Email
let emailCheck3 = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleCheck7 = emailCheck3.test("abc.@bridgelabz.co");
console.log(sampleCheck7);