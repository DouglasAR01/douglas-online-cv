import { availableLangs } from "../services/multilang";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <section className="mb-1 text-center">
      {Object.keys(availableLangs).map((key) => {
        return (
          <img
            src={availableLangs[key]}
            alt={key}
            key={key}
            width="40px"
            height="20px"
            className="me-1"
            onClick={() => i18n.changeLanguage(key)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </section>
  );
}
