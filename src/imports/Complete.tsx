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
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] not-italic relative shrink-0 text-[#00fd40] text-[16px] text-shadow-[0px_0px_4px_rgba(0,253,64,0.3)]">Circle-check</p>
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
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e9f1f8] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`I’ll Be there in 45 Minutes `}</p>
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

export default function Complete() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Complete">
      <div aria-hidden="true" className="absolute border border-[#00fd40] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,253,64,0.2)]" />
      <Frame />
      <Frame4 />
    </div>
  );
}