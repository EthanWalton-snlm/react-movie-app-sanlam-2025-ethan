import "./styles.css";
import { users, UserList } from "./User";
import { ColorGame } from "./ColorGame";
import { MovieList, AddMovie } from "./MovieList";

export default function App() {
  return (
    <div className="App">
      <AddMovie />
      {/* <UserList users={users} />
      <ColorGame /> */}
    </div>
  );
}
