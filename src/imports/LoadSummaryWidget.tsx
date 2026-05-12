import svgPaths from "./svg-f09w12uhrv";
import imgMapImage from "figma:asset/1560447eff4fed5936502cd859a3732a37487c66.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[14px] relative shrink-0 w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12.606px] relative shrink-0 w-[8.824px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8244 12.6063">
        {children}
      </svg>
    </div>
  );
}

function MyLocation() {
  return (
    <div className="absolute left-[221.24px] size-[18.909px] top-[87.61px]" data-name="My location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9094 18.9094">
        <g id="My location">
          <rect fill="var(--fill-0, #2474BB)" fillOpacity="0.6" height="18.9094" rx="9.45471" width="18.9094" />
          <circle cx="9.45471" cy="9.45471" fill="var(--fill-0, #2474BB)" id="Ellipse 1155" r="6.023" stroke="var(--stroke-0, white)" strokeWidth="1.82091" />
        </g>
      </svg>
    </div>
  );
}

function IsolationMode() {
  return (
    <BackgroundImage>
      <g clipPath="url(#clip0_2035_2403)" id="Isolation_Mode">
        <g id="Vector 3">
          <path d={svgPaths.p2845b400} fill="var(--fill-0, #00BF30)" />
          <path d={svgPaths.p2845b400} fill="var(--fill-1, black)" fillOpacity="0.2" />
        </g>
        <path d={svgPaths.p1e986200} fill="var(--fill-0, #00BF30)" id="Vector 2" />
        <path d={svgPaths.p13ce7950} fill="var(--fill-0, #3A3A3C)" id="Vector" />
        <path d={svgPaths.p3d1ac100} fill="var(--fill-0, #3A3A3C)" id="Vector_2" />
        <path d={svgPaths.p371e6900} fill="var(--fill-0, #00BF30)" id="Vector 1" />
        <path d={svgPaths.p1d551af0} fill="var(--fill-0, #3A3A3C)" id="Vector_3" />
        <path d={svgPaths.p94aa200} fill="var(--fill-0, #3D3D3D)" id="Vector_4" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2403">
          <rect fill="white" height="12.6063" width="8.8244" />
        </clipPath>
      </defs>
    </BackgroundImage>
  );
}

function StartAndStopIcons() {
  return (
    <div className="absolute bg-[#eff2f4] content-stretch flex flex-col items-center justify-center left-[264.1px] rounded-[31.516px] size-[20.17px] top-[82.57px]" data-name="Start and stop Icons">
      <div aria-hidden="true" className="absolute border-[#2474bb] border-[2.521px] border-solid inset-[-2.521px] pointer-events-none rounded-[34.037px] shadow-[0px_2.521px_2.521px_0px_rgba(0,0,0,0.25)]" />
      <IsolationMode />
    </div>
  );
}

