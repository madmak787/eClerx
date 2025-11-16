import LoginForm from "./components/LoginForm";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      {
        localStorage.getItem('token') ? (
          <>
            <h1>User Management</h1>
            <UserForm />
            <UserList />
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )
      }
      
    </div>
  );
}

export default App;
