interface Props {
  text: string;
  icon: string | undefined;
}
export default function SubtitleWithIcon({ text, icon }: Props) {
  if (icon === undefined){
    return <h3 className="mb-0">{text}</h3>
  }
  return (
    <div className="h3">
      <i className={icon}></i>
      <span className="ms-2">{text}</span>
    </div>
  );
}
