import { User } from "../components/User";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User name={user.name} imageLink={user.image} />
      ))}
    </div>
  );
}

export { UserList };
