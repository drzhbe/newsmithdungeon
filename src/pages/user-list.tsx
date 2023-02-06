import { useUserList } from "../data/use-user-list";

export const UserList = () => {
  const { users, loading } = useUserList();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {users.map((user, i) => (
        <div key={user.id || i}>{user.name}</div>
      ))}
    </div>
  );
};
