import svgPaths from "./svg-llliv5tliq";
import clsx from "clsx";
import imgMapImage from "figma:asset/1560447eff4fed5936502cd859a3732a37487c66.png";

function LoadSummaryWidgetBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12.606px] relative shrink-0 w-[8.824px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8244 12.6063">
        {children}
      </svg>
    </div>
  );
}
type TagsVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function TagsVectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TagsVectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}

function StartAndStopIconsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[14px] relative shrink-0 w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
        {children}
      </svg>
    </div>
  );
}
type LoadSummaryWidgetTextBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function LoadSummaryWidgetTextBackgroundImage({ text, text1, text2, additionalClassNames = "" }: LoadSummaryWidgetTextBackgroundImageProps) {
  return (
    <div className={clsx("basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#e9f1f8] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Roboto:Light',sans-serif] font-light relative shrink-0 text-[#e9f1f8] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#a7c7e4] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text2}
      </p>
    </div>
  );
}
type StartAndStopIconsProps = {
  className?: string;
  property1?: "Start" | "finish";
};

function StartAndStopIcons({ className, property1 = "Start" }: StartAndStopIconsProps) {
  if (property1 === "finish") {
    return (
      <div className={className} data-name="Property 1=finish">
        <StartAndStopIconsBackgroundImage>
          <g clipPath="url(#clip0_2046_3837)" id="Icons">
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
            <clipPath id="clip0_2046_3837">
              <rect fill="white" height="14" width="10" />
            </clipPath>
          </defs>
        </StartAndStopIconsBackgroundImage>
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Start">
      <StartAndStopIconsBackgroundImage>
        <g clipPath="url(#clip0_2046_3815)" id="Isolation_Mode">
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
          <clipPath id="clip0_2046_3815">
            <rect fill="white" height="14" width="10" />
          </clipPath>
        </defs>
      </StartAndStopIconsBackgroundImage>
    </div>
  );
}

function Tags({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Tags">
      <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[75px]" data-name="Tag" style={{ backgroundImage: "linear-gradient(90deg, rgba(207, 220, 231, 0.48) 0%, rgba(207, 220, 231, 0.48) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="opacity-[0.85] overflow-clip relative shrink-0 size-[14px]" data-name="icon">
          <TagsVectorBackgroundImage additionalClassNames="inset-[0_22.94%_0_20.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.87115 14">
              <path d={svgPaths.p1bc42700} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </TagsVectorBackgroundImage>
        </div>
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          3 Stops
        </p>
      </div>
      <div className="bg-[#fdf9c6] content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[8px] py-[8px] relative rounded-[12px] shrink-0 w-[75px]" data-name="Tag">
        <div className="opacity-75 overflow-clip relative shrink-0 size-[14px]" data-name="icon">
          <TagsVectorBackgroundImage additionalClassNames="inset-[4.17%_0_6.93%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12.4462">
              <path d={svgPaths.p35a48a80} fill="var(--fill-0, #3D3D3D)" id="Vector" />
            </svg>
          </TagsVectorBackgroundImage>
        </div>
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hazmat{" "}
        </p>
      </div>
    </div>
  );
}

export default function LoadSummaryWidget() {
  return (
    <div className="relative rounded-[16px] w-[341px]" data-name="Load summary widget">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
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
          <div className="absolute left-[221.24px] size-[18.909px] top-[87.61px]" data-name="My location">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9094 18.9094">
              <g id="My location">
                <rect fill="var(--fill-0, #2474BB)" fillOpacity="0.6" height="18.9094" rx="9.45471" width="18.9094" />
                <circle cx="9.45471" cy="9.45471" fill="var(--fill-0, #2474BB)" id="Ellipse 1155" r="6.023" stroke="var(--stroke-0, white)" strokeWidth="1.82091" />
              </g>
            </svg>
          </div>
          <div className="absolute bg-[#eff2f4] content-stretch flex flex-col items-center justify-center left-[264.1px] rounded-[50px] size-[12.713px] top-[82.57px]" data-name="Start and stop Icons">
            <div aria-hidden="true" className="absolute border-[#2474bb] border-[2.521px] border-solid inset-[-2.521px] pointer-events-none rounded-[52.521px] shadow-[0px_2.521px_2.521px_0px_rgba(0,0,0,0.25)]" />
            <LoadSummaryWidgetBackgroundImage>
              <g clipPath="url(#clip0_2046_3883)" id="Isolation_Mode">
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
                <clipPath id="clip0_2046_3883">
                  <rect fill="white" height="12.6063" width="8.8244" />
                </clipPath>
              </defs>
            </LoadSummaryWidgetBackgroundImage>
          </div>
          <div className="absolute bg-[#eff2f4] content-stretch flex flex-col items-center justify-center left-[94.55px] rounded-[50px] size-[12.713px] top-[124.17px]" data-name="Finish">
            <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <LoadSummaryWidgetBackgroundImage>
              <g clipPath="url(#clip0_2046_3797)" id="Icons">
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
                <clipPath id="clip0_2046_3797">
                  <rect fill="white" height="12.6063" width="8.8244" />
                </clipPath>
              </defs>
            </LoadSummaryWidgetBackgroundImage>
          </div>
        </div>
        <div className="bg-[#0e2e4b] relative shrink-0 w-full" data-name="Load detail details">
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Load Top">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Card Header Row Wrapper">
                <div className="basis-0 content-start flex flex-wrap gap-[16px] grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="Load Title">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Title and distance">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      #LoadID
                    </p>
                    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Info">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Trip Miles">
                        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon">
                          <div className="absolute inset-[0_0.26%_0_0]" data-name="Vector">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.964 14">
                                <path clipRule="evenodd" d={svgPaths.pae0e800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                          350 miles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0" data-name="Tags">
                    <Tags className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Pick up and drop off">
              <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Trip Wrapper">
                <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-[130px] relative shrink-0" data-name="Pickup Location">
                  <StartAndStopIcons className="bg-[#eff2f4] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[20px]" />
                  <LoadSummaryWidgetTextBackgroundImage text="Walmart Distribution 32" text1="Los Angles, CA" text2="8:00 am CST" />
                </div>
                <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                  <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-start min-h-px min-w-[130px] relative shrink-0" data-name="Dropoff Location">
                    <StartAndStopIcons className="bg-[#eff2f4] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[20px]" property1="finish" />
                    <LoadSummaryWidgetTextBackgroundImage text="Walmart Location 136" text1="Minneapolis, MN" text2="2:00 pm CST" additionalClassNames="h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[12px] relative w-full">
                    <p className="basis-0 font-['Roboto:Light_Italic',sans-serif] font-light grow italic leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      You're hauling a refrigerated load with three stops. You're currently headed to Walmart Distribution 32 in Los Angeles with an 8:00 a.m appointment. You're on schedule, and this load is marked hazmat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}