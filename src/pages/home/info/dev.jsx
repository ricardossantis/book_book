import React from "react";
import { DevCard, Photo, Dev, Links, Text } from "./styled-dev";

const DevBox = ({ photo, name, role, description, links }) => {
  return (
    <DevCard>
      <Photo src={photo} alt="foto do desenvolvedor" />
      <Dev>
        <h2>{name}</h2>
        <h3>{role}</h3>
      </Dev>
      <Links>
        {links.map(({ icon, link }, key) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={key}>
            <img src={icon} alt="icon" />
          </a>
        ))}
      </Links>
      <Text>{description}</Text>
    </DevCard>
  );
};

export default DevBox;
