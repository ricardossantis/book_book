import React, { useState } from "react";
import Login from "./login";
import InfoPage from "./info";
import Register from "./register";
import { motion } from "framer-motion";
import FramerLoading from "../../components/framerLoading";
import { HomePage, Logo, Title, Slogan, FormBox } from "./styled-home";
import PageTransition from "../../components/pageTransition";

const Home = () => {
  const [page, setPage] = useState("login");
  const [prevPage, setPrevPage] = useState("login");

  const handleForm = (selectedPage) => {
    setPrevPage(page);
    setPage(selectedPage);
  };

  const handlePage = () => {
    if (page === "login") {
      return <Login onHandle={handleForm} />;
    } else if (page === "register") {
      return <Register onHandle={handleForm} />;
    } else if (page === "info") {
      return <InfoPage onHandle={handleForm} page={prevPage} />;
    } else if (page === "loading") {
      return (
        <div>
          <FramerLoading />
        </div>
      );
    }
  };

  return (
    <PageTransition>
      <HomePage>
        <Logo>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              },
            }}
          >
            <Title>BookBook</Title>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              },
            }}
          >
            <Slogan>
              <p>Explore, </p>
              <p>compartilhe,</p>
              <p>inspire-se!</p>
            </Slogan>
          </motion.div>
        </Logo>

        <FormBox>{handlePage()}</FormBox>
      </HomePage>
    </PageTransition>
  );
};

export default Home;
