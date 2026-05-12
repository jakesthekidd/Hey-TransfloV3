import svgPaths from "./svg-02dva9yh8i";
import clsx from "clsx";
import imgIcons from "figma:asset/b2e9599f2bf804aba8464e0ea83deb38e180df7c.png";
import imgSun from "figma:asset/74db5b0f4d74767e6bbca8062473779b43703e5f.png";
import imgMapImage from "figma:asset/1560447eff4fed5936502cd859a3732a37487c66.png";

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12.606px] relative shrink-0 w-[8.824px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.8244 12.6063">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[733.251px] relative shrink-0 w-[315.377px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315.377 733.251">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage4>
      <g id="Frame 3">{children}</g>
    </BackgroundImage4>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage4>
      <g id="Frame 2">{children}</g>
    </BackgroundImage4>
  );
}

function IconsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_0.19px_0.18px_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8143 39.82">
        <g id="Icons">{children}</g>
      </svg>
    </div>
  );
}

function DashboardListItemBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white mb-[-1px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[45px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[-0.13px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BottomNavigationBarTileNotSlectedBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BottomNavigationBarTileNotSlectedBackgroundImageAndText({ text, additionalClassNames = "" }: BottomNavigationBarTileNotSlectedBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute bg-[#2474bb] inset-0" />
      <div className="absolute flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] inset-[27.87%_29.87%_26.23%_29.87%] justify-center leading-[0] not-italic text-[26px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute inset-[3.2%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 117">
        <circle cx="58.5" cy="58.5" fill="var(--fill-0, white)" id="Ellipse 5" r="58" stroke="var(--stroke-0, #D7D7D7)" />
      </svg>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-[-6.4%_-9.6%_-12.8%_-9.6%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
        <g filter="url(#filter0_d_2031_2330)" id="Ellipse 2">
          <circle cx="74.5" cy="70.5" fill="var(--fill-0, white)" r="62.5" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="149" id="filter0_d_2031_2330" width="149" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2031_2330" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2031_2330" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[36.973px] ml-0 mt-0 relative w-[33px]" data-name="Group-4">
      <div className="absolute inset-[0_0_-1.35%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 37.473">
          <g id="Group-4">
            <path clipRule="evenodd" d={svgPaths.p21e249c0} fill="var(--fill-0, #2374BB)" fillRule="evenodd" id="Fill-12" />
            <path d={svgPaths.p3fd75100} id="Rectangle-3" stroke="var(--stroke-0, #2374BB)" strokeDasharray="2 2" strokeLinecap="round" />
            <path clipRule="evenodd" d={svgPaths.p2bc56500} fill="var(--fill-0, #2374BB)" fillRule="evenodd" id="Fill-14" />
            <path clipRule="evenodd" d={svgPaths.p295cfb00} fill="var(--fill-0, #2374BB)" fillRule="evenodd" id="Fill-13" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ZeczarFleetDashboard() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Zeczar-Fleet-Dashboard">
      <Group2 />
    </div>
  );
}

function UserLoginRegistrationDumbDown() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="User-Login/Registration-Dumb-Down">
      <ZeczarFleetDashboard />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute content-stretch flex inset-[0_0.19px_0.18px_0] items-start overflow-clip" data-name="Icons">
      <UserLoginRegistrationDumbDown />
    </div>
  );
}

function AppIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>{`Scan `}</p>
    </div>
  );
}

