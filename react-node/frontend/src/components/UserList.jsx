import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/slices/userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      {list.map((u) => (
        <div key={u.id}>
          {u.name} — {u.email} ({u.age})
          <button onClick={() => dispatch(deleteUser(u.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}
