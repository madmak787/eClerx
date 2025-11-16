import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/users/login";


export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(BASE_URL, form);
    console.log('Res:', res);
    if(res.data.success) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      location.reload();
    } else {
      alert(res.data.message);
    }
    setForm({ ...form, password: "" });
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
