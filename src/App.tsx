import { useState, useEffect, useRef } from 'react';
import { LayoutDashboard, Bell, Mic, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from './imports/svg-gxtw6ivj10';
import imgSun from "figma:asset/74db5b0f4d74767e6bbca8062473779b43703e5f.png";
import { imgBlankTopDialLarge, imgOval4, imgGroup18, img1, img2, img3, img4, img5, imgWifi, imgSignal, imgBattery } from "./imports/svg-dnxlc";
import { FleetProfileMenu } from './components/FleetProfileMenu';
import { VoiceAgent } from './components/VoiceAgent';

interface DashboadIconsProps {
  className?: string;
  property1?: 'Drivewyze' | 'Loads' | 'Scan' | 'Settlements' | 'Video' | 'ebol' | 'scheduler';
}

function DashboadIcons({ className, property1 = "Scan" }: DashboadIconsProps) {
  if (property1 === 'Loads') {
    return (<div className={className} data-name="Property 1=Loads"><div className="absolute aspect-[37.5258/30.0149] left-0 right-0 top-1/2 translate-y-[-50%]" data-name=""><svg className="block max-w-none size-full" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.95553 22.0312L0.0258405 11.1914C-0.091347 10.6641 0.201622 10.1367 0.670372 10.0195L5.24068 8.78906L6.70553 14.2383L10.2797 13.2422L8.8735 7.85156L13.3852 6.62109C13.854 6.50391 14.3813 6.79688 14.4985 7.26562L17.4282 18.1641C17.5454 18.6328 17.2524 19.1602 16.7837 19.2773L4.06881 22.6758C3.60006 22.8516 3.07272 22.5586 2.95553 22.0312ZM22.5258 0H37.5258V23.4375C37.5258 27.0703 34.5376 30 30.9633 30C27.3891 30 24.518 27.2461 24.4008 23.7305L1.3149 30C1.08053 30.0586 0.846153 29.9414 0.728966 29.707L0.0258405 26.9531C-0.0327532 26.7188 0.0844343 26.4844 0.318809 26.3672L20.6508 20.8594V1.875C20.6508 0.878906 21.4712 0 22.5258 0ZM30.9633 26.25C32.4868 26.25 33.7758 25.0195 33.7758 23.4375C33.7758 21.9141 32.4868 20.625 30.9633 20.625C29.3813 20.625 28.1508 21.9141 28.1508 23.4375C28.1508 25.0195 29.3813 26.25 30.9633 26.25Z" fill="#2374BB"/></svg></div></div>);
  }
  if (property1 === 'Drivewyze') {
    return (<div className={className} data-name="Property 1=Drivewyze"><div className="h-[31.559px] relative shrink-0 w-[38px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32"><g id="Group 60"><path clipRule="evenodd" d={svgPaths.p2d279800} fill="#2575BB" fillRule="evenodd" id="Fill 1"/><path clipRule="evenodd" d={svgPaths.pf379b80} fill="#2575BB" fillRule="evenodd" id="Fill 3"/><path clipRule="evenodd" d={svgPaths.p2e146680} fill="#2575BB" fillRule="evenodd" id="Fill 5"/><path clipRule="evenodd" d={svgPaths.p18460f20} fill="#2575BB" fillRule="evenodd" id="Fill 7"/><path clipRule="evenodd" d={svgPaths.p28e40400} fill="#2575BB" fillRule="evenodd" id="Fill 9"/><path clipRule="evenodd" d={svgPaths.p127a1a00} fill="#2575BB" fillRule="evenodd" id="Fill 11"/><path clipRule="evenodd" d={svgPaths.p35c3e840} fill="#2575BB" fillRule="evenodd" id="Fill 13"/><path clipRule="evenodd" d={svgPaths.p4923a00} fill="#2575BB" fillRule="evenodd" id="Fill 15"/><path clipRule="evenodd" d={svgPaths.p18f88d00} fill="#2575BB" fillRule="evenodd" id="Fill 17"/><path clipRule="evenodd" d={svgPaths.p383badc0} fill="#2575BB" fillRule="evenodd" id="Fill 19"/><path clipRule="evenodd" d={svgPaths.p324d3640} fill="#2575BB" fillRule="evenodd" id="Fill 21"/><path clipRule="evenodd" d={svgPaths.p21d940} fill="#2575BB" fillRule="evenodd" id="Fill 23"/><path clipRule="evenodd" d={svgPaths.p261455c0} fill="#2575BB" fillRule="evenodd" id="Fill 25"/><path clipRule="evenodd" d={svgPaths.p21906280} fill="#2575BB" fillRule="evenodd" id="Fill 27"/><path clipRule="evenodd" d={svgPaths.p3fa08b80} fill="#2575BB" fillRule="evenodd" id="Fill 29"/><path clipRule="evenodd" d={svgPaths.p20243e80} fill="#2575BB" fillRule="evenodd" id="Fill 31"/><path clipRule="evenodd" d={svgPaths.p2ac2e6e0} fill="#2575BB" fillRule="evenodd" id="Fill 33"/><path clipRule="evenodd" d={svgPaths.p1807bb00} fill="#2575BB" fillRule="evenodd" id="Fill 35"/><path clipRule="evenodd" d={svgPaths.p36616c80} fill="#2575BB" fillRule="evenodd" id="Fill 37"/><path clipRule="evenodd" d={svgPaths.p2fa68d00} fill="#2575BB" fillRule="evenodd" id="Fill 39"/><path clipRule="evenodd" d={svgPaths.p258cc400} fill="#2575BB" fillRule="evenodd" id="Fill 41"/><g id="Group 45"><mask height="4" id="mask0_3_724" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="2" x="15" y="28"><path clipRule="evenodd" d={svgPaths.p2e901f00} fill="white" fillRule="evenodd" id="Clip 44"/></mask><g mask="url(#mask0_3_724)"><path clipRule="evenodd" d={svgPaths.p36a79c00} fill="#2575BB" fillRule="evenodd" id="Fill 43"/></g></g><path clipRule="evenodd" d={svgPaths.p2bd1d800} fill="#2575BB" fillRule="evenodd" id="Fill 46"/><path clipRule="evenodd" d={svgPaths.p1a57680} fill="#2575BB" fillRule="evenodd" id="Fill 48"/><path clipRule="evenodd" d={svgPaths.p392aac00} fill="#2575BB" fillRule="evenodd" id="Fill 50"/><path clipRule="evenodd" d={svgPaths.pa91b000} fill="#2575BB" fillRule="evenodd" id="Fill 52"/><path clipRule="evenodd" d={svgPaths.p1e75b800} fill="#2575BB" fillRule="evenodd" id="Fill 54"/><path clipRule="evenodd" d={svgPaths.p274bac0} fill="#2575BB" fillRule="evenodd" id="Fill 56"/><path clipRule="evenodd" d={svgPaths.p31023000} fill="#2575BB" fillRule="evenodd" id="Fill 58"/></g></svg></div></div>);
  }
  if (property1 === 'ebol') {
    return (<div className={className} data-name="Property 1=ebol"><div className="h-[38.006px] relative shrink-0 w-[38px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38"><g id="Group 289906"><g id="Group 5"><mask height="39" id="mask0_3_814" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="38" x="0" y="0"><path clipRule="evenodd" d="M0 0H38V38.0057H0V0Z" fill="white" fillRule="evenodd" id="Clip 4"/></mask><g mask="url(#mask0_3_814)"><path clipRule="evenodd" d={svgPaths.p3d551980} fill="#2575BB" fillRule="evenodd" id="Fill 3"/></g></g><path clipRule="evenodd" d={svgPaths.p172f9600} fill="#2575BB" fillRule="evenodd" id="Fill 6"/><path clipRule="evenodd" d={svgPaths.p360d9f40} fill="#2575BB" fillRule="evenodd" id="Fill 10"/></g></svg></div></div>);
  }
  if (property1 === 'scheduler') {
    return (<div className={className} data-name="Property 1=scheduler"><div className="h-[38px] relative shrink-0 w-[37.995px]" data-name="Group 26 Copy"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38"><g id="Group 26 Copy"><path clipRule="evenodd" d={svgPaths.p1e425700} fill="#2575BB" fillRule="evenodd" id="Fill 1"/><path clipRule="evenodd" d={svgPaths.p1380b740} fill="#2575BB" fillRule="evenodd" id="Fill 3"/><path clipRule="evenodd" d={svgPaths.p39aa9cf0} fill="#2575BB" fillRule="evenodd" id="Fill 5"/><mask height="38" id="mask0_3_834" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="38" x="0" y="0"><path clipRule="evenodd" d="M0 38H37.9945V0H0V38Z" fill="white" fillRule="evenodd" id="Clip 8"/></mask><g mask="url(#mask0_3_834)"><path clipRule="evenodd" d={svgPaths.p15fe4f70} fill="#2575BB" fillRule="evenodd" id="Fill 7"/><path clipRule="evenodd" d={svgPaths.p178b0e80} fill="#2575BB" fillRule="evenodd" id="Fill 9"/><path clipRule="evenodd" d={svgPaths.p37768480} fill="#2575BB" fillRule="evenodd" id="Fill 10"/><path clipRule="evenodd" d={svgPaths.p1915a600} fill="#2575BB" fillRule="evenodd" id="Fill 11"/><path clipRule="evenodd" d={svgPaths.p23a59e80} fill="#2575BB" fillRule="evenodd" id="Fill 12"/><path clipRule="evenodd" d={svgPaths.p1a45e100} fill="#2575BB" fillRule="evenodd" id="Fill 13"/><path clipRule="evenodd" d={svgPaths.p36c37800} fill="#2575BB" fillRule="evenodd" id="Fill 14"/><path clipRule="evenodd" d={svgPaths.p3b4db200} fill="#2575BB" fillRule="evenodd" id="Fill 15"/><path clipRule="evenodd" d={svgPaths.p2ddcbe00} fill="#2575BB" fillRule="evenodd" id="Fill 16"/><path clipRule="evenodd" d={svgPaths.p2db0e400} fill="#2575BB" fillRule="evenodd" id="Fill 17"/><path clipRule="evenodd" d={svgPaths.p317eca80} fill="#2575BB" fillRule="evenodd" id="Fill 18"/><path clipRule="evenodd" d={svgPaths.p1180b080} fill="#2575BB" fillRule="evenodd" id="Fill 19"/><path clipRule="evenodd" d={svgPaths.p14dbde00} fill="#2575BB" fillRule="evenodd" id="Fill 20"/><path clipRule="evenodd" d={svgPaths.pca0300} fill="#2575BB" fillRule="evenodd" id="Fill 21"/><path clipRule="evenodd" d={svgPaths.p23bfc70} fill="#2575BB" fillRule="evenodd" id="Fill 22"/><path clipRule="evenodd" d={svgPaths.p19e07100} fill="#2575BB" fillRule="evenodd" id="Fill 23"/><path clipRule="evenodd" d={svgPaths.p30129f80} fill="#2575BB" fillRule="evenodd" id="Fill 24"/><path clipRule="evenodd" d={svgPaths.p1fbcb6e0} fill="#2575BB" fillRule="evenodd" id="Fill 25"/></g></g></svg></div></div>);
  }
  if (property1 === 'Video') {
    return (<div className={className} data-name="Property 1=Video's"><div className="h-[25px] relative shrink-0 w-[38px]" data-name=""><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 25"><path d={svgPaths.p1b66d100} fill="#2374BB" id="ï"/></svg></div></div>);
  }
  if (property1 === 'Settlements') {
    return (<div className={className} data-name="Property 1=Settlements"><div className="h-[24px] relative shrink-0 w-[38px]" data-name="Vector"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24"><g id="Vector"><path clipRule="evenodd" d={svgPaths.p794c200} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p23761200} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p314bcb00} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p3dedfd00} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p2fefb580} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p3cccbf00} fill="#2374BB" fillRule="evenodd"/><path clipRule="evenodd" d={svgPaths.p12105800} fill="#2374BB" fillRule="evenodd"/></g></svg></div></div>);
  }
  return (<div className={className} data-name="Property 1=Scan"><div className="absolute contents inset-0" data-name="User-Login/Registration-Dumb-Down"><div className="absolute contents inset-0" data-name="Zeczar-Fleet-Dashboard"><div className="absolute bottom-[-1.17%] left-0 right-0 top-0"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 44"><g id="Group-4"><path clipRule="evenodd" d={svgPaths.p805cf80} fill="#2374BB" fillRule="evenodd" id="Fill-12"/><path d={svgPaths.p18386a80} id="Rectangle-3" stroke="#2374BB" strokeDasharray="2 2" strokeLinecap="round"/><path clipRule="evenodd" d={svgPaths.p3098b300} fill="#2374BB" fillRule="evenodd" id="Fill-14"/><path clipRule="evenodd" d={svgPaths.p34253e00} fill="#2374BB" fillRule="evenodd" id="Fill-13"/></g></svg></div></div></div></div>);
}

function TabSection({ className, title, icon }: { className?: string; title?: string; icon?: DashboadIconsProps['property1'] }) {
  return <div className={className} data-name="Tab Section"><div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"/><div className="flex flex-row items-center size-full"><div className="box-border content-stretch flex items-center justify-between p-[16px] relative size-full"><div className="content-stretch flex gap-[24px] items-center relative shrink-0"><DashboadIcons className="h-[42.575px] relative shrink-0 w-[38px]" property1={icon || "Scan"}/><p className="font-['Roboto',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">{title || 'Scan'}</p></div><p className="font-['Font_Awesome_5_Free',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eeeeee] text-[18px] text-nowrap whitespace-pre"></p></div></div></div>;
}

function TopDileSmall({ className, feature = "Blank", style }: { className?: string; feature?: 'chat' | 'Blank' | 'Weather' | 'Scan Documents' | 'Scan History'; style?: React.CSSProperties }) {
  const element = (<div className="absolute inset-[-6.4%_-9.6%_-12.8%_-9.6%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149"><g filter="url(#filter0_d_3_825)" id="Ellipse 2"><circle cx="74.5" cy="70.5" fill="white" r="62.5"/></g><defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="149" id="filter0_d_3_825" width="149" x="0" y="0"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="6"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_825"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3_825" mode="normal" result="shape"/></filter></defs></svg></div>);
  const element1 = (<div className="absolute inset-[3.2%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 117"><circle cx="58.5" cy="58.5" fill="white" id="Ellipse 5" r="58" stroke="#D7D7D7"/></svg></div>);
  
  if (feature === 'Weather') {
    return (<div className={className} style={style} data-name="Feature=Weather">{element}{element1}<p className="absolute font-['Roboto',_sans-serif] font-light inset-[76.8%_26.4%_12%_27.2%] leading-[normal] text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Chicago, IL</p><p className="absolute font-['Roboto',_sans-serif] font-light inset-[40%_24%_17.6%_24.8%] leading-[normal] text-[#666666] text-[45px] text-center text-nowrap whitespace-pre">34˚</p><div className="absolute inset-[8.8%_30.4%_53.67%_30.4%]" data-name="Sun"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSun}/></div></div></div>);
  }
  if (feature === 'Scan History') {
    return (<div className={className} style={style} data-name="Feature=Scan History">{element}{element1}<div className="absolute contents inset-[16.8%_20.8%_16%_21.6%]"><div className="absolute inset-[16.8%_29.6%_43.2%_30.4%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50"><g id="Group 22"><g id="Group 3"><mask height="50" id="mask0_3_767" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="50" x="0" y="0"><path clipRule="evenodd" d="M0 0H50V50H0V0Z" fill="white" fillRule="evenodd" id="Clip 2"/></mask><g mask="url(#mask0_3_767)"><path clipRule="evenodd" d={svgPaths.p32dd9900} fill="#2475BB" fillRule="evenodd" id="Fill 1"/></g></g><path clipRule="evenodd" d={svgPaths.p36c7f080} fill="#2475BB" fillRule="evenodd" id="Fill 4"/><path clipRule="evenodd" d={svgPaths.p2fb07700} fill="#2475BB" fillRule="evenodd" id="Fill 6"/><path clipRule="evenodd" d={svgPaths.p1a7ceb00} fill="#2475BB" fillRule="evenodd" id="Fill 8"/><path clipRule="evenodd" d={svgPaths.p3c474f00} fill="#2475BB" fillRule="evenodd" id="Fill 10"/><path clipRule="evenodd" d={svgPaths.p18d62000} fill="#2475BB" fillRule="evenodd" id="Fill 12"/><path clipRule="evenodd" d={svgPaths.p1c81af00} fill="#2475BB" fillRule="evenodd" id="Fill 14"/><path clipRule="evenodd" d={svgPaths.p3388db80} fill="#2475BB" fillRule="evenodd" id="Fill 16"/><path clipRule="evenodd" d={svgPaths.p1a3220} fill="#2475BB" fillRule="evenodd" id="Fill 18"/><path clipRule="evenodd" d={svgPaths.p391bda80} fill="#2475BB" fillRule="evenodd" id="Fill 20"/></g></svg></div><p className="absolute font-['Roboto',_sans-serif] font-medium inset-[62.4%_20.8%_16%_21.6%] leading-[15px] text-[#2374bb] text-[14px] text-center tracking-[-0.3376px]">Scan History</p></div></div>);
  }
  return (<div className={className} style={style} data-name="Feature=Blank">{element}{element1}</div>);
}

function HOSDial({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = `${timeRemaining.hours}:${timeRemaining.minutes.toString().padStart(2, '0')}`;

  const blankTopDialLarge = (<div className="absolute inset-[-5.23%_-7.84%_-10.46%_-7.84%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 177"><g filter="url(#filter0_d_3_765)" id="Blank Top dial/ Large"><circle cx="88.5" cy="84.5" fill="white" r="76.5"/></g><defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="177" id="filter0_d_3_765" width="177" x="0" y="0"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="6"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_765"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3_765" mode="normal" result="shape"/></filter></defs></svg></div>);

  return (
    <div className={className} style={style} data-name="FEATURE=HOS">
      {blankTopDialLarge}
      <div className="absolute inset-[7.84%_8.9%_23.77%_9.55%]" data-name="Oval 2">
        <div className="absolute inset-[-3.82%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 113">
            <path d={svgPaths.p1d55f680} id="Oval 2" stroke="#7ED321" strokeLinecap="round" strokeWidth="8"/>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto',_sans-serif] font-black inset-[17.53%_1.96%_40.64%_2.61%] leading-[normal] text-[55px] text-[orange] text-center">ON</p>
      <p className="absolute font-['Roboto',_sans-serif] font-light inset-[61.13%_1.96%_26.45%_2.61%] leading-[normal] text-[#666666] text-[16px] text-center">REST IN</p>
      <p className="absolute font-['Roboto',_sans-serif] font-light inset-[71.59%_2.61%_6.84%_1.96%] leading-[normal] text-[#666666] text-[28px] text-center">{timeString}</p>
    </div>
  );
}

function OsStatusBar({ className }: { className?: string }) {
  const notch = (<div className="absolute contents left-1/2 top-[-2px] translate-x-[-50%]" data-name="Notch"><div className="absolute h-[32px] left-1/2 top-[-2px] translate-x-[-50%] w-[164px]" data-name="Notch"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 32"><g id="Notch"><path d={svgPaths.p3b40e580} fill="black"/><path d={svgPaths.p3f2f4600} fill="black"/><path d={svgPaths.p27a68100} fill="black"/></g></svg></div></div>);

  return (
    <div className={className} data-name="Property 1=IOS White">
      <div className="backdrop-blur-[10px] backdrop-filter content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[390px]" data-name="TopNavigation">
        <div className="h-[47px] overflow-clip relative shrink-0 w-full" data-name="StatusBar / iPhone 13">
          {notch}
          <div className="absolute contents left-[calc(50%-141px)] top-[14px] translate-x-[-50%]" data-name="Left Side">
            <div className="absolute h-[21px] left-[calc(50%-141px)] rounded-[24px] top-[14px] translate-x-[-50%] w-[54px]" data-name="_StatusBar-time">
              <p className="absolute font-['SF_Pro_Text',_sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-white text-center top-px tracking-[-0.408px] translate-x-[-50%] w-[54px]">9:41</p>
            </div>
          </div>
          <div className="absolute contents left-[calc(50%+129.701px)] top-[19px] translate-x-[-50%]" data-name="Right Side">
            <div className="absolute contents left-[calc(50%+154.701px)] top-[19px] translate-x-[-50%]" data-name="Battery">
              <div className="absolute h-[13px] left-[calc(50%+153.5px)] top-[19px] translate-x-[-50%] w-[25px]" data-name="Outline">
                <img alt="" className="block max-w-none size-full" src={img1}/>
              </div>
              <div className="absolute h-[4.22px] left-[calc(50%+167.701px)] top-[24px] translate-x-[-50%] w-[1.401px]" data-name="Battery End">
                <img alt="" className="block max-w-none size-full" src={img2}/>
              </div>
              <div className="absolute h-[9px] left-[calc(50%+153.5px)] top-[21px] translate-x-[-50%] w-[21px]" data-name="Fill">
                <img alt="" className="block max-w-none size-full" src={img3}/>
              </div>
            </div>
            <div className="absolute h-[12px] left-[calc(50%+125.5px)] top-[20px] translate-x-[-50%] w-[17px]" data-name="Wifi">
              <img alt="" className="block max-w-none size-full" src={img4}/>
            </div>
            <div className="absolute h-[12px] left-[calc(50%+100px)] top-[20px] translate-x-[-50%] w-[18px]" data-name="Icon / Mobile Signal">
              <img alt="" className="block max-w-none size-full" src={img5}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isFleetMenuOpen, setIsFleetMenuOpen] = useState(false);
  const [isVoiceAgentOpen, setIsVoiceAgentOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [tapPosition, setTapPosition] = useState({ x: 195, y: 600 });
  const [dialScale, setDialScale] = useState(1);
  const [dialContainerWidth, setDialContainerWidth] = useState(375);
  const micButtonRef = useRef<HTMLDivElement>(null);

  // Update dial scale and container width on window resize
  useEffect(() => {
    const updateScale = () => {
      // Container grows from 375px to 450px max
      const containerWidth = Math.min(Math.max(window.innerWidth, 375), 450);
      setDialContainerWidth(containerWidth);
      
      // Scale factor based on container width relative to base (375px)
      const scale = containerWidth / 375;
      setDialScale(scale);
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleMicClick = (e: React.MouseEvent) => {
    // Get the tap position relative to the viewport
    if (micButtonRef.current) {
      const rect = micButtonRef.current.getBoundingClientRect();
      setTapPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setIsVoiceAgentOpen(true);
  };

  const handleVoiceAgentClose = (completedAction?: string) => {
    setIsVoiceAgentOpen(false);
    
    // Set message based on completed action
    if (completedAction) {
      let message = '';
      switch(completedAction) {
        case 'sent':
          message = 'Message sent to Dispatch.';
          break;
        case 'loadSummary':
          message = 'Load summary retrieved.';
          break;
        case 'eta':
          message = 'ETA information retrieved.';
          break;
        case 'hos':
          message = 'HOS status retrieved.';
          break;
        default:
          message = 'Action completed.';
      }
      setToastMessage(message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="bg-white content-stretch flex gap-[10px] items-start justify-center relative size-full">
      {/* Fleet Profile Menu */}
      <FleetProfileMenu 
        isOpen={isFleetMenuOpen} 
        onClose={() => setIsFleetMenuOpen(false)}
      />

      {/* Voice Agent */}
      <VoiceAgent
        isOpen={isVoiceAgentOpen}
        onClose={handleVoiceAgentClose}
        tapPosition={tapPosition}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[300] max-w-[350px]"
          >
            <div
              className="px-5 py-3 rounded-2xl flex items-center gap-3"
              style={{
                background: 'rgba(15, 22, 33, 0.95)',
                backdropFilter: 'blur(20px) saturate(120%)',
                border: '1px solid rgba(94, 179, 224, 0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(94, 179, 224, 0.1)',
              }}
            >
              {/* Success Icon */}
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(126, 211, 33, 0.15)',
                  border: '1.5px solid rgba(126, 211, 33, 0.4)',
                }}
              >
                <svg
                  className="w-4 h-4 text-[#7ED321]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Message */}
              <p 
                className="text-white/95"
                style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  fontFamily: 'Inter, SF Pro Display, -apple-system, system-ui, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="basis-0 content-stretch flex flex-col grow h-full items-center min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow isolate items-center min-h-px min-w-px pb-[70px] pt-0 px-0 relative shrink-0 w-full">
            
            {/* Header Section with Dials - z-[2] */}
            <div className="box-border content-stretch flex flex-col items-start mb-[-70px] pb-[61px] pt-0 px-0 relative shrink-0 w-full z-[2]">
              {/* Header Background */}
              <div className="bg-[#2474bb] box-border content-stretch flex flex-col gap-[16px] h-[168px] items-center mb-[-61px] relative shrink-0 w-full" data-name="Header Background">
                
                {/* Spacer for removed status bar */}
                <div className="h-[47px] shrink-0 w-full" />
                
                {/* Header with Logo and Icons */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
                      <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
                        {/* Hamburger Menu / X Button */}
                        <button 
                          onClick={() => setIsFleetMenuOpen(!isFleetMenuOpen)}
                          className="h-[16px] relative shrink-0 w-[23px] cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
                          aria-label={isFleetMenuOpen ? "Close Fleet Menu" : "Open Fleet Menu"}
                        >
                          <div className="absolute bottom-0 left-0 right-0 top-[-12.5%]">
                            {isFleetMenuOpen ? (
                              // X icon when menu is open
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
                                <g id="X Icon">
                                  <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="3" x2="20" y1="2" y2="16"/>
                                  <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="20" x2="3" y1="2" y2="16"/>
                                </g>
                              </svg>
                            ) : (
                              // Hamburger icon when menu is closed
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
                                <g id="Group 1">
                                  <line id="Line 1" stroke="white" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="17" y2="17"/>
                                  <line id="Line 2" stroke="white" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="9" y2="9"/>
                                  <line id="Line 3" stroke="white" strokeLinecap="round" strokeWidth="2" x1="1" x2="22" y1="1" y2="1"/>
                                </g>
                              </svg>
                            )}
                          </div>
                        </button>
                        
                        {/* Transflo Logo */}
                        <div className="h-[26px] overflow-clip relative shrink-0 w-[167px]" data-name="Transflo Logo logo 1">
                          <div className="absolute bottom-0 contents left-0 right-[0.43%] top-0" data-name="Symbols">
                            <div className="absolute bottom-0 contents left-0 right-[0.43%] top-0" data-name="Header-Bar-Copy">
                              <div className="absolute bottom-0 left-0 right-[0.43%] top-0" data-name="Company-logo">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167 26">
                                  <g id="Company-logo">
                                    <path clipRule="evenodd" d={svgPaths.p135cd880} fill="white" fillRule="evenodd" id="Fill-2"/>
                                    <path clipRule="evenodd" d={svgPaths.p13ece300} fill="white" fillRule="evenodd" id="Fill-4"/>
                                    <path clipRule="evenodd" d={svgPaths.p2b8efa00} fill="white" fillRule="evenodd" id="Fill-1"/>
                                    <path clipRule="evenodd" d={svgPaths.p3646ae00} fill="white" fillRule="evenodd" id="Fill-6"/>
                                    <path clipRule="evenodd" d={svgPaths.p298d4c80} fill="white" fillRule="evenodd" id="Fill-8"/>
                                    <path clipRule="evenodd" d={svgPaths.p2f353c00} fill="white" fillRule="evenodd" id="Fill-10"/>
                                    <path clipRule="evenodd" d={svgPaths.p2eca0c00} fill="white" fillRule="evenodd" id="Fill-12"/>
                                    <path clipRule="evenodd" d={svgPaths.p2600aa80} fill="white" fillRule="evenodd" id="Fill-14"/>
                                    <path clipRule="evenodd" d={svgPaths.p63b4000} fill="white" fillRule="evenodd" id="Fill-16"/>
                                    <path clipRule="evenodd" d={svgPaths.p2f675600} fill="white" fillRule="evenodd" id="Fill-18"/>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Profile and Menu Icons */}
                      <div className="h-[32px] relative shrink-0 w-[93.001px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 32">
                          <g id="Frame 1">
                            <g id="Group 6">
                              <path clipRule="evenodd" d={svgPaths.p36722500} fill="white" fillRule="evenodd" id="Fill 1"/>
                              <g id="Group 5">
                                <mask height="32" id="mask0_3_797" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
                                  <path clipRule="evenodd" d="M0 0H31.9999V32H0V0Z" fill="white" fillRule="evenodd" id="Clip 4"/>
                                </mask>
                                <g mask="url(#mask0_3_797)">
                                  <path clipRule="evenodd" d={svgPaths.p17cc5980} fill="white" fillRule="evenodd" id="Fill 3"/>
                                </g>
                              </g>
                            </g>
                            <line id="Line 4" stroke="white" strokeWidth="2" x1="45.0006" x2="45" y1="4.50003" y2="27.5"/>
                            <path d={svgPaths.p39526200} fill="white" id="ï"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Three Circular Dials */}
              <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center mb-[-61px] relative shrink-0 w-full">
                <div className="relative shrink-0 w-full flex justify-center" style={{ height: `${153 * dialScale}px` }}>
                  <div 
                    className="relative shrink-0" 
                    style={{ 
                      width: `${dialContainerWidth}px`,
                      height: `${153 * dialScale}px`
                    }}
                  >
                    {/* Weather dial - anchored to left edge */}
                    <TopDileSmall 
                      feature="Weather" 
                      className="absolute size-[125px]"
                      style={{ 
                        transform: `scale(${dialScale})`, 
                        transformOrigin: 'left center',
                        left: 0,
                        top: `${14 * dialScale}px`
                      }}
                    />
                    {/* Scan History dial - anchored to right edge */}
                    <TopDileSmall 
                      feature="Scan History" 
                      className="absolute size-[125px]"
                      style={{ 
                        transform: `scale(${dialScale})`, 
                        transformOrigin: 'right center',
                        right: 0,
                        top: `${14 * dialScale}px`
                      }}
                    />
                    {/* HOS dial - centered */}
                    <HOSDial 
                      className="absolute size-[153px]"
                      style={{ 
                        transform: `scale(${dialScale})`, 
                        transformOrigin: 'center center',
                        left: '50%',
                        marginLeft: `${-153/2}px`,
                        top: 0
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content Area - z-[1] */}
            <div className="box-border content-stretch flex flex-col items-start mb-[-70px] pb-0 pt-[73px] px-0 relative flex-1 min-h-0 overflow-y-auto w-full z-[1]">
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Scan" icon="Scan"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Loads" icon="Loads"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Drivewyze" icon="Drivewyze"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="eBOL" icon="ebol"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Scheduler" icon="scheduler"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Video" icon="Video"/>
              <TabSection className="bg-white h-[74px] relative shrink-0 w-full" title="Settlements" icon="Settlements"/>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="h-[117px] relative shrink-0 w-full" data-name="Bottom Navigation">
            {/* Black Footer */}
            <div className="absolute bg-black bottom-0 left-0 right-0 top-[52.14%]"/>
            <p className="absolute font-['Roboto',_sans-serif] font-normal inset-[56.41%_76.15%_27.35%_2.31%] leading-[normal] text-[16px] text-nowrap text-white whitespace-pre">TESTFLEET</p>
            <p className="absolute font-['Roboto',_sans-serif] font-normal inset-[56.41%_2.56%_27.35%_64.36%] leading-[normal] text-[16px] text-nowrap text-right text-white whitespace-pre">email@email.com</p>
            
            {/* Nav Bar Background */}
            <div className="absolute bg-[#2474bb] bottom-[47.86%] left-0 right-0 top-0" data-name="Nav Bar Background"/>
            
            {/* Navigation Icons */}
            <div className="absolute bottom-[47.86%] left-[60.26%] right-[20%] top-0" data-name="Bottom navigation bar tile / not Selected">
              <div className="absolute bg-[#2474bb] inset-0"/>
              <div className="absolute flex flex-col inset-[27.87%_29.87%_26.23%_29.87%] items-center justify-center text-white">
                <MessageCircle size={26} />
              </div>
            </div>
            
            <div className="absolute bottom-[47.86%] left-[80.26%] right-0 top-0" data-name="Bottom navigation bar tile / not Selected">
              <div className="absolute bg-[#2474bb] inset-0"/>
              <div className="absolute flex flex-col inset-[27.87%_29.87%_26.23%_29.87%] items-center justify-center text-white">
                <HelpCircle size={26} />
              </div>
            </div>
            
            <div className="absolute bottom-[47.86%] left-[20%] right-[60.26%] top-0" data-name="Bottom navigation bar tile / not Selected">
              <div className="absolute bg-[#2474bb] inset-0"/>
              <div className="absolute flex flex-col inset-[27.87%_29.87%_26.23%_29.87%] items-center justify-center text-white">
                <Bell size={26} />
              </div>
            </div>
            
            {/* Active Microphone Icon */}
            <div 
              ref={micButtonRef}
              className="absolute bottom-[47.86%] left-[40%] right-[40%] top-0 cursor-pointer transition-transform active:scale-95" 
              data-name="Bottom navigation bar tile / Selected"
              onClick={handleMicClick}
            >
              <div className="absolute bg-[#2474bb] inset-0"/>
              <div className="absolute bg-[rgba(184,230,249,0.25)] inset-[6.56%_6.41%_8.2%_5.13%] rounded-[8px]">
                <div aria-hidden="true" className="absolute border border-[#95d9f7] border-solid inset-0 pointer-events-none rounded-[8px]"/>
              </div>
              <div className="absolute flex flex-col inset-[27.87%_29.87%_26.23%_29.87%] items-center justify-center text-white">
                <Mic size={26} />
              </div>
            </div>
            
            {/* Dashboard Icon with Active Indicator */}
            <div className="absolute bottom-[47.86%] left-0 right-[80.26%] top-0" data-name="Bottom navigation bar tile / Selected">
              <div className="absolute bg-[#2474bb] inset-0"/>
              <div className="absolute bottom-0 left-0 right-0 top-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-3px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 3">
                    <line id="Line 5" stroke="white" strokeWidth="3" x2="77" y1="1.5" y2="1.5"/>
                  </svg>
                </div>
              </div>
              <div className="absolute flex flex-col inset-[26.23%_29.87%_27.87%_29.87%] items-center justify-center text-white">
                <LayoutDashboard size={26} />
              </div>
            </div>
          </div>
          {/* Safe-area extension so the black footer reaches the physical screen bottom on iOS */}
          <div className="bg-black w-full shrink-0" style={{ height: 'env(safe-area-inset-bottom)' }} />
        </div>
      </div>
    </div>
  );
}