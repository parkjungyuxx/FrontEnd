console.log('A');

setTimeout(() => console.log('B'), 2000);
setTimeout(() => console.log('C'), 3000);
setTimeout(() => console.log('D'));
setTimeout(() => console.log('E'), 0);

Promise.resolve().then(() => console.log('F'));

console.log('G');
