import React, { useEffect } from "react";
import { message } from "antd";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { user, password } from "./verifications.json";
import { useDispatch, useSelector } from "react-redux";
import { loginWithAPI } from "../../../redux/actions/session.js";
import StylezedInput from "../../../components/input";
import BookIcon from "../../../assets/icons/books-icon.png";
import quotes from "../helper";
import {
  LoginBox,
  Avatar,
  Title,
  Quote,
  Container,
  LoginContainer,
  StyledForm,
  StyledButton,
  LinkA,
  Info,
} from "./styled-login";

const Login = ({ onHandle }) => {
  const random = Math.floor(Math.random() * (quotes.length - 1)) + 0;
  let history = useHistory();
  const dispatch = useDispatch();
  const { token, status } = useSelector((state) => state.session);

  const onFinish = (values) => {
    dispatch(loginWithAPI(values));
    history.push("/explorar");
  };

  useEffect(() => {
    token && history.push("/explorar");
    status === 401 && message.warning("Usuário ou senha inválidos!");
  }, [status, token, history]);

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
      <LoginBox>
        <motion.div
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 2.4 }}
        >
          <Avatar src={BookIcon} alt="BookBook-icon" />
        </motion.div>
        <Title>Entre para a maior comunidade de leitores do mundo!</Title>

        <Container>
          <LoginContainer>
            <StyledForm onFinish={onFinish}>
              <StylezedInput
                icon="fas fa-user"
                name="user"
                label="Usuário"
                type="text"
                rules={user}
              />
              <StylezedInput
                icon="fas fa-lock"
                name="password"
                label="Senha"
                type="password"
                rules={password}
              />
              ​
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <StyledButton type="submit" htmlType="submit">
                  ENTRAR
                </StyledButton>
              </motion.div>
              <LinkA onClick={() => onHandle("register")}>
                Não possui conta? <p>Cadastre-se aqui.</p>
              </LinkA>
            </StyledForm>
          </LoginContainer>
          <Quote>{quotes[random]}</Quote>

          <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.6 }}>
            <Info
              onClick={() => onHandle("info")}
              className="fas fa-info-circle"
            />
          </motion.div>
        </Container>
      </LoginBox>
    </motion.div>
  );
};

export default Login;
