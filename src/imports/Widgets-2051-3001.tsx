function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        I can’t help with that yet
      </p>
    </div>
  );
}

function Summery() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Summery">
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            I heard “Who won UFC 37,” but I’m built to help with driving, loads, and fleet tasks.
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
      <Frame />
    </div>
  );
}

export default function Widgets() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full" data-name="Widgets">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_10px_0px_rgba(114,205,244,0.3)]" />
      <Layout />
    </div>
  );
}