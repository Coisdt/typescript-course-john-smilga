
console.log('test')

let name: string = 'John';

name.toUpperCase();
console.log(name);

let age:number = 20;
console.log(age);

let isStudent:boolean = true;

let teacher = !isStudent;
console.log(teacher);


//union type
let unionType: string | number = 'John';
console.log(unionType);

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

unionType = 20;
console.log(unionType);

