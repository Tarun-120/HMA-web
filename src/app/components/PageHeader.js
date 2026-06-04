export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="phead">
      <div className="container">
        {eyebrow ? <span className="phead__eyebrow">{eyebrow}</span> : null}
        <h1 className="phead__title">{title}</h1>
        {sub ? <p className="phead__sub">{sub}</p> : null}
      </div>
    </section>
  );
}
