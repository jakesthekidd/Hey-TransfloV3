function Frame26Helper() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" fill="var(--fill-0, #1D5D96)" id="Ellipse 6" r="8" />
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Send To:
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>{`{FleetID}`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-center text-nowrap w-full">
      <Frame3 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#b8e6f9] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Change `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Message:
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#1d5d96] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7px] items-center p-[12px] relative w-full">
          <Frame26Helper />
          <Frame26Helper />
          <Frame26Helper />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Loading">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <Frame4 />
    </div>
  );
}