function DashboardListItem() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame15 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons1() {
  return (
    <IconsBackgroundImage>
      <path clipRule="evenodd" d={svgPaths.p1fe10880} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 1" />
      <path clipRule="evenodd" d={svgPaths.p11faf340} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 3" />
      <path clipRule="evenodd" d={svgPaths.p2d21ce00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 5" />
      <mask height="40" id="mask0_2031_2344" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="40" x="0" y="0">
        <path clipRule="evenodd" d="M0 39.82H39.8143V0H0V39.82Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 8" />
      </mask>
      <g mask="url(#mask0_2031_2344)">
        <path clipRule="evenodd" d={svgPaths.p8d31690} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 7" />
        <path clipRule="evenodd" d={svgPaths.p3780000} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 9" />
        <path clipRule="evenodd" d={svgPaths.p35cfe00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 10" />
        <path clipRule="evenodd" d={svgPaths.p17dedc00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 11" />
        <path clipRule="evenodd" d={svgPaths.p2397c500} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 12" />
        <path clipRule="evenodd" d={svgPaths.p201a1ff0} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 13" />
        <path clipRule="evenodd" d={svgPaths.p3332fa72} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 14" />
        <path clipRule="evenodd" d={svgPaths.pdb13280} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 15" />
        <path clipRule="evenodd" d={svgPaths.p369dde00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 16" />
        <path clipRule="evenodd" d={svgPaths.p1c7b1000} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 17" />
        <path clipRule="evenodd" d={svgPaths.pd1016f0} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 18" />
        <path clipRule="evenodd" d={svgPaths.p2f6abe00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 19" />
        <path clipRule="evenodd" d={svgPaths.p20833600} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 20" />
        <path clipRule="evenodd" d={svgPaths.p18f4f700} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 21" />
        <path clipRule="evenodd" d={svgPaths.p3c803c8} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 22" />
        <path clipRule="evenodd" d={svgPaths.p76dab80} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 23" />
        <path clipRule="evenodd" d={svgPaths.p19109a00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 24" />
        <path clipRule="evenodd" d={svgPaths.p1f7f5240} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 25" />
      </g>
    </IconsBackgroundImage>
  );
}

function AppIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon1 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>{`Scheduler `}</p>
    </div>
  );
}

function DashboardListItem1() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame16 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons2() {
  return (
    <IconsBackgroundImage>
      <path clipRule="evenodd" d={svgPaths.p17d89500} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 1" />
      <path clipRule="evenodd" d={svgPaths.p32bdaa00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 3" />
      <path clipRule="evenodd" d={svgPaths.p17442500} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 5" />
      <path clipRule="evenodd" d={svgPaths.pd9be500} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 7" />
      <path clipRule="evenodd" d={svgPaths.pdf76a00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 9" />
      <path clipRule="evenodd" d={svgPaths.p1e8c8900} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 11" />
      <path clipRule="evenodd" d={svgPaths.p365c7b00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 13" />
      <path clipRule="evenodd" d={svgPaths.p2ef4efc0} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 15" />
      <path clipRule="evenodd" d={svgPaths.p1ed03a80} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 17" />
      <path clipRule="evenodd" d={svgPaths.p120089e0} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 19" />
      <path clipRule="evenodd" d={svgPaths.p22ca7400} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 21" />
      <path clipRule="evenodd" d={svgPaths.p1c20eb40} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 23" />
      <path clipRule="evenodd" d={svgPaths.p15aa1c00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 25" />
      <path clipRule="evenodd" d={svgPaths.p22209b00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 27" />
      <path clipRule="evenodd" d={svgPaths.p10488100} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 29" />
      <path clipRule="evenodd" d={svgPaths.p17099900} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 31" />
      <path clipRule="evenodd" d={svgPaths.p34b41700} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 33" />
      <path clipRule="evenodd" d={svgPaths.p2cc38340} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 35" />
      <path clipRule="evenodd" d={svgPaths.p10f69300} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 37" />
      <path clipRule="evenodd" d={svgPaths.p2de6e580} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 39" />
      <path clipRule="evenodd" d={svgPaths.p31188e00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 41" />
      <g id="Group 45">
        <mask height="5" id="mask0_2031_2245" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="2" x="16" y="35">
          <path clipRule="evenodd" d={svgPaths.p1411d800} fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 44" />
        </mask>
        <g mask="url(#mask0_2031_2245)">
          <path clipRule="evenodd" d={svgPaths.p3295400} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 43" />
        </g>
      </g>
      <path clipRule="evenodd" d={svgPaths.p1b379100} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 46" />
      <path clipRule="evenodd" d={svgPaths.p2df4cf00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 48" />
      <path clipRule="evenodd" d={svgPaths.p20c25c40} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 50" />
      <path clipRule="evenodd" d={svgPaths.p1cbba700} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 52" />
      <path clipRule="evenodd" d={svgPaths.p2a495a00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 54" />
      <path clipRule="evenodd" d={svgPaths.pdc76300} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 56" />
      <path clipRule="evenodd" d={svgPaths.p19023980} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 58" />
    </IconsBackgroundImage>
  );
}

function AppIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon2 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>{`Drivewize `}</p>
    </div>
  );
}

function DashboardListItem2() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame19 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons3() {
  return (
    <div className="absolute content-stretch flex inset-[2.41px_3.09px_2.59px_2.91px] items-center justify-center" data-name="Icons">
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2374bb] text-[30px] text-nowrap"></p>
    </div>
  );
}

function AppIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon3 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Video
      </p>
    </div>
  );
}

function DashboardListItem3() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame20 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons4() {
  return (
    <IconsBackgroundImage>
      <g id="Group 5">
        <mask height="40" id="mask0_2031_2316" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="40" x="0" y="0">
          <path clipRule="evenodd" d="M0 0H39.8143V39.82H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Clip 4" />
        </mask>
        <g mask="url(#mask0_2031_2316)">
          <path clipRule="evenodd" d={svgPaths.p974f780} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 3" />
        </g>
      </g>
      <path clipRule="evenodd" d={svgPaths.p956cc40} fill="var(--fill-0, #004E9B)" fillRule="evenodd" id="Fill 6" />
      <path clipRule="evenodd" d={svgPaths.p956cc40} fillRule="evenodd" id="Stroke 8" stroke="var(--stroke-0, white)" strokeWidth="0.169" />
      <path clipRule="evenodd" d={svgPaths.pdcf9c00} fill="var(--fill-0, #2575BB)" fillRule="evenodd" id="Fill 10" />
    </IconsBackgroundImage>
  );
}

function AppIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon4 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        eBOL
      </p>
    </div>
  );
}

function DashboardListItem4() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame21 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons5() {
  return (
    <IconsBackgroundImage>
      <path clipRule="evenodd" d={svgPaths.p1ea24500} fill="var(--fill-0, #2474BB)" fillRule="evenodd" id="Screen Shot 2022-10-20 at 12.34 1 (Traced)" />
    </IconsBackgroundImage>
  );
}

function AppIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon5 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Free Scan
      </p>
    </div>
  );
}

function DashboardListItem5() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame23 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Icons6() {
  return (
    <div className="absolute inset-[0_0.19px_0.18px_0]" data-name="Icons">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcons} />
    </div>
  );
}

function AppIcon6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="App Icon">
      <Icons6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <AppIcon6 />
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>{`CAT Scale `}</p>
    </div>
  );
}

