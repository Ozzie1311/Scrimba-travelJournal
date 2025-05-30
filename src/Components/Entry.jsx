export default function Entry(props) {
  // const { title, text, googleMapsLink: link, country, dates, img } = entry;
  const { title, text, googleMapsLink: link, country, dates, img } = props;

  return (
    <article className="entry">
      <div className="entry-img-container">
        <img className="entry-img" src={img.src} alt={img.alt} />
      </div>
      <div className="entry-info">
        <div className="entry-info-country">
          <img
            className="entry-info-icon"
            src="src/assets/icon.png"
            alt="Location icon"
          />
          <span className="entry-info-location">{country}</span>
          <a target="_blank" className="entry-info-link" href={link}>
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-info-title">{title}</h2>
        <p className="entry-info-date">{dates}</p>
        <p className="entry-info-text">{text}</p>
      </div>
    </article>
  );
}
