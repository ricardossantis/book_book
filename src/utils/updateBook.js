import api from "../services/api";

const updateBook = (change, id, book) => {
    const headers = { headers: { authorization: localStorage.getItem("token") } };

    api.put(`/users/${id}/books/${book.id}`, change, headers)
        .then(res => console.log("updateBooks put:" + res.status))
};

export default updateBook;