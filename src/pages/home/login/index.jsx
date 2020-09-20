import React, { useEffect, useState } from "react";
import { message } from "antd";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { user, password } from "./verifications.json";
import { useDispatch, useSelector } from "react-redux";
import { loginWithAPI, updateSession } from "../../../redux/actions/session.js";
import StylezedInput from "../../../components/input";
import BookIcon from "../../../assets/icons/books-icon.png";
import Recaptcha from "react-recaptcha";
import quotes from "../helper";
import {
  LoginBox,
  Avatar,
  Title,
  Quote,
  Container,
  LoginContainer,
  StyledForm,
  Captcha,
  StyledButton,
  LinkA,
  Info,
} from "./styled-login";

const random = Math.floor(Math.random() * (quotes.length - 1));

const Login = ({ onHandle }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { token, status } = useSelector((state) => state.session);
  const [verified, setVerified] = useState(false);

  const recaptchaLoaded = () => {
    console.log("Captcha carregou com sucesso!");
  };

  const verifyReCaptchaV2 = (response) => {
    if (response) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const onFinish = (values) => {
    if (verified) {
      dispatch(loginWithAPI(values));
    } else {
      message.warning("Complete o reCAPTCHA para efetuar login!");
    }
  };

  useEffect(() => {
    token && history.push("/explorar");
    if (status === 401) {
      message.warning("Usuário ou senha inválidos!");
      dispatch(updateSession({ status: 0 }));
    }
  }, [status, token, history, dispatch]);

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
              {/* NÃO APAGAR ESTES COMENTÁRIOS! */}
              {/* USAR ESTÁ CHAVE DEPOIS DO DEPLOY ->  6LfpLc0ZAAAAAL7mJZpq3ZAc_b6mK7Dgx0akx7mg */}
              <Captcha>
                <Recaptcha
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  render="explicit"
                  hl="pt-BR"
                  onloadCallback={recaptchaLoaded}
                  verifyCallback={verifyReCaptchaV2}
                />
              </Captcha>
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

          <motion.div whileHover={{ scale: 1.6 }}>
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
