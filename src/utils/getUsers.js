import api from "../services/api";

export const getUserAndToken = () => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("CurrentUser")),
});

const getUsers = async (user, setCurrentUser) => {
  const headers = { headers: { authorization: localStorage.getItem("token") } };

  setCurrentUser({
    books: await api
      .get(`/users/${user.id}/books/`, headers)
      .then((res) => res)
      .then((res) => {
        console.warn(`getUsers Books Status:${res.status}`);
        return res.data;
      })
      .catch((err) => console.error(err)),
    user: await api
      .get(`/users/${user.id}`, headers)
      .then((res) => res)
      .then((res) => {
        console.warn(`getUsers User Status:${res.status}`);
        return res.data;
      })
      .catch((err) => console.error(err)),
  });
};

export default getUsers;
