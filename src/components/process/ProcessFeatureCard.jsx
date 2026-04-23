export default function ProcessFeatureCard({ Icon, title, text }) {
  return (
    <div className="mt-[18px] rounded-[18px] border border-[rgba(30,27,24,0.10)] bg-[#F8F4EF] px-[18px] py-[16px] shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-[14px]">
        <div className="mt-[2px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[rgba(200,154,99,0.16)] text-[#5A4634] ring-1 ring-[rgba(200,154,99,0.22)]">
          <Icon className="h-[20px] w-[20px]" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-[800] leading-tight text-[#1E1B18]">{title}</div>
          <p className="mt-[8px] text-[12px] leading-[1.65] text-[#6E6257]">{text}</p>
        </div>
      </div>
    </div>
  )
}
