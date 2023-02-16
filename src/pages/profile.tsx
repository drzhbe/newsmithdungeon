import { FormEvent, useEffect, useState } from "react";
import { useAuth, useUpdateUser } from "../data/auth";

export const Profile = () => {
  const { user, loading } = useAuth();
  const { updateUser, loading: updating, error } = useUpdateUser();
  const [name, setName] = useState(user?.name || "");
  useEffect(() => {
    if (user?.name) {
      setName(user?.name);
    }
  }, [user?.name]);
  if (!user) {
    return null;
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return updateUser({ name });
  };
  return (
    <div>
      Hi,{" "}
      <form onSubmit={onSubmit}>
        {loading ? (
          "Loading..."
        ) : (
          <input
            type={"text"}
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {name !== user?.name && (
          <input
            type="submit"
            value={updating ? "saving..." : "save"}
            disabled={updating}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400 hover:shadow-md cursor-pointer disabled:bg-slate-300"
          />
        )}
      </form>
    </div>
  );
};
