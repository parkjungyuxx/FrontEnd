
function sayHi() {
    console.log("hi")
}

const logHi = () => console.log("hi");

(()=>console.log('hi'))()

function callback(fn) {
    fn()
}

callback(()=> console.log('hi'))

function thisA(){
    console.log(this)
    // console
    // 선언한적이 없는 것은 사용할 수가 없어요
    // 값이 아닌 이상 -> data(string, number, ...)

    
}