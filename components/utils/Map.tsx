import styles from "@/style/utils/Map.module.css";

export default function Map() {
  return (
    <div className={styles.map}>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.916545828871!2d14.536961776893055!3d53.42824687231602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700caa2b0ccd807%3A0x318bd134ee25c7fc!2sKaszubska%204%2F21%2C%2070-226%20Szczecin!5e0!3m2!1spl!2spl!4v1717759653426!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Google - PhysioCare"
      ></iframe>
    </div>
  );
}
