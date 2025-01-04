import { useQueryClient } from "@tanstack/react-query";

const InActive = () => {
  const qc = useQueryClient();
  // 유틸(편의성) 기능을 모아둔 저장소

  const handleGetUsers = async () => {
    const data = await qc.getQueryData(["users"]);
    console.log(data);
  };
  return (
    <div>
      <button onClick={handleGetUsers}>조회</button>
    </div>
  );
};

export default InActive;
