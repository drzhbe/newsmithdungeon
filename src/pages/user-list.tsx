import { useUserList } from "../data/use-user-list";

export const UserList = () => {
  const { users, loading, error } = useUserList();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.map((user, i) => (
        <div key={user.id || i}>{user.name}</div>
      ))}
    </div>
  );
};
