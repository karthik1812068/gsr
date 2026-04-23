import { Clock3, House, Package, RefreshCcw } from 'lucide-react'

const items = [
  {
    icon: House,
    title: '800+',
    subtitle: 'Projects Delivered',
  },
  {
    icon: RefreshCcw,
    title: 'End-to-End',
    subtitle: 'Interior Solutions',
  },
  {
    icon: Package,
    title: 'Premium',
    subtitle: 'Quality Materials',
  },
  {
    icon: Clock3,
    title: 'On-Time',
    subtitle: 'Project Delivery',
  },
]

export default function StatsCard() {
  return (
    <section
      aria-label="Key stats"
      // Overflow root cause: negative bottom offset + parent `overflow-hidden` clips the card (can look like it "disappears").
      className="absolute left-1/2 bottom-[max(12px,env(safe-area-inset-bottom))] z-30 w-full max-w-[860px] -translate-x-1/2 overflow-hidden rounded-[16px] bg-[#EEE7DB] shadow-[0_8px_22px_rgba(80,55,20,0.12)] [width:calc(100%-28px)] sm:bottom-[14px] sm:rounded-[18px] sm:[width:calc(100%-64px)] lg:bottom-[18px] lg:[width:auto]"
    >
      <div className="grid grid-cols-2 gap-px bg-[rgba(94,74,56,0.12)] lg:h-[118px] lg:grid-cols-4">
        {items.map((it) => {
          const Icon = it.icon
          return (
            <div
              key={it.title}
              className="flex min-w-0 items-center gap-[10px] bg-[#EEE7DB] px-[12px] py-[12px] sm:gap-[12px] sm:px-[16px] sm:py-[14px] md:px-[18px] md:py-[16px] lg:py-0"
            >
              <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[rgba(205,168,122,0.24)] text-[#5A4634] sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]">
                <Icon className="h-[15px] w-[15px] sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]" />
              </div>
              <div className="min-w-0 leading-tight">
                <div className="text-[16px] font-[700] text-[#2B2118] sm:text-[19px] lg:text-[20px]">
                  {it.title}
                </div>
                <div className="mt-[2px] text-[11px] font-[500] leading-[1.25] text-[#7B6753] sm:mt-[4px] sm:text-[13px] lg:text-[14px]">
                  {it.subtitle}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

