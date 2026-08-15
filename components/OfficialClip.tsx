"use client";

type OfficialClipProps = {
  videoId: string;
  credit: string;
};

export default function OfficialClip({ videoId, credit }: OfficialClipProps) {
  return (
    <div className="bg-card border border-line rounded-xl p-5">
      <h3 className="font-semibold text-ink mb-3">🎬 先看官方影片</h3>
      <p className="text-sm text-ink-2 mb-3">
        先看官方影片，再做本周作业。
      </p>
      
      {/* YouTube privacy-enhanced embed */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="Official YouTube Sample"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Fallback notice for WeChat/PRC users */}
      <p className="text-sm text-ink-2 mt-3">
        若影片无法播放，请点下方按钮在 YouTube 打开。
      </p>
      
      {/* 片源说明 */}
      <div className="mt-4 bg-paper border border-line rounded-lg p-3">
        <p className="text-xs text-ink-2 leading-relaxed mb-3">
          <strong>片源说明：</strong>{credit}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-accent text-accent-ink text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors"
        >
          在 YouTube 观看 →
        </a>
      </div>
    </div>
  );
}
