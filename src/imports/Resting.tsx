import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative rounded-[40px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

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
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#b8e6f9] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Change `}</p>
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

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <Wrapper additionalClassNames="bg-[#0e2e4b]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e9f1f8] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cancel
      </p>
    </Wrapper>
  );
}

function PillButtonRoboto() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Pill Button Roboto 16">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <Wrapper additionalClassNames="bg-[#2474bb]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Send
      </p>
    </Wrapper>
  );
}

function PillButtonRoboto1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Pill Button Roboto 16">
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <PillButtonRoboto />
      <PillButtonRoboto1 />
    </div>
  );
}

export default function Resting() {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[16px] size-full" data-name="Resting">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <Frame5 />
      <Frame4 />
    </div>
  );
}