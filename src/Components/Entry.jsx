export default function Entry() {
  return (
    <article className="entry">
      <div className="entry-img-container">
        <img
          className="entry-img"
          src="/src/assets/japan.jpeg"
          alt="Mount fuji image"
        />
      </div>
      <div className="entry-info">
        <div className="entry-info-country">
          <img
            className="entry-info-icon"
            src="src/assets/icon.png"
            alt="Location icon"
          />
          <span className="entry-info-location">japan</span>
          <a
            target="_blank"
            className="entry-info-link"
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-info-title">Mount Fuji</h2>
        <p className="entry-info-date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-info-text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
