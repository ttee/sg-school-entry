"use client";

import { useEffect, useRef, useState } from "react";

const WEEK_LINE = "Is this your bottle?";
const DEMO_FILM = "/trial/a2-w0-counter.mp4?v=sync1";
const MAX_SECONDS = 12;

function pickEnglishVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !window.speechSynthesis) return undefined;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === "en-SG") ||
    voices.find((v) => /Singapore|Luna/i.test(v.name)) ||
    voices.find((v) => v.lang.toLowerCase().startsWith("en-gb")) ||
    voices.find((v) => v.lang.toLowerCase().startsWith("en-us")) ||
    voices.find((v) => v.lang.toLowerCase().startsWith("en"))
  );
}

function recorderMime(): string | undefined {
  if (typeof MediaRecorder === "undefined") return undefined;
  return [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/aac",
  ].find((type) => MediaRecorder.isTypeSupported(type));
}

export default function GuestRepeatStrip() {
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const [selfPlaying, setSelfPlaying] = useState(false);
  const [playbackUrl, setPlaybackUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState("");

  const filmRef = useRef<HTMLVideoElement | null>(null);
  const playbackRef = useRef<HTMLAudioElement | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const playbackUrlRef = useRef<string | null>(null);
  const stopTimerRef = useRef<number | null>(null);

  const stopDemo = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    const film = filmRef.current;
    if (film) {
      film.pause();
      film.currentTime = 0;
    }
    setDemoPlaying(false);
  };

  const stopSelf = () => {
    const audio = playbackRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setSelfPlaying(false);
  };

  const releaseMic = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (stopTimerRef.current !== null) {
      window.clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopDemo();
      stopSelf();
      if (recorderRef.current && recorderRef.current.state === "recording") {
        recorderRef.current.stop();
      }
      releaseMic();
      if (playbackUrlRef.current) {
        URL.revokeObjectURL(playbackUrlRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSpokenLine = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return false;
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(WEEK_LINE);
    utter.lang = "en-SG";
    utter.rate = 0.92;
    const voice = pickEnglishVoice();
    if (voice) utter.voice = voice;
    utter.onend = () => {
      setDemoPlaying(false);
    };
    utter.onerror = () => {
      setDemoPlaying(false);
      playFilmDemo();
    };
    synth.cancel();
    synth.speak(utter);
    return true;
  };

  const playFilmDemo = () => {
    const film = filmRef.current;
    if (!film) {
      setDemoPlaying(false);
      return;
    }
    film.muted = false;
    film.volume = 1;
    film.currentTime = 0;
    const play = film.play();
    if (play && typeof play.then === "function") {
      play.then(() => setDemoPlaying(true)).catch(() => setDemoPlaying(false));
    } else {
      setDemoPlaying(true);
    }
  };

  const handleListenDemo = () => {
    setMicError("");
    stopSelf();
    if (recording) return;
    stopDemo();
    setDemoPlaying(true);
    const started = playSpokenLine();
    if (!started) playFilmDemo();
  };

  const handleChip = () => {
    if (recording) return;
    handleListenDemo();
  };

  const finishRecording = () => {
    const recorder = recorderRef.current;
    if (recorder && recorder.state === "recording") {
      recorder.stop();
    } else {
      setRecording(false);
      releaseMic();
    }
  };

  const handleSpeak = async () => {
    setMicError("");
    if (recording) {
      finishRecording();
      return;
    }
    if (typeof MediaRecorder === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setMicError("这台设备开不了录音。可以先听示范。");
      return;
    }
    stopDemo();
    stopSelf();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      streamRef.current = stream;
      chunksRef.current = [];
      const mimeType = recorderMime();
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        releaseMic();
        setRecording(false);
        if (chunksRef.current.length === 0) return;
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        if (playbackUrlRef.current) URL.revokeObjectURL(playbackUrlRef.current);
        const url = URL.createObjectURL(blob);
        playbackUrlRef.current = url;
        setPlaybackUrl(url);
        // Instant local playback — never uploaded.
        requestAnimationFrame(() => {
          const audio = playbackRef.current;
          if (!audio) return;
          audio.src = url;
          audio.play().then(() => setSelfPlaying(true)).catch(() => setSelfPlaying(false));
        });
      };
      recorder.start(250);
      setRecording(true);
      stopTimerRef.current = window.setTimeout(finishRecording, MAX_SECONDS * 1000);
    } catch {
      releaseMic();
      setRecording(false);
      setMicError("开不了麦克风。可以先听示范。");
    }
  };

  const handleHearSelf = () => {
    if (!playbackUrl) return;
    stopDemo();
    const audio = playbackRef.current;
    if (!audio) return;
    audio.src = playbackUrl;
    audio.currentTime = 0;
    audio.play().then(() => setSelfPlaying(true)).catch(() => setSelfPlaying(false));
  };

  return (
    <div className="mb-8 bg-card border border-line rounded-xl p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <button
          type="button"
          onClick={handleChip}
          className="inline-flex items-center bg-accent/10 hover:bg-accent/20 text-accent px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
        >
          跟读这一句
        </button>
      </div>
      <p className="text-sm text-ink-2 mb-3">先听，再说，再听自己的。不是评分。</p>
      <p className="font-serif font-semibold text-xl text-ink mb-4" lang="en">
        {WEEK_LINE}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleListenDemo}
          disabled={recording}
          className="px-4 py-2 bg-paper-2 text-ink border border-line font-semibold rounded-full hover:bg-line transition-colors disabled:opacity-50"
        >
          {demoPlaying ? "在听…" : "听示范"}
        </button>
        <button
          type="button"
          onClick={handleSpeak}
          className={`px-4 py-2 font-semibold rounded-full transition-colors ${
            recording
              ? "bg-warn-bg text-warn-ink hover:opacity-80"
              : "bg-accent text-accent-ink hover:bg-accent-hover"
          }`}
        >
          {recording ? "停下" : "说"}
        </button>
        <button
          type="button"
          onClick={handleHearSelf}
          disabled={!playbackUrl || recording}
          className="px-4 py-2 bg-paper-2 text-ink border border-line font-semibold rounded-full hover:bg-line transition-colors disabled:opacity-50"
        >
          {selfPlaying ? "在听…" : "立刻听自己的"}
        </button>
      </div>
      {micError && <p className="mt-3 text-sm text-warn-ink">{micError}</p>}
      <video
        ref={filmRef}
        src={DEMO_FILM}
        preload="metadata"
        playsInline
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onEnded={() => {
          setDemoPlaying(false);
        }}
        onError={() => setDemoPlaying(false)}
      />
      <audio
        ref={playbackRef}
        className="hidden"
        onEnded={() => setSelfPlaying(false)}
        onPause={() => setSelfPlaying(false)}
      />
    </div>
  );
}
