import React from "react";

import { useSelector } from "react-redux";
import { RoutesIn, RoutesAuth } from "../../routes/routes";

export default function Authenticator() {
  const token = useSelector((state) => state.session.token);

  console.log(token);
  switch (token.length > 0) {
    case true:
      return <RoutesIn />;

    case false:
      return <RoutesAuth />;

    default:
      return <div>...</div>;
  }
}
