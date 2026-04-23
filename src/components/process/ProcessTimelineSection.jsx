import { PROCESS_STEPS } from '../../data/processSteps.js'
import ProcessFeatureCard from './ProcessFeatureCard.jsx'

export default function ProcessTimelineSection() {
  return (
    <section className="bg-[#F8F4EF]">
      <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[40px] sm:px-[48px] sm:py-[48px] lg:px-[80px] lg:py-[56px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[#EFE7DE] px-[22px] py-[28px] shadow-[0_18px_44px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(30,27,24,0.09)] sm:px-[36px] sm:py-[36px] lg:px-[42px] lg:py-[44px]">
          <div
            className="pointer-events-none absolute -left-[8%] bottom-[12%] h-[200px] w-[200px] rounded-full bg-[rgba(200,154,99,0.07)] blur-2xl"
            aria-hidden
          />

          <div className="relative max-w-[820px]">
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#6E6257]">
              THE JOURNEY
            </div>
            <div className="mt-[12px] h-[3px] w-[52px] rounded-full bg-[#C89A63]" />
            <h2 className="mt-[14px] font-heading text-[34px] font-[500] leading-[1.08] text-[#1E1B18] sm:text-[40px]">
              Five deliberate phases,{' '}
              <span className="italic text-[#C89A63]">one refined outcome</span>
            </h2>
            <p className="mt-[14px] max-w-[620px] text-[13px] leading-[1.75] text-[#6E6257]">
              Each milestone builds on the last—transparent communication, meticulous
              documentation, and craftsmanship you can see and feel in every corner.
            </p>
          </div>

          <div className="relative z-[1] mt-[36px] lg:mt-[44px]">
          {/* Continuous spine (desktop): aligns to center of 72px step column */}
          <div
            className="pointer-events-none absolute bottom-8 left-[28px] top-8 hidden w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(200,169,110,0.55)_0%,rgba(200,169,110,0.22)_55%,rgba(200,169,110,0.12)_100%)] md:block md:left-[36px]"
            aria-hidden
          />

          <ol className="relative z-[1] m-0 list-none p-0">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.num}
                className="relative m-0 grid grid-cols-[56px_minmax(0,1fr)] gap-x-[18px] gap-y-0 pb-[42px] last:pb-0 md:grid-cols-[72px_minmax(0,1fr)] md:gap-x-[28px] md:pb-[52px]"
              >
                {/* Mobile segment connector (below this circle to next) */}
                {index < PROCESS_STEPS.length - 1 ? (
                  <div
                    className="absolute left-[27px] top-[56px] z-0 h-[calc(100%-56px)] w-px bg-[linear-gradient(180deg,rgba(200,169,110,0.5)_0%,rgba(200,169,110,0.12)_100%)] md:hidden"
                    aria-hidden
                  />
                ) : null}

                <div className="relative z-[2] flex justify-center md:justify-center">
                  <div
                    className={[
                      'flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-2 border-[#C8A96E] bg-[#EFE7DE] font-heading text-[17px] font-[600] tracking-[0.02em] text-[#1E1B18]',
                      'shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-[3px] ring-[#EFE7DE] transition-transform duration-300 hover:scale-[1.02]',
                    ].join(' ')}
                  >
                    {step.num}
                  </div>
                </div>

                <div className="min-w-0 pt-[2px] md:pt-[6px]">
                  <div className="text-[10px] font-[800] tracking-[0.2em] text-[#C89A63]">
                    {step.label}
                  </div>
                  <h3 className="mt-[10px] font-heading text-[26px] font-[500] leading-[1.12] text-[#1E1B18] sm:text-[30px]">
                    {step.title}
                  </h3>
                  <p className="mt-[12px] max-w-[640px] text-[13px] leading-[1.75] text-[#6E6257]">
                    {step.description}
                  </p>
                  <ProcessFeatureCard
                    Icon={step.card.Icon}
                    title={step.card.title}
                    text={step.card.text}
                  />
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