function Icons() {
  return (
    <BackgroundImage>
      <g clipPath="url(#clip0_2035_2383)" id="Icons">
        <path d={svgPaths.p3ad74e00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        <path d={svgPaths.p3f6d5680} fill="var(--fill-0, #3D3D3D)" id="Vector_2" />
        <path d={svgPaths.pc897e80} fill="var(--fill-0, #3D3D3D)" id="Vector_3" />
        <path d={svgPaths.p2af313f0} fill="var(--fill-0, #3D3D3D)" id="Vector_4" />
        <path d={svgPaths.p28fae680} fill="var(--fill-0, #3D3D3D)" id="Vector_5" />
        <path d={svgPaths.p3ddfb00} fill="var(--fill-0, #3D3D3D)" id="Vector_6" />
        <path d={svgPaths.pef2d600} fill="var(--fill-0, #3D3D3D)" id="Vector_7" />
        <path d={svgPaths.p30c01b00} fill="var(--fill-0, #3D3D3D)" id="Vector_8" />
        <path d={svgPaths.p2f674c00} fill="var(--fill-0, #3D3D3D)" id="Vector_9" />
        <path d={svgPaths.p3e33ea00} fill="var(--fill-0, #3D3D3D)" id="Vector_10" />
        <path d={svgPaths.p293a5600} fill="var(--fill-0, #3D3D3D)" id="Vector_11" />
        <path d={svgPaths.pfe30100} fill="var(--fill-0, #3D3D3D)" id="Vector_12" />
        <path d={svgPaths.p39d4bc00} fill="var(--fill-0, #3D3D3D)" id="Vector_13" />
        <path d={svgPaths.p14e85980} fill="var(--fill-0, #3D3D3D)" id="Vector_14" />
        <path d={svgPaths.p73f3c00} fill="var(--fill-0, #3D3D3D)" id="Vector_15" />
        <path d={svgPaths.p3ce7fe00} fill="var(--fill-0, #3D3D3D)" id="Vector_16" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2383">
          <rect fill="white" height="12.6063" width="8.8244" />
        </clipPath>
      </defs>
    </BackgroundImage>
  );
}

function Finish() {
  return (
    <div className="absolute bg-[#eff2f4] content-stretch flex flex-col items-center justify-center left-[94.55px] rounded-[31.516px] size-[20.17px] top-[124.17px]" data-name="Finish">
      <div aria-hidden="true" className="absolute border-[#2474bb] border-[0.63px] border-solid inset-0 pointer-events-none rounded-[31.516px]" />
      <Icons />
    </div>
  );
}

function Map() {
  return (
    <div className="h-[226.283px] overflow-clip relative shrink-0 w-full" data-name="Map">
      <div className="absolute h-[454.457px] left-0 top-0 w-[433.656px]" data-name="Map image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMapImage} />
      </div>
      <div className="absolute h-[43.807px] left-[111.25px] top-[91.71px] w-[153.482px]" data-name="Route line">
        <div className="absolute inset-[-7.19%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.482 50.11">
            <path d={svgPaths.p30a985c0} id="Route line" stroke="var(--stroke-0, #72CDF4)" strokeWidth="6.30314" />
          </svg>
        </div>
      </div>
      <MyLocation />
      <StartAndStopIcons />
      <Finish />
    </div>
  );
}

function Icon() {
  return (
    <IconBackgroundImage>
      <g clipPath="url(#clip0_2035_2380)" id="icon">
        <path clipRule="evenodd" d={svgPaths.p24e4ae80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2380">
          <rect fill="white" height="14" width="14" />
        </clipPath>
      </defs>
    </IconBackgroundImage>
  );
}

function TripMiles() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Trip Miles">
      <Icon />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        350 miles
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Info">
      <TripMiles />
    </div>
  );
}

function TitleAndDistance() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Title and distance">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        #LoadID
      </p>
      <Info />
    </div>
  );
}

function Icon1() {
  return (
    <IconBackgroundImage>
      <g id="icon" opacity="0.85">
        <path d={svgPaths.pc6cc100} fill="var(--fill-0, black)" id="Vector" />
      </g>
    </IconBackgroundImage>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[75px]" data-name="Tag" style={{ backgroundImage: "linear-gradient(90deg, rgba(207, 220, 231, 0.48) 0%, rgba(207, 220, 231, 0.48) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Icon1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 Stops
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <IconBackgroundImage>
      <g clipPath="url(#clip0_2035_2659)" id="icon" opacity="0.75">
        <path d={svgPaths.p337bac00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2659">
          <rect fill="white" height="14" width="14" />
        </clipPath>
      </defs>
    </IconBackgroundImage>
  );
}

function Tag1() {
  return (
    <div className="bg-[#fdf9c6] content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[75px]" data-name="Tag">
      <Icon2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Hazmat `}</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Tags">
      <Tag />
      <Tag1 />
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0" data-name="Tags">
      <Tags />
    </div>
  );
}

function LoadTitle() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[16px] grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Load Title">
      <TitleAndDistance />
      <Tags1 />
    </div>
  );
}

function CardHeaderRowWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Card Header Row Wrapper">
      <LoadTitle />
    </div>
  );
}

function LoadTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Load Top">
      <CardHeaderRowWrapper />
    </div>
  );
}

function IsolationMode1() {
  return (
    <BackgroundImage1>
      <g clipPath="url(#clip0_2035_2362)" id="Isolation_Mode">
        <g id="Vector 3">
          <path d={svgPaths.p19560d00} fill="var(--fill-0, #00BF30)" />
          <path d={svgPaths.p19560d00} fill="var(--fill-1, black)" fillOpacity="0.2" />
        </g>
        <path d={svgPaths.p23567080} fill="var(--fill-0, #00BF30)" id="Vector 2" />
        <path d={svgPaths.p3c047cc0} fill="var(--fill-0, #3A3A3C)" id="Vector" />
        <path d={svgPaths.p1338e380} fill="var(--fill-0, #3A3A3C)" id="Vector_2" />
        <path d={svgPaths.p26892300} fill="var(--fill-0, #00BF30)" id="Vector 1" />
        <path d={svgPaths.p6b63300} fill="var(--fill-0, #3A3A3C)" id="Vector_3" />
        <path d={svgPaths.p1b18a380} fill="var(--fill-0, #3D3D3D)" id="Vector_4" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2362">
          <rect fill="white" height="14" width="10" />
        </clipPath>
      </defs>
    </BackgroundImage1>
  );
}

function StartAndStopIcons1() {
  return (
    <div className="bg-[#eff2f4] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[20px]" data-name="Start and stop Icons">
      <IsolationMode1 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#e9f1f8] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Walmart Distribution 32 `}</p>
      <p className="font-['Roboto:Light',sans-serif] font-light relative shrink-0 text-[#e9f1f8] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Los Angles, CA
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#a7c7e4] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        8:00 am CST
      </p>
    </div>
  );
}

function PickupLocation() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-[130px] relative shrink-0" data-name="Pickup Location">
      <StartAndStopIcons1 />
      <Text />
    </div>
  );
}

