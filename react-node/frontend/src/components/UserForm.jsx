import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/slices/userSlice";

export default function UserForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createUser({
        ...form,
        age: Number(form.age),  // convert here
      })
    );

    setForm({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
}
