import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BoxIcon, DropMenu, Hamburguer, DropDiv, DropLink } from "./style";

const DropDownMenu = () => {
  const session = useSelector((state) => state.session);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <DropMenu
      menuActive={menuActive ? "true" : "false"}
      onMouseLeave={() => setMenuActive(false)}
      onMouseEnter={() => setMenuActive(true)}
    >
      <BoxIcon onClick={() => setMenuActive(!menuActive)}>
        <Hamburguer menuactive={menuActive}></Hamburguer>
      </BoxIcon>
      <DropDiv menuactive={menuActive}>
        <DropLink
          menuactive={menuActive ? menuActive : undefined}
          to="/explorar"
        >
          Explorar
        </DropLink>
        <DropLink
          menuactive={menuActive ? menuActive : undefined}
          to="/pesquisa"
        >
          Buscar
        </DropLink>
        <DropLink menuactive={menuActive ? menuActive : undefined} to="/join">
          Chat
        </DropLink>
        <DropLink
          menuactive={menuActive ? menuActive : undefined}
          to={`/perfil/${session.user.id}`}
        >
          Perfil
        </DropLink>
      </DropDiv>
    </DropMenu>
  );
};

export default DropDownMenu;
