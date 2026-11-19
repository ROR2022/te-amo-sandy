import { motion } from 'framer-motion'
import { Play, Plus } from 'lucide-react'
import { serie } from '@/data/serie'
import { reveal } from './animations'

export function PostCredits({ onRestart, onShare }: { onRestart: () => void; onShare: () => void }) {
 return <motion.section className="post-credits" {...reveal}><span className="credits-line" /><span className="credits-kicker">DESPUÉS DE LOS CRÉDITOS</span><p>{serie.finalMessage}</p><span className="signature">{serie.signature}</span><div className="credits-actions"><button className="button button-red" onClick={onRestart}><Play fill="currentColor" size={17} /> Volver a empezar</button><button className="button button-outline" onClick={onShare}><Plus size={18} /> Compartir</button></div><span className="credits-heart">♥</span></motion.section>
}
