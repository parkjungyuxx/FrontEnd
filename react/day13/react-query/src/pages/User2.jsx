import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const User2 = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/user/list"),
    staleTime: 1000 * 60 * 5,
  });

  console.log(data);
  return <div> user </div>;
};

export default User2;
