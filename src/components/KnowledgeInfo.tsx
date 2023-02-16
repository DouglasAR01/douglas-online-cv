interface RequiredProps {
  title: string;
  knowledges: string[];
}
interface OptionalProps {
  icon?: string;
}
interface Props extends RequiredProps, OptionalProps {}

const defaultValues: OptionalProps = {
  icon: "fa-solid fa-display",
};

function KnowledgeInfo({ title, icon, knowledges }: Props) {
  const ulStyle: React.CSSProperties = {
    paddingLeft: "1rem",
  };
  return (
    <section className="mb-3">
      <div className="row text-info h3">
        <div className="col-2">
          <i className={icon}></i>
        </div>
        <div className="col-10">{title}</div>
      </div>
      <ul style={ulStyle}>
        {knowledges.map((knowledge: string) => {
          return <li key={knowledge}>{knowledge}</li>;
        })}
      </ul>
    </section>
  );
}

KnowledgeInfo.defaultProps = defaultValues;

export default KnowledgeInfo;
