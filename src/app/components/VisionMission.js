import { visionMission } from "../data";

export default function VisionMission() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="head">
          <span className="eyebrow">Why HMA</span>
          <h2 className="title">Our Vision &amp; Mission</h2>
        </div>
        <div className="vm">
          <div className="vm__card vm__card--vision">
            <h3>Vision</h3>
            <p>{visionMission.vision}</p>
          </div>
          <div className="vm__card vm__card--mission">
            <h3>Mission</h3>
            <p>{visionMission.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
