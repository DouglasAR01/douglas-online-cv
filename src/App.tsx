import React from "react";
import "./scss/style.scss";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import ProfilePicture from "./components/ProfilePicture";
import PersonalInfo from "./components/PersonInfo";
import ContactInfo from "./components/ContactInfo";
import KnowledgeInfo from "./components/KnowledgeInfo";
import TheTitle from "./components/TheTitle";
import SectionParagraph from "./components/SectionParagraph";
import ExperienceItem from "./components/ExperienceItem";
import LangSwitcher from "./components/LangSwitcher";

function App() {
  const { t, i18n } = useTranslation();
  const leftBar: React.CSSProperties = {
    height: "100vh",
    overflowY: "scroll",
    overflowX: "hidden",
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-4 col-lg-3 bg-dark fixed-top text-light px-4"
            style={leftBar}
          >
            <ProfilePicture image={require("./assets/douglas.jpg")} />
            <LangSwitcher/>
            <PersonalInfo
              location={t("aboutPerson.location")}
              bornDate={t("aboutPerson.bornDate")}
              ocupation={t("aboutPerson.profession")}
            />
            <ContactInfo
              title={t("contactInfo.title")}
              phones={t("contactInfo.tels", { returnObjects: true })}
              emails={t("contactInfo.emails", { returnObjects: true })}
            />
            <KnowledgeInfo
              title={t("knowledgeInfo.title")}
              knowledges={t("knowledgeInfo.knowledges", {
                returnObjects: true,
              })}
            />
            <KnowledgeInfo
              title={t("skillsInfo.title")}
              icon="fa-solid fa-handshake-angle"
              knowledges={t("skillsInfo.skills", { returnObjects: true })}
            />
            <KnowledgeInfo
              title={t("langsInfo.title")}
              icon="fa-solid fa-language"
              knowledges={t("langsInfo.langs", { returnObjects: true })}
            />
          </div>
          <div className="offset-md-4 col-md-8 offset-lg-3 col-md-9 p-1 p-sm-4">
            <div className="container">
              <TheTitle
                title={t("aboutPerson.name")}
                lead={t("aboutPerson.profession")}
              />
              <SectionParagraph
                title={t("content.aboutMe.title")}
                icon="fa-solid fa-user"
              >
                <p className="mb-0">
                  <Trans>{t("content.aboutMe.text")}</Trans>
                </p>
              </SectionParagraph>
              <SectionParagraph
                title={t("content.education.title")}
                icon="fa-solid fa-user-graduate"
                paragraphStyles={{ marginLeft: "2rem", marginBottom: "2rem" }}
              >
                <ul>
                  {Object.values(
                    t("content.education.education", { returnObjects: true })
                  ).map((education, index) => {
                    return <li key={"education" + index}>{education}</li>;
                  })}
                </ul>
              </SectionParagraph>
              <SectionParagraph
                title={t("content.experience.title")}
                icon="fa-solid fa-business-time"
                paragraphStyles={{ marginLeft: "2rem" }}
              >
                <ul className="list-group">
                  {Object.values(
                    t("content.experience.experience", { returnObjects: true })
                  ).map((experience, index) => {
                    return (
                      <ExperienceItem
                        key={experience.job + index}
                        job={experience.job}
                        business={experience.business}
                        location={experience.location}
                        date={experience.date}
                        resume={experience.resume}
                      />
                    );
                  })}
                </ul>
              </SectionParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
