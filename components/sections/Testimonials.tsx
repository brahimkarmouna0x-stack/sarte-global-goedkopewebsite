import Image from "next/image";

import type { Testimonial } from "@/types";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/constants/testimonials";

import { Container } from "../ui/Container";

const REVIEW_ITEMS = [
  ...TESTIMONIALS.map((t) => ({ ...t, cycle: "a" as const })),
  ...TESTIMONIALS.map((t) => ({ ...t, cycle: "b" as const })),
];

const GoogleLogo = ({ className = "h-6" }: { className?: string }) => (
  <svg viewBox="0 0 74 24" className={`${className} w-auto`} aria-hidden="true">
    <path
      d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"
      fill="#4285F4"
    />
    <path
      d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"
      fill="#EA4335"
    />
    <path
      d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z"
      fill="#4285F4"
    />
    <path
      d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.83-5.83-5.83zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"
      fill="#FBBC05"
    />
    <path d="M58 .24h2.51v17.57H58z" fill="#34A853" />
    <path
      d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"
      fill="#EA4335"
    />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const Stars = ({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) => (
  <div
    role="img"
    className={`flex items-center gap-0.5 ${className}`}
    aria-label={`${rating} van de 5 sterren`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={`star-${index}`}
        viewBox="0 0 20 20"
        className={`h-3.5 w-3.5 ${
          index < Math.round(rating) ? "fill-[#fbbc04]" : "fill-blanc-200"
        }`}
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section
      className="google-reviews-section relative py-8 sm:py-10"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
      aria-labelledby="reviews-title"
    >
      <Container>
        <div className="overflow-hidden rounded-2xl border border-blanc-800/20 bg-blanc-50/[0.97] shadow-[0_22px_70px_-42px_rgba(15,23,42,0.65)]">
          <div className="grid gap-0 lg:grid-cols-[300px_1fr]">
            <div className="border-b border-blanc-200/60 bg-blanc-50 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <GoogleLogo />
              <h2
                id="reviews-title"
                className="mt-4 text-xl font-black tracking-tight text-blanc-950"
              >
                {TESTIMONIALS_SECTION.heading}
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-2xl font-black text-blanc-950">
                  {TESTIMONIALS_SECTION.rating}
                </span>
                <Stars rating={5} />
              </div>
              <p className="mt-1 text-sm font-medium text-blanc-500">
                {TESTIMONIALS_SECTION.basedOn}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blanc-200/50 bg-blanc-50 px-3 py-1.5 text-xs font-bold text-blanc-700">
                <span className="h-2 w-2 rounded-full bg-[#34a853]" />
                {TESTIMONIALS_SECTION.verifiedLabel}
              </div>
            </div>

            <div className="relative overflow-hidden bg-blanc-50/[0.95] py-4">
              <div className="google-review-track mask-fade-edges flex gap-3 px-4">
                {REVIEW_ITEMS.map((testimonial) => (
                  <ReviewCard
                    key={`${testimonial.cycle}-${testimonial.name}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <article className="w-[275px] shrink-0 rounded-xl border border-blanc-200/50 bg-blanc-50 p-4 shadow-sm sm:w-[315px]">
    <div className="flex items-start justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-blanc-100 ring-1 ring-blanc-200">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="36px"
            quality={60}
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-blanc-950">
            {testimonial.name}
          </h3>
          <p className="text-xs font-medium text-blanc-500">
            {testimonial.time}
          </p>
        </div>
      </div>
      <GoogleG />
    </div>

    <Stars rating={testimonial.rating} className="mt-3" />

    <p className="mt-3 line-clamp-4 text-sm leading-5 text-blanc-700">
      {testimonial.content}
    </p>
  </article>
);
