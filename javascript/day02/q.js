
let a = 10;
if (true) {
    const b = a++;
    // 할당과 연산
    // 전위 연산자 ++a -> 할당하기 전에 더하고 할당 b = 11
    // 후위 연산자 a++ -> 할당하고 나서 더해라 b = 10

    console.log(a)
}

console.log(a);
a++;
console.log(a);