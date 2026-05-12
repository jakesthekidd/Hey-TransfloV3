import svgPaths from "./svg-omhetcr21d";
import imgFleetSwapIcon from "figma:asset/0cf8c75fcd4d2376b39db15247736be074d2cbf7.png";

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Roboto:Light',_sans-serif] font-light leading-[15px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3376px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Fleet Profile `}</p>
    </div>
  );
}

function Fleet() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[171px]" data-name="Fleet">
      <div aria-hidden="true" className="absolute border-[#6ae0be] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[#2474bb] text-[16px] tracking-[-0.3376px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        FLEET NAME
      </p>
      <p className="font-['Roboto:Light',_sans-serif] font-light leading-[15px] relative shrink-0 text-[#2474bb] text-[14px] tracking-[-0.3376px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`{Fleet ID}`}</p>
    </div>
  );
}

function Fleet1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[8px] items-start leading-[15px] p-[16px] relative rounded-[8px] shrink-0 text-white tracking-[-0.3376px] w-[171px]" data-name="Fleet">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PX DEMO...
      </p>
      <p className="font-['Roboto:Light',_sans-serif] font-light relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        PXDEMO1
      </p>
    </div>
  );
}

function Fleet2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[8px] items-start leading-[15px] p-[16px] relative rounded-[8px] shrink-0 text-white tracking-[-0.3376px] w-[171px]" data-name="Fleet">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        FLEET 3
      </p>
      <p className="font-['Roboto:Light',_sans-serif] font-light relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        FLEET 3.
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[19px] items-center overflow-clip relative shrink-0 w-full">
      <Fleet />
      <Fleet1 />
      <Fleet2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[8px]" data-name="Current page">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Current page " r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="More">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" fillOpacity="0.1" id="More" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function FleetSwapIcon() {
  return (
    <div className="h-[40px] relative shrink-0 w-[42px]" data-name="Fleet swap Icon">
      <div className="absolute h-[40px] left-0 top-0 w-[42px]" data-name="Fleet swap Icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFleetSwapIcon} />
        </div>
      </div>
    </div>
  );
}

function FleetManagement() {
  return (
    <div className="relative shrink-0 w-full" data-name="Fleet Management">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative w-full">
          <FleetSwapIcon />
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3376px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Fleet Management `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative text-center text-white w-full">
          <div className="flex flex-col font-['Font_Awesome_6_Free:Solid',_sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] w-[42px]">
            <p className="leading-[normal]">plus</p>
          </div>
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.3376px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add Fleet `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative text-center text-white w-full">
          <div className="flex flex-col font-['Font_Awesome_6_Free:Solid',_sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] w-[42px]">
            <p className="leading-[normal]">file-import</p>
          </div>
          <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.3376px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Document Queue `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <FleetManagement />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-0 items-center justify-center relative shrink-0 w-full">
      <div className="h-px relative shrink-0 w-[87px]">
        <div className="absolute inset-[-200%_-2.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 5">
            <path d={svgPaths.p38480300} id="Line 6" opacity="0.258355" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#2474bb] relative shrink-0 w-full z-[2]">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <Frame15 />
          <Frame18 />
          <Frame19 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

export default function Frame21() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full">
      <Frame16 />
      <div className="h-[27.001px] relative shrink-0 w-full z-[1]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 27">
          <path d={svgPaths.p133b2d00} fill="var(--fill-0, #2474BB)" id="Rectangle 2771" />
        </svg>
      </div>
    </div>
  );
}