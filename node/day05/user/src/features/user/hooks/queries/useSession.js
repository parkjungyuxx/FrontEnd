import { useQuery } from "@tanstack/react-query"
import UserApi from "../../apis/userApi"

const useSession = () => {
  return useQuery({
    queryKey: ['session'],
    queryFn: () => UserApi.getSession(),
    staleTime: Infinity, // 사용자 정보가 수정되면 invalidate 해야함
    gcTime: Infinity
  })
}

export default useSession