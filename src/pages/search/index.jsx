import React, { useEffect } from "react";
import api from "../api";
import axios from "axios";

function Search() {
  const [input, setInput] = useState("");

  useEffect(() => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes${input}`;
    axios.get(bookLinks).then((res) => console.log(res));
  }, []);

  return <div />;
}

export default Search;