function Icons1() {
  return (
    <BackgroundImage1>
      <g clipPath="url(#clip0_2035_2340)" id="Icons">
        <path d={svgPaths.p3e58ce00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        <path d={svgPaths.p3fd18880} fill="var(--fill-0, #3D3D3D)" id="Vector_2" />
        <path d={svgPaths.p1aa3d800} fill="var(--fill-0, #3D3D3D)" id="Vector_3" />
        <path d={svgPaths.p1a0fb8f0} fill="var(--fill-0, #3D3D3D)" id="Vector_4" />
        <path d={svgPaths.p29d04380} fill="var(--fill-0, #3D3D3D)" id="Vector_5" />
        <path d={svgPaths.p2d5d1400} fill="var(--fill-0, #3D3D3D)" id="Vector_6" />
        <path d={svgPaths.p1129ca80} fill="var(--fill-0, #3D3D3D)" id="Vector_7" />
        <path d={svgPaths.p6f26f00} fill="var(--fill-0, #3D3D3D)" id="Vector_8" />
        <path d={svgPaths.p3bc40500} fill="var(--fill-0, #3D3D3D)" id="Vector_9" />
        <path d={svgPaths.p13e5c380} fill="var(--fill-0, #3D3D3D)" id="Vector_10" />
        <path d={svgPaths.p33a9d270} fill="var(--fill-0, #3D3D3D)" id="Vector_11" />
        <path d={svgPaths.p4100df0} fill="var(--fill-0, #3D3D3D)" id="Vector_12" />
        <path d={svgPaths.p2befc5c0} fill="var(--fill-0, #3D3D3D)" id="Vector_13" />
        <path d={svgPaths.p3687ff80} fill="var(--fill-0, #3D3D3D)" id="Vector_14" />
        <path d={svgPaths.p2ba1a080} fill="var(--fill-0, #3D3D3D)" id="Vector_15" />
        <path d={svgPaths.p851f00} fill="var(--fill-0, #3D3D3D)" id="Vector_16" />
      </g>
      <defs>
        <clipPath id="clip0_2035_2340">
          <rect fill="white" height="14" width="10" />
        </clipPath>
      </defs>
    </BackgroundImage1>
  );
}

function StartAndStopIcons2() {
  return (
    <div className="bg-[#eff2f4] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[20px]" data-name="Start and stop Icons">
      <Icons1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-full items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#e9f1f8] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Walmart Location 136
      </p>
      <p className="font-['Roboto:Light',sans-serif] font-light relative shrink-0 text-[#e9f1f8] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Minneapolis, MN
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#a7c7e4] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        2:00 pm CST
      </p>
    </div>
  );
}

function DropoffLocation() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-start min-h-px min-w-[130px] relative shrink-0" data-name="Dropoff Location">
      <StartAndStopIcons2 />
      <Text1 />
    </div>
  );
}

function TripWrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Trip Wrapper">
      <PickupLocation />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <DropoffLocation />
      </div>
    </div>
  );
}

function PickUpAndDropOff() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Pick up and drop off">
      <TripWrapper />
    </div>
  );
}

function LoadDetailDetails() {
  return (
    <div className="bg-[#0e2e4b] relative shrink-0 w-full" data-name="Load detail details">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <LoadTop />
        <PickUpAndDropOff />
      </div>
    </div>
  );
}

export default function LoadSummaryWidget() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Load summary widget">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Map />
        <LoadDetailDetails />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}