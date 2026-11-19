"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { serie, type EpisodeItem } from "@/data/serie";
import { CastRow } from "@/components/streaming/CastRow";
import { EpisodeModal } from "@/components/streaming/EpisodeModal";
import { EpisodeRow } from "@/components/streaming/EpisodeRow";
import { Footer } from "@/components/streaming/Footer";
import { HeroBanner } from "@/components/streaming/HeroBanner";
import { NetflixNavbar } from "@/components/streaming/NetflixNavbar";
import { PostCredits } from "@/components/streaming/PostCredits";
import { RecommendationRow } from "@/components/streaming/RecommendationRow";
import { SearchIntro } from "@/components/streaming/SearchIntro";

export default function Page() {
  const [phase, setPhase] = useState<1 | 2>(1);
  const [episode, setEpisode] = useState<EpisodeItem | null>(null);
  const [muted, setMuted] = useState(true);
  const openDetails = useCallback(
    () =>
      document
        .getElementById("episodios")
        ?.scrollIntoView({ behavior: "smooth" }),
    [],
  );
  const playEpisode = () => {
    setEpisode(null);
    toast("Este episodio lo vivimos juntos 😉");
  };
  const share = async () => {
    try {
      if (navigator.share)
        await navigator.share({
          title: serie.title,
          text: serie.tagline,
          url: window.location.href,
        });
      else {
        await navigator.clipboard.writeText(window.location.href);
        toast("Enlace copiado. Compártelo con tu persona favorita.");
      }
    } catch {
      toast("Esta historia es solo para ustedes ♥");
    }
  };
  return (
    <main className="app-shell">
      <Toaster theme="dark" position="top-center" />
      <AnimatePresence mode="wait">
        {phase === 1 ? (
          <SearchIntro key="intro" onSelect={() => setPhase(2)} />
        ) : (
          <motion.div
            key="series"
            className="series-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.42 }}
          >
            <NetflixNavbar />
            <HeroBanner
              onPlay={openDetails}
              onInfo={openDetails}
              muted={muted}
              toggleMute={() => setMuted(!muted)}
            />
            <div className="content-wrap">
              <CastRow />
              <EpisodeRow onEpisode={setEpisode} />
              <RecommendationRow />
              <PostCredits
                onRestart={() => {
                  setEpisode(null);
                  setPhase(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onShare={share}
              />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <EpisodeModal
        episode={episode}
        onClose={() => setEpisode(null)}
        onPlay={playEpisode}
      />
    </main>
  );
}
