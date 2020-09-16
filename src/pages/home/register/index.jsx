import React from "react";
import { motion } from "framer-motion";
import api from "../../../services/api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pass_verify from "./password-verifications.js";
import { loginWithAPI } from "../../../redux/actions/session.js";
import BookIcon from "../../../assets/icons/books-icon.png";
import StylezedInput from "../../../components/input";
import { message } from "antd";
import {
  name,
  email,
  user,
  password,
  pass_confirm,
} from "./verifications.json";
import {
  RegisterBox,
  Avatar,
  Container,
  RegisterContainer,
  StyledForm,
  Title,
  StyledButton,
  LinkA,
  Info,
} from "./styled-register.js";

const Register = ({ onHandle }) => {
  const history = useHistory();
  const info = (infoMessage) => message.info(infoMessage);
  const dispatch = useDispatch();

  const onFinish = (user) => {
    onHandle("loading");
    api
      .post("/users", { user })
      .then(() => {
        info("Cadastro efetuado com sucesso!");
        setTimeout(
          () =>
            dispatch(
              loginWithAPI({ user: user.user, password: user.password })
            ),
          2500
        );

        history.push("/explorar");
      })
      .catch(() => info("Cadastro falhou, por favor verifique suas entradas."));
  };

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <RegisterBox>
        <motion.div
          animate={{ scale: 2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 2.4 }}
        >
          <Avatar src={BookIcon} alt="BookBook-icon" />
        </motion.div>
        <Title>Cadastre-se e faça parte desta rede íncrivel de leitores!</Title>

        <Container>
          <RegisterContainer>
            <StyledForm onFinish={onFinish}>
              <StylezedInput
                icon="fas fa-user-astronaut"
                name="nome"
                label="Nome Completo"
                type="text"
                rules={name}
              />

              <StylezedInput
                icon="fas fa-user"
                name="user"
                label="Usuário"
                type="text"
                rules={user}
              />

              <StylezedInput
                icon="fas fa-at"
                name="email"
                label="Email"
                type="text"
                rules={email}
              />

              <StylezedInput
                icon="fas fa-lock"
                name="password"
                label="Senha"
                type="password"
                rules={password}
              />

              <StylezedInput
                icon="fas fa-lock"
                name="pass_confirm"
                label="Confirme sua senha"
                type="password"
                rules={[pass_confirm, pass_verify]}
              />

              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <StyledButton type="submit" htmlType="submit">
                  Cadastrar
                </StyledButton>
              </motion.div>
              <LinkA
                onClick={() => {
                  onHandle("login");
                }}
              >
                Já possui conta?
                <p>Faça login.</p>
              </LinkA>
            </StyledForm>
          </RegisterContainer>

          <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.6 }}>
            <Info
              onClick={() => {
                onHandle("info");
              }}
              className="fas fa-info-circle"
            />
          </motion.div>
        </Container>
      </RegisterBox>
    </motion.div>
  );
};

export default Register;