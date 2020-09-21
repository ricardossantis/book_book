import React from "react";
import DevBox from "./dev";
import { motion } from "framer-motion";
import { InfoBox, LinkBack, Title, Squad, Development } from "./styled-info";
import LinkedinImg from "../../../assets/icons/linkedin.png";
import GitLabImg from "../../../assets/icons/gitlab.png";
import GitHubImg from "../../../assets/icons/github.png";
import framerImg from "../../../assets/icons/motion.png";
import googleImg from "../../../assets/icons/google.png";
import reactImg from "../../../assets/icons/react.png";
import reduxImg from "../../../assets/icons/redux.png";
import blankImg from "../../../assets/icons/blank.png";
import antdImg from "../../../assets/icons/antd.svg";
import maicon from "../../../assets/pictures/maicon.jpeg";
import christopher from "../../../assets/pictures/christopher.jpeg";
import luis from "../../../assets/pictures/luis.jpeg";
import ricardo from "../../../assets/pictures/ricardo.jpeg";

const InfoPage = ({ onHandle, page }) => {
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
      <InfoBox>
        <LinkBack
          onClick={() => {
            onHandle(page);
          }}
        >
          Voltar
        </LinkBack>
        <Title>Esquadrão SCRUM</Title>
        <Squad>
          <DevBox
            photo={maicon}
            name="Maicon Lourenço"
            role="Scrum Master"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text."
            links={[
              {
                icon: LinkedinImg,
                link: "https://www.linkedin.com/in/maiconlourenco/",
              },
              { icon: GitLabImg, link: "https://gitlab.com/maiconlouvre" },
              { icon: GitHubImg, link: "https://github.com/maiconloure" },
            ]}
          />

          <DevBox
            photo={christopher}
            name="Christopher William"
            role="Product Owner"
            description="Essa descrição pode ser refatorada???"
            links={[
              { icon: blankImg, link: "/" },
              {
                icon: LinkedinImg,
                link:
                  "https://www.linkedin.com/in/christopher-william-4363321a5/",
              },
              {
                icon: GitLabImg,
                link: "https://gitlab.com/christopher.william",
              },
            ]}
          />

          <DevBox
            photo={luis}
            name="Luis Cazuriaga"
            role="Tech Leader"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text."
            links={[
              {
                icon: LinkedinImg,
                link: "https://www.linkedin.com/in/luis-cazuriaga-49b9201a2/",
              },
              { icon: GitLabImg, link: "https://gitlab.com/luis-cazuriaga" },
              { icon: GitHubImg, link: "https://github.com/luis-cazuriaga" },
            ]}
          />

          <DevBox
            photo={ricardo}
            name="Ricardo Santis"
            role="QA/Tester"
            description="BookBook foi um projeto que testou exaustivamente todos os conhecimentos adquiridos até então!"
            links={[
              { icon: blankImg, link: "/" },
              {
                icon: LinkedinImg,
                link: "https://www.linkedin.com/in/ricardodesantis/",
              },
              { icon: GitLabImg, link: "https://gitlab.com/rsdsantis" },
            ]}
          />
        </Squad>

        <Development>
          <p>Desenvolvido com</p>
          <img src={reactImg} alt="react" />
          <img src={reduxImg} alt="redux" />
          <img src={antdImg} alt="antd" />
          <img src={framerImg} alt="framer" />
          <img src={googleImg} alt="google" />
        </Development>
      </InfoBox>
    </motion.div>
  );
};

export default InfoPage;
