let num: number = 5;
let str: string = "4";
let isChecked: boolean = true;
let obj: object = {};
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];

// object, any, function 이런 타입들은 안쓰는게 좋음
// any 말고 unknown 사용

// type alias 가능
// 타입에 별칭 줄때 사용 -> 재사용, 이해하기 쉬운 표현으로 바꿔서 만들 때
// 객체 타입을 정의할 때 ->

type PostId = number | string | boolean;

const postId: PostId = 5;

// 객체 타입을 지정할 때 alias 사용 많이 됨

enum gender {
  M = "M",
  F = "F",
}

type Person = {
  age: number;
  name: string;
  gender: gender;
};

interface AuthInterface {
  login: () => void;
  logout: (userId: string) => number;
}

type AuthAlias = {
  login: () => void;
  logout: (userId: string) => number;
};

const authApi: AuthInterface = {
  login() {},
  logout(userId) {
    return parseInt(userId);
  },
};

// Type Alias vs InterFace
// 타입스크립트 공식 홈페이지에서는 인터페이스 추천
// 개발자들이 주로 사용할 때는 type alias를 좀 더 많이 사용

// Type Alias
// 중복 선언이 불가, 같은 이름으로 선언이 안됨
// 타입에서 미리보기 가능
// &를 통해 두개의 타입을 합성 할 수 있음

// interface
// 중복 선언이 가능 -> 합성 됨 -> 사용이 간편할 순 있으나, 휴먼 에러 발생 가능성
// 타입에서 미리보기 불가능
// 확장이 가능해서 합성이 쉽다 -> class에도 부여가 가능
// extends를 통해 두개의 타입을 합성 할 수 있음
