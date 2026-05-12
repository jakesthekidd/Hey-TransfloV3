interface ETAWidgetProps {
  title?: string;
  time?: string;
  response?: string;
}

function Frame({ title = "Your ETA:" }: { title?: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
    </div>
  );
}

function Frame2({ time = "7:30PM" }: { time?: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        {time}
      </p>
    </div>
  );
}

function Summery({ title, time }: { title?: string; time?: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Summery">
      <Frame title={title} />
      <Frame2 time={time} />
    </div>
  );
}

function Frame1({ response = "00:45 Minutes you should arrive by 7:30PM" }: { response?: string }) {
  return (
    <div className="bg-[#0c2841] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#e9f1f8] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            {response}
          </p>
        </div>
      </div>
    </div>
  );
}

function Layout({ title, time, response }: { title?: string; time?: string; response?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Layout">
      <Summery title={title} time={time} />
      <Frame1 response={response} />
    </div>
  );
}

export default function ETAWidget({ title = "Your ETA:", time = "7:30PM", response = "00:45 Minutes you should arrive by 7:30PM" }: ETAWidgetProps) {
  return (
    <div className="bg-[#0e2e4b] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full" data-name="answer widget">
      <div aria-hidden="true" className="absolute border border-[#2474bb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_10px_0px_rgba(114,205,244,0.3)]" />
      <Layout title={title} time={time} response={response} />
    </div>
  );
}
