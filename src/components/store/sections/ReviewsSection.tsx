import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Play, X, ArrowLeft, ArrowRight, Quote, Video } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { WRITTEN_REVIEWS, VIDEO_REVIEWS, type VideoReview } from "@/lib/book-data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-cyan text-cyan" : "text-white/25"}`}
        />
      ))}
    </div>
  );
}

function CarouselArrows({ api }: { api: CarouselApi }) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // sync enabled state with the carousel
  useCarouselSelect(api, (a) => {
    if (!a) return;
    setCanPrev(a.canScrollPrev());
    setCanNext(a.canScrollNext());
  });

  return (
    <div className="flex gap-2">
      <button
        onClick={() => api?.scrollPrev()}
        disabled={!canPrev}
        aria-label="Previous reviews"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-cyan hover:text-cyan disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        disabled={!canNext}
        aria-label="Next reviews"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-cyan hover:text-cyan disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-white"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function useCarouselSelect(api: CarouselApi, onSelect: (api: CarouselApi) => void) {
  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);
}

function VideoModal({ video, onClose }: { video: VideoReview | null; onClose: () => void }) {
  if (!video) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-cyan hover:text-cyan"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {video.videoUrl ? (
            <iframe
              src={video.videoUrl}
              title={`${video.name} — video review`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 text-white/70">
                <Video className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  Video review coming soon
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {video.name} · {video.role}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-white/10 p-5">
          <p className="font-display text-sm font-bold text-white">{video.name}</p>
          <p className="text-xs uppercase tracking-widest text-cyan">{video.role}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [mode, setMode] = useState<"written" | "video">("written");
  const [writtenApi, setWrittenApi] = useState<CarouselApi>();
  const [videoApi, setVideoApi] = useState<CarouselApi>();
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);

  return (
    <section id="reviews" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
              Reader Perspectives
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              What readers are saying.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Real perspectives from agents at every stage of the business. Have a copy? Share your
              experience.
            </p>
          </div>

          {/* Tab toggle */}
          <div className="inline-flex w-full max-w-xs items-center rounded-full border border-white/15 bg-white/5 p-1 sm:w-auto">
            <button
              onClick={() => setMode("written")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                mode === "written" ? "bg-cyan text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              <Quote className="h-3.5 w-3.5" />
              Written
              <span
                className={`rounded-full px-1.5 text-[10px] ${
                  mode === "written" ? "bg-ink/15 text-ink" : "bg-white/10 text-white/50"
                }`}
              >
                {WRITTEN_REVIEWS.length}
              </span>
            </button>
            <button
              onClick={() => setMode("video")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                mode === "video" ? "bg-cyan text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              <Video className="h-3.5 w-3.5" />
              Video
              <span
                className={`rounded-full px-1.5 text-[10px] ${
                  mode === "video" ? "bg-ink/15 text-ink" : "bg-white/10 text-white/50"
                }`}
              >
                {VIDEO_REVIEWS.length}
              </span>
            </button>
          </div>
        </div>

        {/* Written reviews carousel */}
        {mode === "written" && (
          <div className="mt-14">
            <Carousel
              opts={{ align: "start", loop: false }}
              setApi={setWrittenApi}
              className="relative"
            >
              <div className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden h-[28rem] w-24 -translate-y-1/2 bg-linear-to-l from-ink to-transparent lg:block" />
              <div className="mb-8 flex justify-end">
                <CarouselArrows api={writtenApi} />
              </div>
              <CarouselContent className="-ml-4">
                {WRITTEN_REVIEWS.map((r, i) => (
                  <CarouselItem key={i} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                    <figure className="flex h-full min-h-[20rem] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan/40">
                      <div>
                        <Quote className="h-7 w-7 text-cyan/50" />
                        <Stars rating={r.rating} />
                        <blockquote className="mt-4 text-sm leading-relaxed text-white/85">
                          "{r.quote}"
                        </blockquote>
                      </div>
                      <figcaption className="mt-6 border-t border-white/10 pt-4">
                        <p className="font-display text-sm font-bold text-white">{r.name}</p>
                        <p className="text-xs text-white/55">
                          {r.role}
                          {r.location ? ` · ${r.location}` : ""}
                        </p>
                        {r.date && (
                          <p className="mt-1 text-[10px] uppercase tracking-widest text-cyan/80">
                            {r.date}
                          </p>
                        )}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        {/* Video reviews carousel */}
        {mode === "video" && (
          <div className="mt-14">
            <Carousel
              opts={{ align: "start", loop: false }}
              setApi={setVideoApi}
              className="relative"
            >
              <div className="mb-8 flex justify-end">
                <CarouselArrows api={videoApi} />
              </div>
              <CarouselContent className="-ml-4">
                {VIDEO_REVIEWS.map((r, i) => (
                  <CarouselItem key={i} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                    <button
                      onClick={() => setActiveVideo(r)}
                      className="group block w-full overflow-hidden rounded-lg border border-white/10 text-left transition-all hover:border-cyan/40"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-black">
                        <img
                          src={r.poster}
                          alt={`${r.name} — video review`}
                          className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-ink shadow-lg transition-transform group-hover:scale-110">
                            <Play className="ml-0.5 h-6 w-6 fill-ink" />
                          </span>
                        </div>
                        {r.duration && (
                          <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                            {r.duration}
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <p className="font-display text-sm font-bold text-white">{r.name}</p>
                        <p className="text-xs uppercase tracking-widest text-cyan">{r.role}</p>
                        <p className="mt-2 text-sm text-white/70">"{r.quote}"</p>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-12 text-center">
          <p className="text-base text-white/70">Finished the book? Help the next agent decide.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cyan transition-colors hover:bg-cyan hover:text-ink"
          >
            Share Your Review
          </Link>
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
