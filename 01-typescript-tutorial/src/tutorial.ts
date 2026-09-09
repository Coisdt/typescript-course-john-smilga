
console.log('Typescript Course')

let name: string = 'John';

name.toUpperCase();
// console.log(name);

let age:number = 20;
// console.log(age);

let isStudent:boolean = true;

let teacher = !isStudent;
// console.log(teacher);


//union type
let unionType: string | number = 'John';
// console.log(unionType);

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

unionType = 20;
// console.log(unionType);


let books = [ 'The Great Gatsby', '1984 the year', 'To Kill a Mockingbird' ];
let foundbook: string | undefined;

for (let book of books) {
    if(book.includes('1984')) {
        console.log('1984 is a great book');
        foundbook = book;
        break;
    }
    console.log('should this run?');
}

console.log('found book:', foundbook?.toUpperCase());

