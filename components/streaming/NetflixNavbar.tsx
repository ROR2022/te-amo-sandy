import { Bell, ChevronDown, Search } from 'lucide-react'
import { serie } from '@/data/serie'

export function NetflixNavbar() {
  return <header className="navbar"><a className="wordmark" href="#inicio">{serie.title}</a><nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#episodios">Series</a><a href="#episodios">Películas</a><a href="#recomendaciones">Mi lista</a></nav><div className="nav-right"><button aria-label="Buscar"><Search /></button><button aria-label="Notificaciones"><Bell /></button><button className="avatar-mini" aria-label="Perfil">♥</button><ChevronDown className="nav-chevron" size={15} /></div></header>
}
