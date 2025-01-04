import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

const Child = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/user/list"),
    staleTime: 1000 * 60 * 5,
  });
  console.log("child", data);

  return <div>child</div>;
};

export default Child;
