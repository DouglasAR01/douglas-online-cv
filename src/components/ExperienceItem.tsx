import { useState } from "react";
import { Trans } from "react-i18next";
interface Props {
  job: string;
  business: string;
  location: string;
  date: string;
  resume: string;
}
export default function ExperienceItem({
  job,
  business,
  location,
  date,
  resume,
}: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <h6 className="text-primary">{job}</h6>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setToggle(!toggle)}
          >
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>

      <div className="row text-center mb-2">
        <div className="col-4 text-start">{business}</div>
        <div className="col-4">{location}</div>
        <div className="col-4 fst-italic">{date}</div>
      </div>
      {toggle ? (
        <p>
          <Trans>{resume}</Trans>
        </p>
      ) : null}
    </li>
  );
}
