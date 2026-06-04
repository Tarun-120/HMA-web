import { management } from "../data";

export default function Management() {
  return (
    <section className="section section--navy">
      <div className="container">
        <div className="mgmt">
          <p className="mgmt__quote">{management.message}</p>
          <div className="mgmt__author">
            <b>{management.author}</b>
            <span>{management.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
