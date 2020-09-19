import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Join.css";

export default function SignIn() {
  const name = useSelector((state) => state.session.user.user);
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <form className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>your name: {name && name}</div>
        <div>
          <div>
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="radio"
              id="kenzie"
              name="room"
              value="kenzie"
            />
            <label htmlFor="kenzie">kenzie</label>
          </div>

          <div>
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="radio"
              id="q1"
              name="room"
              value="q1"
            />
            <label htmlFor="q1">Q1</label>
          </div>

          <div>
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="radio"
              id="q2"
              name="room"
              value="q2"
            />
            <label htmlFor="q2">Q2</label>
          </div>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat/${name && name.replace(/\s/g, "").toLowerCase()}/${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}
