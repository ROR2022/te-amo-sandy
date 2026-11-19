import { serie } from "@/data/serie";
import { WhatsAppContact } from "./WhatsAppContact";

export function Footer() {
  return (
    <footer className="footer">
      <WhatsAppContact />
      <div className="footer-social">
        <span>f</span>
        <span>◎</span>
        <span>▶</span>
        <span>♪</span>
      </div>
      <div className="footer-links">
        <a href="#inicio">Audio y subtítulos</a>
        <a href="#inicio">Centro de ayuda</a>
        <a href="#inicio">Avisos legales</a>
        <a href="#inicio">Privacidad</a>
      </div>
      <span className="footer-credit">
        Hecho con <b>♥</b> para {serie.recipientName}
      </span>
      <span className="footer-copy">
        © 2026 TE AMO {serie.recipientName.toLocaleUpperCase()} · Una producción de nuestros corazones
      </span>
    </footer>
  );
}
