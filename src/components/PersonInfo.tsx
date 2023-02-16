interface Props {
  location: string;
  bornDate: string;
  ocupation: string;
}
export default function PersonalInfo({
  location,
  bornDate,
  ocupation,
}: Props) {
  return (
    <section className="mb-3">
      <div className="row">
        <div className="col-1">
          <i className="fa-regular fa-briefcase"></i>
        </div>
        <div className="col-11">{ocupation}</div>
      </div>
      <div className="row">
        <div className="col-1">
          <i className="fa-solid fa-flag"></i>
        </div>
        <div className="col-11">{location}</div>
      </div>
      <div className="row">
        <div className="col-1">
          <i className="fa-regular fa-calendar-week"></i>
        </div>
        <div className="col-11">{bornDate}</div>
      </div>
    </section>
  );
}
