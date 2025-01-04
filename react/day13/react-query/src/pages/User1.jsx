import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const User1 = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/user/list"),
    staleTime: 1000 * 60 * 5,
  });

  // 성공 이후의 로직이 재사용이 되는가 -> mutate
  // 재사용되지 않는다면 -> mutateAsync


  const qc = useQueryClient();
  // 재사용이 된다고 하더라도, 추가하는 것과 그 이후의 사이드이펙트 분리 -> mutateAsync
  const { mutate } = useMutation({
    mutationFn: (data) => axios.post("/api/user", data),
    onSuccess: () => {
        // 즉시 데이터를 유효하지 않은 상태로 만들고
        // 데이터가 추가되면서 리랜더링 발생 -> 재호출

        //stale gcTime을 기다릴 필요가 없다
        // 개발자가 재호출 타이밍을 임의로 조정할 수 있다

        // 예를 들면 사용자를 추가하면 사용자 데이터를 다시 불러와야한다.
        qc.invalidateQueries({
            queryKey: ['users']
        })
      alert("성공");
    },
  });

  const handleClickAddUser = () => {
    // async await 쓰려면 mutateAsync()
    mutate({
      userId: Math.floor(Math.random() * 10000000),
      nickName: "example-2",
      profileImageUrl: "example-2",
    });
  };

  console.log(data);

  return (
    <div>
      <button onClick={handleClickAddUser}>추가</button>
      <Link to="/user/2">
        <button>이동</button>
      </Link>
      <Link to="/inactive">
        <button>이동</button>
      </Link>
    </div>
  );
};

export default User1;
