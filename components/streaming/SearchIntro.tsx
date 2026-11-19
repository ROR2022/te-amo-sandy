import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Search } from 'lucide-react'
import { serie } from '@/data/serie'

export function SearchIntro({ onSelect }: { onSelect: () => void }) {
  return <motion.main className="intro-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .45 }}>
    <motion.div className="intro-logo" animate={{ textShadow: ['0 0 18px #e5091460', '0 0 42px #e5091490', '0 0 18px #e5091460'] }} transition={{ duration: 2.4, repeat: Infinity }}>{serie.title}</motion.div>
    <div className="intro-search"><Search size={20} /><span>{serie.title.toLowerCase()}</span><i /></div>
    <motion.button className="search-result" onClick={onSelect} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: .6 }} aria-label={`Abrir ${serie.title}`}>
      <div className="result-poster"><Image src={serie.heroImage} alt="Una pareja abrazada al atardecer" fill sizes="160px" unoptimized /></div>
      <div className="result-copy"><span className="eyebrow"><b>N</b> SERIE ORIGINAL</span><strong>{serie.title}</strong><div className="result-tags"><span>Original</span><span>98% coincidencia</span></div><small>1 resultado encontrado</small></div><Play className="result-play" fill="currentColor" size={22} />
    </motion.button>
    <p className="intro-hint">Una historia hecha solo para ti</p>
  </motion.main>
}
