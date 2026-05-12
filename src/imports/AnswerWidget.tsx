function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your ETA:
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        7:30PM
      </p>
    </div>
  );
}

function Summery() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Summery">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            00:45 Minutes you should arrive by 7:30PM
          </p>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Layout">
      <Summery />
      <Frame1 />
    </div>
  );
}

export default function AnswerWidget() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full" data-name="answer widget">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Layout />
    </div>
  );
}