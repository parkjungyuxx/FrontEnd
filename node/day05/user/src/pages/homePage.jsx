import useSession from "../features/user/hooks/queries/useSession"



const HomePage = () => {
  const {data:session} = useSession()
  console.log(session)
  
  return <>main</>
}
export default HomePage