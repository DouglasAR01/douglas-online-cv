import Subtitle from "./SubtitleWithIcon";

interface RequiredProps {
  title: string;
  children: React.ReactNode;
}
interface OptionalProps {
  icon?: string;
  paragraphStyles?: React.CSSProperties;
}
interface Props extends RequiredProps, OptionalProps {}

const defaultValues: OptionalProps = {
  icon: "",
  paragraphStyles: {
    marginLeft: "3rem",
    marginBottom: "2rem"
  },
};

function SectionParagraph({ title, icon, paragraphStyles, children }: Props) {
  return (
    <section>
      <Subtitle text={title} icon={icon !== "" ? icon : undefined} />
      <div style={paragraphStyles}>{children}</div>
    </section>
  );
}

SectionParagraph.defaultProps = defaultValues;

export default SectionParagraph;
