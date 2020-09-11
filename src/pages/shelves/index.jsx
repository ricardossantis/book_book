import React, { useEffect } from "react";
import getBooks from "../../redux/actions/getBook.js";
import { useDispatch, useSelector } from "react-redux";

export default function Shelves() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getBooks(userInfo));
  }, []);

  return (
    <div>
      Aqui devem existir 3 categorias/prateleiras: Quero Ler, Lendo Atualmente e
      Acabei de ler;
    </div>
  );
}
