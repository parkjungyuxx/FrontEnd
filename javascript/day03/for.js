// 1학년 1반 ~ 10반 -> 6학년

// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}학년 ${j}반`)
//     }
// }

// 구구단 만들기 
// 1*1 = (1단 ~9단), 9*9 = 81

for (let i = 1; i < 10; i++) {
    console.log(`${i}단`)
    for (let j = 1; j < 10; j++) {
        console.log(`${i}X${j}=${i*j}`)
    }
    console.log("---------")
}

