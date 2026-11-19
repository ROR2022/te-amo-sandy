import Image from 'next/image'
import { motion } from 'framer-motion'
import { serie, type Recommendation } from '@/data/serie'
import { reveal } from './animations'

export function RecommendationRow() {
 return <motion.section className="content-section recommendations" id="recomendaciones" {...reveal}><div className="section-heading"><h2>Más como esto</h2><span>Historias que siempre recomendamos</span></div><div className="recommendation-grid">{serie.recommendations.map((item: Recommendation) => <motion.article className="recommendation-card" key={item.title} whileHover={{ scale: 1.035 }}><div className="rec-image"><Image src={item.image} alt={`Póster de ${item.title}`} fill sizes="(max-width: 700px) 45vw, 250px" unoptimized /></div><div className="rec-info"><span className="match">98% para ti</span><h3>{item.title}</h3><p>{item.description}</p></div></motion.article>)}</div></motion.section>
}
