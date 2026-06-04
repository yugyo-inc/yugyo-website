export function PageHero({
  title,
  subtitle,
  photo,
  small = false,
}: {
  title: string;
  subtitle?: string;
  photo: string; // e.g. "/photos/p11.jpg"
  small?: boolean;
}) {
  return (
    <section className="pagehead">
      <div className="pagehead__img" style={{ backgroundImage: `url('${photo}')` }} />
      <div className="pagehead__veil" />
      <div className="pagehead__inner">
        <h1 className={`pagehead__title${small ? " sm" : ""}`}>{title}</h1>
        {subtitle && <p className="pagehead__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