function DashboardListItem6() {
  return (
    <DashboardListItemBackgroundImage>
      <Frame25 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-px pt-0 px-0 right-px top-[271px]">
      <DashboardListItem />
      <DashboardListItem1 />
      <DashboardListItem2 />
      <DashboardListItem3 />
      <DashboardListItem4 />
      <DashboardListItem5 />
      <DashboardListItem6 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[16px] relative shrink-0 w-[23px]">
      <div className="absolute inset-[-12.5%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
          <g id="Group 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="17" y2="17" />
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="9" y2="9" />
            <line id="Line 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="absolute inset-[0_0.43%_0_0]" data-name="Company-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166.274 26">
        <g id="Company-logo">
          <path clipRule="evenodd" d={svgPaths.p135cd880} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-2" />
          <path clipRule="evenodd" d={svgPaths.p13ece300} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-4" />
          <path clipRule="evenodd" d={svgPaths.p2b8efa00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d={svgPaths.p3646ae00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-6" />
          <path clipRule="evenodd" d={svgPaths.p298d4c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-8" />
          <path clipRule="evenodd" d={svgPaths.p2f353c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-10" />
          <path clipRule="evenodd" d={svgPaths.p2eca0c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-12" />
          <path clipRule="evenodd" d={svgPaths.p2600aa80} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-14" />
          <path clipRule="evenodd" d={svgPaths.p63b4000} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-16" />
          <path clipRule="evenodd" d={svgPaths.p2f675600} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill-18" />
        </g>
      </svg>
    </div>
  );
}

function HeaderBarCopy() {
  return (
    <div className="absolute contents inset-[0_0.43%_0_0]" data-name="Header-Bar-Copy">
      <CompanyLogo />
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-[0_0.43%_0_0]" data-name="Symbols">
      <HeaderBarCopy />
    </div>
  );
}

function TransfloLogoLogo() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[167px]" data-name="Transflo Logo logo 1">
      <Symbols />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Group />
      <TransfloLogoLogo />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[42px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <circle cx="21" cy="21" fill="var(--fill-0, white)" id="Ellipse 1" r="21" />
        </svg>
      </div>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[23px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 2">
                <line id="Line 4" stroke="var(--stroke-0, white)" strokeWidth="2" x2="23" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[42px] text-nowrap text-white"></p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#2474bb] content-stretch flex inset-[0_0_37.27%_0] items-center justify-between px-[24px] py-0" data-name="Header">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[20%_28.8%_64%_57.6%] overflow-clip">
      <div className="absolute inset-[10%_0_5%_0]" data-name="Oval 4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #D0021B)" id="Oval 4" r="8.5" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[29.41%] right-[32.49%] text-[14px] text-center text-white top-[calc(50%-7px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
    </div>
  );
}

function TopDileSmall() {
  return (
    <div className="absolute inset-[48.71%_67.95%_5.17%_0]" data-name="Top Dile Small">
      <BackgroundImage />
      <BackgroundImage1 />
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[67.2%_37.6%_20%_33.6%] leading-[normal] text-[#2374bb] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CHAT
      </p>
      <Group1 />
      <p className="absolute font-['Font_Awesome_5_Free:Solid',sans-serif] inset-[24%_37.6%_44%_28.8%] leading-[normal] not-italic text-[#2374bb] text-[36px]"></p>
    </div>
  );
}

function TopDileSmall1() {
  return (
    <div className="absolute inset-[49.08%_0_4.8%_67.95%]" data-name="Top Dile Small">
      <BackgroundImage />
      <BackgroundImage1 />
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[76.8%_26.4%_12%_27.2%] leading-[normal] text-[#666] text-[12px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chicago, IL
      </p>
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[40%_24%_17.6%_24.8%] leading-[normal] text-[#666] text-[45px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        34˚
      </p>
      <div className="absolute inset-[8.8%_30.4%_53.67%_30.4%]" data-name="Sun">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSun} />
        </div>
      </div>
    </div>
  );
}

function TopDile() {
  return (
    <div className="absolute inset-[43.54%_29.74%_0_31.03%]" data-name="TOP DILE">
      <div className="absolute inset-[-5.23%_-7.84%_-10.46%_-7.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 177">
          <g filter="url(#filter0_d_2031_2227)" id="Blank Top dial/ Large">
            <circle cx="88.5" cy="84.5" fill="var(--fill-0, white)" r="76.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="177" id="filter0_d_2031_2227" width="177" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2031_2227" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2031_2227" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[7.84%_8.9%_23.77%_9.55%]" data-name="Oval 2">
        <div className="absolute inset-[-3.82%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.764 112.63">
            <path d={svgPaths.p1d55f680} id="Oval 2" stroke="var(--stroke-0, #7ED321)" strokeLinecap="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Black',sans-serif] font-black inset-[17.53%_1.96%_40.64%_2.61%] leading-[normal] text-[55px] text-[orange] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        ON
      </p>
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[61.13%_1.96%_26.45%_2.61%] leading-[normal] text-[#666] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        REST IN
      </p>
      <p className="absolute font-['Roboto:Light',sans-serif] font-light inset-[71.59%_2.61%_6.84%_1.96%] leading-[normal] text-[#666] text-[28px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        2:45
      </p>
    </div>
  );
}

function HeaderWithCircles() {
  return (
    <div className="absolute inset-[0_0_67.89%_0]" data-name="Header with Circles">
      <Header />
      <TopDileSmall />
      <TopDileSmall1 />
      <TopDile />
    </div>
  );
}

function BottomNavigationBarTileNotSlected() {
  return (
    <div className="absolute inset-[0_40%_47.86%_40%]" data-name="Bottom navigation bar tile / not Slected">
      <div className="absolute bg-[#2474bb] inset-0" />
      <div className="absolute bg-[rgba(184,230,249,0.25)] border border-[#95d9f7] border-solid inset-[6.56%_6.41%_8.2%_5.13%] rounded-[8px]" />
      <div className="absolute flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] inset-[27.87%_29.87%_26.23%_29.87%] justify-center leading-[0] not-italic text-[26px] text-center text-white">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function BottomNavigationBarTileSlected() {
  return (
    <div className="absolute inset-[0_80.26%_47.86%_0]" data-name="Bottom navigation bar tile / Slected">
      <div className="absolute bg-[#2474bb] inset-0" />
      <div className="absolute bottom-0 left-0 right-0 top-full">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 3">
            <line id="Line 5" stroke="var(--stroke-0, white)" strokeWidth="3" x2="77" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Font_Awesome_5_Free:Solid',sans-serif] inset-[26.23%_29.87%_27.87%_29.87%] leading-[normal] not-italic text-[26px] text-right text-white"></p>
    </div>
  );
}

function BottomNavagation() {
  return (
    <div className="absolute bottom-0 h-[117px] left-0 right-0" data-name="Bottom Navagation">
      <div className="absolute bg-black inset-[52.14%_0_0_0]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[56.41%_76.15%_27.35%_2.31%] leading-[normal] text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        TESTFLEET
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[56.41%_2.56%_27.35%_64.36%] leading-[normal] text-[16px] text-nowrap text-right text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        email@email.com
      </p>
      <div className="absolute bg-[#2474bb] inset-[0_0_47.86%_0]" data-name="Nav Bar Background" />
      <BottomNavigationBarTileNotSlectedBackgroundImageAndText text="" additionalClassNames="inset-[0_20%_47.86%_60.26%]" />
      <BottomNavigationBarTileNotSlectedBackgroundImageAndText text="" additionalClassNames="inset-[0_0_47.86%_80.26%]" />
      <BottomNavigationBarTileNotSlectedBackgroundImageAndText text="" additionalClassNames="inset-[0_60.26%_47.86%_20%]" />
      <BottomNavigationBarTileNotSlected />
      <BottomNavigationBarTileSlected />
    </div>
  );
}

function Dachboard() {
  return (
    <div className="absolute bg-white h-[844px] left-0 overflow-clip top-0 w-[390px]" data-name="Dachboard">
      <Frame17 />
      <HeaderWithCircles />
      <BottomNavagation />
    </div>
  );
}

function IPhone() {
  return <div className="absolute backdrop-blur-[1.5px] backdrop-filter h-[844px] left-1/2 rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 translate-x-[-50%] w-[390px]" data-name="iPhone 13 & 14 - 1" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 390 844\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.8999999761581421\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-36.35 199.8 -92.325 -16.797 195 422)\\\'><stop stop-color=\\\'rgba(5,16,26,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(9,30,48,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(14,43,69,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(24,70,112,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function SideAnamationGlow() {
  return (
    <div className="absolute h-[844px] left-[-1px] opacity-50 top-0 w-[393px]" data-name="Side anamation glow">
      <div className="absolute blur-[1px] border-2 border-[#95d9f7] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur S" />
      <div className="absolute blur-[2px] border-[#95d9f7] border-[5px] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur M" />
      <div className="absolute blur-[5px] border-[#95d9f7] border-[7px] border-solid filter h-[852px] left-0 rounded-[60px] top-0 w-[393px]" data-name="Blur L" />
      <div className="absolute blur-[10px] border-[#95d9f7] border-[10px] border-solid filter h-[852px] left-0 mix-blend-hard-light rounded-[60px] top-0 w-[393px]" data-name="Blur XL" />
    </div>
  );
}

function Frame() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame1() {
  return (
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
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
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame7() {
  return (
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1c8ea00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
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

function Frame8() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame9() {
  return (
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <BackgroundImage2>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage2>
  );
}

function Frame12() {
  return (
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p188d2a00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[102.497px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[102.497px] items-start left-[-231px] opacity-[0.07] top-0 w-[1569px]" data-name="stars">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Roboto:Light_Italic',sans-serif] font-light grow italic leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        “Tell me about my load”
      </p>
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
    <BackgroundImage5>
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
    </BackgroundImage5>
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

function Icons7() {
  return (
    <BackgroundImage5>
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
    </BackgroundImage5>
  );
}

function Finish() {
  return (
    <div className="absolute bg-[#eff2f4] content-stretch flex flex-col items-center justify-center left-[94.55px] rounded-[31.516px] size-[20.17px] top-[124.17px]" data-name="Finish">
      <div aria-hidden="true" className="absolute border-[#2474bb] border-[0.63px] border-solid inset-0 pointer-events-none rounded-[31.516px]" />
      <Icons7 />
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
      <g clipPath="url(#clip0_2046_5955)" id="icon" opacity="0.75">
        <path d={svgPaths.p337bac00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_2046_5955">
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
    <BackgroundImage6>
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
    </BackgroundImage6>
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

function Icons8() {
  return (
    <BackgroundImage6>
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
    </BackgroundImage6>
  );
}

function StartAndStopIcons2() {
  return (
    <div className="bg-[#eff2f4] content-stretch flex flex-col items-center justify-center relative rounded-[50px] shrink-0 size-[20px]" data-name="Start and stop Icons">
      <Icons8 />
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

function Frame18() {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Light_Italic',sans-serif] font-light grow italic leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`You're hauling a refrigerated load with three stops. You're currently headed to Walmart Distribution 32 in Los Angeles with an 8:00 a.m appointment. You're on schedule, and this load is marked hazmat.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function LoadDetailDetails() {
  return (
    <div className="bg-[#0e2e4b] relative shrink-0 w-full" data-name="Load detail details">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <LoadTop />
        <PickUpAndDropOff />
        <Frame22 />
      </div>
    </div>
  );
}

function Widgets() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[341px]" data-name="Widgets">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Map />
        <LoadDetailDetails />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_0px_10px_0px_rgba(114,205,244,0.3)]" />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Quick Actions">
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quick actions
      </p>
      <BackgroundImageAndText text="Send My Current Location" />
      <BackgroundImageAndText text="Whats My ETA" />
    </div>
  );
}

function Layout() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="layout">
      <Frame24 />
      <Widgets />
      <QuickActions />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex h-[844px] items-start justify-center left-0 px-[24px] py-[32px] top-0 w-[389px]">
      <Layout />
    </div>
  );
}

export default function MessageWidget() {
  return (
    <div className="overflow-clip relative rounded-[60px] size-full" data-name="Message Widget">
      <Dachboard />
      <IPhone />
      <SideAnamationGlow />
      <Stars />
      <Frame14 />
    </div>
  );
}