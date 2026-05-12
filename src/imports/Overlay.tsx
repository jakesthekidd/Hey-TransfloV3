import svgPaths from "./svg-8vnm5qhxol";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[733.251px] relative shrink-0 w-[315.377px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315.377 733.251">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="Frame 3">{children}</g>
    </BackgroundImage3>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="Frame 2">{children}</g>
    </BackgroundImage3>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[45px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[-0.13px]">{children}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage>{text}</BackgroundImage>;
}

function IPhone() {
  return <div className="absolute backdrop-blur-[1.5px] backdrop-filter h-[844px] left-1/2 rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 translate-x-[-50%] w-[390px]" data-name="iPhone 13 & 14 - 1" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 390 844\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.8999999761581421\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-36.35 199.8 -92.325 -16.797 195 422)\\\'><stop stop-color=\\\'rgba(5,16,26,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(9,30,48,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(14,43,69,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(24,70,112,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function SiriAnimation() {
  return (
    <div className="absolute h-[844px] left-[-1px] opacity-50 top-0 w-[393px]" data-name="SiriAnimation">
      <div className="absolute blur-[1px] border-2 border-[#95d9f7] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur S" />
      <div className="absolute blur-[2px] border-[#95d9f7] border-[5px] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur M" />
      <div className="absolute blur-[5px] border-[#95d9f7] border-[7px] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur L" />
      <div className="absolute blur-[10px] border-[#95d9f7] border-[10px] border-solid filter h-[852px] left-0 mix-blend-hard-light rounded-[60px] top-0 w-[393px]" data-name="Blur XL" />
    </div>
  );
}

function Frame() {
  return (
    <BackgroundImage1>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage1>
  );
}

function Frame1() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <BackgroundImage1>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage1>
  );
}

function Frame7() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1c8ea00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <BackgroundImage1>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage1>
  );
}

function Frame12() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <BackgroundImage1>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage1>
  );
}

function Frame17() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p188d2a00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame18 />
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[102.497px] items-start left-[-231px] opacity-[0.07] top-0 w-[1569px]" data-name="Stars">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[63.195px] relative shrink-0 w-[45.96px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9601 63.1952">
        <g id="Group 289907">
          <path d={svgPaths.p797ce00} fill="var(--fill-0, white)" id="Vector" opacity="0.95" />
          <path d={svgPaths.p3e533bf0} fill="var(--fill-0, white)" id="Vector_2" opacity="0.95" />
          <path d={svgPaths.p1840800} fill="var(--fill-0, white)" id="Vector_3" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}

function MicIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center px-[50px] py-0 relative rounded-[113px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[200px]" data-name="Mic icon">
      <Group />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(94,179,224,0.7)] h-[28px] rounded-[30px] shrink-0 w-[7px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame19 />
    </div>
  );
}

function AudioVisualizer() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full" data-name="Audio visualizer">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return <BackgroundImage>{`Send Message to {FleetID}`}</BackgroundImage>;
}

function Frame16() {
  return <BackgroundImage>{`How far till the weigh  station`}</BackgroundImage>;
}

function QuickActions() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0 w-full" data-name="Quick Actions">
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quick actions
      </p>
      <BackgroundImageAndText text="Whats My ETA" />
      <Frame15 />
      <Frame16 />
      <BackgroundImageAndText text="Certify logs" />
      <BackgroundImageAndText text="How far till next Weigh Station" />
    </div>
  );
}

function Layout() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Layout">
      <MicIcon />
      <p className="font-['Roboto:Light_Italic',sans-serif] font-light italic leading-[normal] min-w-full relative shrink-0 text-[16px] text-center text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What Can I Help you With ...
      </p>
      <AudioVisualizer />
      <QuickActions />
    </div>
  );
}

function SafeSpave() {
  return (
    <div className="absolute content-stretch flex h-[844px] items-start justify-center left-0 px-[24px] py-[32px] top-0 w-[389px]" data-name="Safe spave">
      <Layout />
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="overflow-clip relative rounded-[60px] size-full" data-name="Overlay">
      <IPhone />
      <SiriAnimation />
      <Stars />
      <SafeSpave />
    </div>
  );
}