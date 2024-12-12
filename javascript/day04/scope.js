
let b = '3' // 전역 변수

function fa() {
    let a = '2' // 지역 변ㅅ의 지역변수

    function fb(){
        let b = '4' // fa의 지역함수인 fb의 지역변수
        console.log(a,b)
    }

    fb()
}

fb()
console.log(a)