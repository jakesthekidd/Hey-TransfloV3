import svgPaths from "./svg-lgbyosq5ek";
import clsx from "clsx";
import imgIcons from "figma:asset/b2e9599f2bf804aba8464e0ea83deb38e180df7c.png";
import imgSun from "figma:asset/74db5b0f4d74767e6bbca8062473779b43703e5f.png";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[733.251px] relative shrink-0 w-[315.377px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315.377 733.251">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage5>
      <g id="Frame 3">{children}</g>
    </BackgroundImage5>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage5>
      <g id="Frame 2">{children}</g>
    </BackgroundImage5>
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
type BackgroundImage2Props = {
  text: string;
  text1: string;
};

function BackgroundImage2({ text, text1 }: BackgroundImage2Props) {
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

function Frame16() {
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
      <Frame16 />
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

function Frame17() {
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
      <Frame17 />
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

function Frame21() {
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
      <Frame21 />
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

function Frame22() {
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
      <Frame22 />
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

function Frame24() {
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
      <Frame24 />
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

function Frame26() {
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
      <Frame26 />
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

function Frame27() {
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
      <Frame27 />
      <p className="font-['Font_Awesome_5_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee] text-[18px] text-nowrap"></p>
    </DashboardListItemBackgroundImage>
  );
}

function Frame18() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Group />
      <TransfloLogoLogo />
    </div>
  );
}

function Frame30() {
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
      <Frame29 />
      <Frame30 />
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
      <Frame18 />
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
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame1() {
  return (
    <BackgroundImage4>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage4>
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
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.pafda040} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame7() {
  return (
    <BackgroundImage4>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1c8ea00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage4>
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
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame9() {
  return (
    <BackgroundImage4>
      <path clipRule="evenodd" d={svgPaths.p36934400} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage4>
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
    <BackgroundImage3>
      <path clipRule="evenodd" d={svgPaths.p335b4f00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p1e113680} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage3>
  );
}

function Frame12() {
  return (
    <BackgroundImage4>
      <path clipRule="evenodd" d={svgPaths.paf7dc00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 35" />
      <path clipRule="evenodd" d={svgPaths.p188d2a00} fill="var(--fill-0, #72CDF4)" fillRule="evenodd" id="Ornament 36" />
    </BackgroundImage4>
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

function Frame15() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-[10px] relative rounded-[45px] shrink-0 size-[30px]">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Times</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="basis-0 font-['Roboto:Light_Italic',sans-serif] font-light grow italic leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        How much longer do I have in Drive?
      </p>
      <Frame15 />
    </div>
  );
}

function TimeRemaining() {
  return (
    <div className="[grid-area:1_/_1] ml-[10px] mt-[10px] relative size-[153px]" data-name="Time remaining">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 153">
        <g id="Time remaining">
          <path d={svgPaths.p9b75d80} fill="var(--fill-0, #06121D)" id="Ellipse 1156" />
          <path d={svgPaths.p34adad80} fill="var(--fill-0, #D0021B)" id="Ellipse 1157" />
        </g>
      </svg>
    </div>
  );
}

function Info() {
  return (
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
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[175px]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175 175">
          <circle cx="87.5" cy="87.5" fill="var(--fill-0, #0C243A)" id="Background" r="87.5" />
        </svg>
      </div>
      <TimeRemaining />
      <Info />
    </div>
  );
}

function TimeTillRest() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Time till rest">
      <Group3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rest In
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        45 Min
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame28 />
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>{`You have 40 minutes left until you have to rest and you have two hours and 25 minutes until your day is up. `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame19 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#0a233a] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#164670] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <BackgroundImage2 text="Rest In" text1="0:45" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <BackgroundImage2 text="Driving Left" text1="2:25" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <BackgroundImage2 text="Workday Left" text1="6:40" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <BackgroundImage2 text="Cycle Left" text1="68:41" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Hos() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col gap-[24px] items-center p-[16px] relative rounded-[16px] shrink-0 w-[341px]" data-name="HOS">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <TimeTillRest />
      <Frame23 />
      <div className="bg-[#164670] h-[4px] rounded-[29px] shrink-0 w-[318px]" />
      <Frame35 />
    </div>
  );
}

function Layout() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-center min-h-px min-w-px pb-[40px] pt-0 px-0 relative shrink-0" data-name="layout">
      <Frame25 />
      <Hos />
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

export default function HosPage() {
  return (
    <div className="overflow-clip relative rounded-[60px] size-full" data-name="HOS page">
      <Dachboard />
      <IPhone />
      <SideAnamationGlow />
      <Stars />
      <Frame14 />
    </div>
  );
}