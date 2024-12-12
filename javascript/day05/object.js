const jungyu = {
  age: 27,
  height: "180cm",
};

// 매개변수로 key
// jungyu.key (x)
// jungyu[key] (o)

console.log(Object.keys(jungyu));
console.log(Object.values(jungyu));
console.log(Object.entries(jungyu));

/**
 * Object.keys(jungyu) // ["age", "height"]
 * Object.values(jungyu) // ["27", "190cm"]
 */

/**
 * Object.entries(jungyu) // [ ["age", 20], ["height", "190cm"]]
 */

/**
 * Object.assign(객체1, 객체2, 객체3, 객체4)
 * 중복된 키 값이 있다면 나중에 나온 객체로 덮어 씌워집니다.
 */

