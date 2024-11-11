import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fethUsers } from "../features/users/UsersSlice";


function Users() {
    const users=useSelector((state)=>state);
    const dispath=useDispatch();
    console.log(users);
    // console.log(state);
    useEffect(()=>{
        dispath(fethUsers());

    },[]);
    
  return (
    <div>
        <h2>Users</h2>
        {/* {users.loading ? <h3>Loading...</h3>: null}
        {users.users.length ?
        users.users.map((user)=><p key={user.id}>{user.name}</p>):null} */}
    </div>
  )
}

export default Users
