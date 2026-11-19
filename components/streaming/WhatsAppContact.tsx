import { MessageCircle } from "lucide-react";
import { serie } from "@/data/serie";

export function WhatsAppContact() {
  const message = "Hola, me gustó la idea y quiero crear mi propia serie";
  const href = `https://wa.me/${serie.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-contact">
      <p>¿Te gustó la idea? ¿Quieres crear tu propia serie?</p>
      <a className="whatsapp-contact-link" href={href}>
        <MessageCircle aria-hidden="true" size={18} />
        Escríbenos por WhatsApp
      </a>
    </div>
  );
}
