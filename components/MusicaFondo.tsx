'use client'

import { Pause, Play } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

export function MusicaFondo() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  const playAudio = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    setHasError(false)
    try {
      await audio.play()
    } catch {
      setIsPlaying(false)
      setHasError(true)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.volume = 0.3

    const startOnFirstIntroInteraction = (event: MouseEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest('.intro-screen')) return

      document.removeEventListener('click', startOnFirstIntroInteraction, true)
      void playAudio()
    }

    document.addEventListener('click', startOnFirstIntroInteraction, true)
    return () => document.removeEventListener('click', startOnFirstIntroInteraction, true)
  }, [playAudio])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      void playAudio()
    } else {
      audio.pause()
    }
  }

  return (
    <div className="background-music">
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="none"
        onPlay={() => {
          setIsPlaying(true)
          setHasError(false)
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false)
          setHasError(true)
        }}
      />
      <button
        className="background-music-button"
        type="button"
        aria-label={isPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        onClick={togglePlayback}
      >
        {isPlaying ? <Pause aria-hidden="true" size={18} /> : <Play aria-hidden="true" size={18} />}
        <span>Música</span>
      </button>
      {hasError && (
        <p className="background-music-error" role="status" aria-live="polite">
          No se pudo reproducir la música. Intenta de nuevo.
        </p>
      )}
    </div>
  )
}
