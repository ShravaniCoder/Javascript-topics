let myDate = new Date()
console.log(myDate.toString()) //Output is Tue Apr 30 2024 09:21:58 GMT+0530 (India Standard Time).
console.log(myDate.toDateString()) // Output is Tue Apr 30 2024.
console.log(myDate.toISOString()) // Output is 2024-04-30T03:53:59.784Z.
console.log(myDate.toJSON()) // Output is 2024-04-30T03:55:12.339Z.
console.log(myDate.toLocaleDateString()) // Output is 30/04/2024.
console.log(myDate.toLocaleTimeString()) // Output is 09:27:30.
console.log(myDate.toLocaleString()) // Output is 30/04/2024, 09:28:51.
console.log(myDate.toTimeString()) // Output is 09:36:27 GMT+0530 (India Standard Time).
console.log(myDate.toUTCString()) // Output is Tue, 30 Apr 2024 04:06:27 GMT.
console.log(myDate.getTimezoneOffset()) // Output is -330.
console.log(typeof myDate) // Output is object.

let myCreatedDate = new Date(2024, 4, 4)
console.log(myCreatedDate.toDateString()) // Output is Sat May 04 2024.

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())