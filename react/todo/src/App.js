import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Todolist from "./components/Todolist/Todolist";

const filters = ["All", "Scheduled", "Completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  
  return (
    <>
      <Header filters={filters} setFilter={setFilter} />
      <Todolist filter={filter} />
    </>
  );
}

export default App;

/**
 * 1. 삽입
 *  - 타이틀, 텍스트 추가 todos(상태 관리 : 배열속 객체) : todos 가 배열속 객체로 타이틀과 텍스트 저장
 *  - form input button 사용 onSubmit = handleSubmit todos 저장
 *  - isChecked, isEditing 도 객체 속성으로 추가
 *
 * 2. 수정
 *  - isEditing이 true일 시 모달창 생성 (editTitle, editText 상태로 저장 후 todos 상태 변경)
 *
 * 3. 삭제
 *  - 해당 todo 삭제
 *
 * 4. active
 *  - checkbox, isActive (상태관리 : false)
 *  - checkbox 체크 여부로 active, done, all 구분
 *
 *
 * 스타일
 *  - 버튼 (추가, 삭제, 수정, filter(all, done, active))
 *  - 인풋
 *  - 체크박스
 *  - 모달
 *  - 투두리스트 컨테이너
 *  - 투두리스트 헤더
 *  - 리스트 박스
 *
 */
