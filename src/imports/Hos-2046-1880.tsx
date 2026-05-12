import svgPaths from "./svg-0h620gapjv";
type HosHelperProps = {
  text: string;
  text1: string;
};

function HosHelper({ text, text1 }: HosHelperProps) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative text-nowrap w-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-right text-white">
          <p className="leading-[normal] text-nowrap">{text1}</p>
        </div>
      </div>
    </div>
  );
}

export default function Hos() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col gap-[24px] items-center p-[16px] relative rounded-[16px] w-[341px]" data-name="HOS">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_10px_0px_rgba(114,205,244,0.3)]" />
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Time till rest">
        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[175px]" data-name="Background">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175 175">
              <circle cx="87.5" cy="87.5" fill="var(--fill-0, #0C243A)" id="Background" r="87.5" />
            </svg>
          </div>
          <div className="[grid-area:1_/_1] ml-[10px] mt-[10px] relative size-[153px]" data-name="Time remaining">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 153">
              <g id="Time remaining">
                <path d={svgPaths.p9b75d80} fill="var(--fill-0, #06121D)" id="Ellipse 1156" />
                <path d={svgPaths.p34adad80} fill="var(--fill-0, #D0021B)" id="Ellipse 1157" />
              </g>
            </svg>
          </div>
          <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[7px] items-center justify-center leading-[normal] ml-[16px] mt-[26px] relative text-center text-white w-[141px]" data-name="Info">
            <p className="font-['Roboto:Black',sans-serif] font-black relative shrink-0 text-[44px] w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              D
            </p>
            <p className="font-['Roboto:Black',sans-serif] font-black relative shrink-0 text-[36px] w-[107px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0:45
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Rest In
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Rest In
            </p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
              45 Min
            </p>
          </div>
        </div>
        <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative w-full">
              <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                You have 40 minutes left until you have to rest and you have two hours and 25 minutes until your day is up.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#164670] h-[4px] rounded-[29px] shrink-0 w-[318px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="bg-[#0a233a] relative rounded-[4px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#164670] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <HosHelper text="Rest In" text1="0:45" />
        </div>
        <div className="relative rounded-[4px] shrink-0 w-full">
          <HosHelper text="Driving Left" text1="2:25" />
        </div>
        <div className="relative rounded-[4px] shrink-0 w-full">
          <HosHelper text="Workday Left" text1="6:40" />
        </div>
        <div className="relative rounded-[4px] shrink-0 w-full">
          <HosHelper text="Cycle Left" text1="68:41" />
        </div>
      </div>
    </div>
  );
}