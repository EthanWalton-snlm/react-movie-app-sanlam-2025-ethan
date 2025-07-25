import "./styles.css";
import { ColorGame } from "./pages/ColorGame";
import { Movies } from "./pages/Movies";
import { Routes, Route, Link } from "react-router";
import { UserList } from "./pages/UserList";
import { users } from "./constants";

export default function App() {
  return (
    <>
      <div class="header">
        <Link to="/">Home</Link>
        <Link to="/color-game">Color Game</Link>
        <Link to="/movies">Movie List</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className="app">
        <Routes>
          <Route path="/color-game" element={<ColorGame />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/users" element={<UserList users={users} />} />
          <Route path="/" element={<p>Welcome to movie app</p>} />
        </Routes>
      </div>
    </>
  );
}
