import client from "../../../shared/libs/axios/base"

const UserApi = {
  getSession(){
    return client.get("/user")
  }
}

export default UserApi