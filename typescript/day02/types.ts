// 유틸 타입

type Post = {
  id: number;
  title: string;
  content?: string; // optional
};

// type PostList = Array<Post>
type PostList = Post[];

const post: PostList = [
  {
    id: 1,
    title: "",
    content: "",
  },
];

// 타입 추론
const a = 5;

// 절대 바뀌지 않는 값 = 상수
// as const를 붙여주면 정확한 타입 추론
const array = ["안녕", "하세요", "저는"] as const;

const menuList = [
  { label: "company", name: "회사 소개" },
  { label: "my", name: "마이페이지" },
] as const;

menuList.map((menu) => {
  menu.label === "company";
});

// 배열의 원소 타입
function pritPost(post: PostList[number]) {
  console.log(post.content);
}

// 타입 단언
// as
// 자주 사용하면 안됨.
// 타입 추론이 되지 않아서 타입을 강제
// 애초에 타입이 안정적이지 않은 친구와 타입을 강제
// as를 사용하기전에 타입 안정적이게 만들 수 있는가

type Person = {
  name: string;
  age: number;
};

const jungyu: Person = {} as Person;
jungyu.name; // console x
jungyu.age; // console x

// 유틸 타입
// 타입을 유연하게 사용할 수 있도록 지원하는 타입

// Omit - 객체 타입에서 특정 타입 키 제거
const postWithOutTitle: Omit<Post, "title" | "content"> = {
  id: 1,
};

// Pick - 객체 타입에서 특정 타입만 선택
const postTitle: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

// Partial - 객체의 모든 키를 옵셔널로 변경
// 수정(모두가 선택) 생성(Post)

const updatePost: Partial<Post> = {};

// ReturnType
const usePost = () => {
  const addPost = () => {};
  return { addPost };
};

const { addPost } = usePost();

// 특정 함수나 객체가 반환하는 값의 타입을 가져오 수 있음
function handleAddPost(addPost: ReturnType<typeof usePost>["addPost"]) {}

interface User {
  nickName: string;
  info?: {
    userName?: string;
  };
}

const user: User = {
  info: {
    userName: "456",
  },
};

if (!user.info) throw Error("");
if (!user.info.userName) throw Error("");
const userName: string = user.info.userName ?? "";
// userName은 없을수도 있는데 있는거로 쳐
// ! 진짜 왠만해서는 사용하지 X
// 백엔드에서 받아온 데이터는 이렇게 !가 사용되는 케이스가 있을 수 있음

// 타입 가드
function printVar(a: number | string) {
  if (typeof a === "string") return;
  if (typeof a === "number") {
    a.toFixed();
  }
}

type Circle = {
  name: "circle";
};

type Sqaure = {
  name: "sqaure";
  radius: "4px";
};

function print(b: Circle | Sqaure) {
  if (checkIsSquare(b)) {
    console.log(b.radius);
  }
}

function checkIsSquare(b: Circle | Sqaure): b is Sqaure {
  return b.name === "sqaure";
}

// 타입 가드의 가장 큰 핵심은, 두가지 이상의 타입을 갖고 있을 때
// 특정 값이 다른 타입에 없다면, 타입을 증명하면 사용이 가능

// 제네릭

// const useState = (args: any) => {
//   let state = args;
//   return [state];
// };

const useState = <T>(args?: T) => {
  let state = args;
  return [state];
};

const [state] = useState(5);

// 제네릭 사용해야하는 경우는 반환해야 하는 값이 인자 타입과 동일하거나
// 인자 타입에 따라서 반환해야하는 값이 다른 경우
// 타입을 유연하게 사용할 수 있도록하는 것

// 제네릭의 기본 원리 -> 하나의 인스턴스를 재사용해서 다른 객체를 사용하는 것