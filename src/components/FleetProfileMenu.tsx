import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-omhetcr21d';
import imgFleetSwapIcon from "figma:asset/0cf8c75fcd4d2376b39db15247736be074d2cbf7.png";

interface Fleet {
  id: string;
  name: string;
  fleetId: string;
}

interface FleetProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function FleetCard({ fleet, isSelected, onClick }: { fleet: Fleet; isSelected: boolean; onClick: () => void }) {
  if (isSelected) {
    return (
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[171px]"
      >
        <div aria-hidden="true" className="absolute border-[#6ae0be] border-[0px_0px_0px_8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Roboto',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[#2474bb] text-[16px] tracking-[-0.3376px] w-full">
          {fleet.name}
        </p>
        <p className="font-['Roboto',_sans-serif] font-light leading-[15px] relative shrink-0 text-[#2474bb] text-[14px] tracking-[-0.3376px] w-full">
          {fleet.fleetId}
        </p>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-[8px] items-start leading-[15px] p-[16px] relative rounded-[8px] shrink-0 text-white tracking-[-0.3376px] w-[171px]"
    >
      <p className="font-['Roboto',_sans-serif] font-bold relative shrink-0 text-[16px] w-full">
        {fleet.name}
      </p>
      <p className="font-['Roboto',_sans-serif] font-light relative shrink-0 text-[14px] w-full">
        {fleet.fleetId}
      </p>
    </motion.button>
  );
}

export function FleetProfileMenu({ isOpen, onClose }: FleetProfileMenuProps) {
  const [selectedFleetIndex, setSelectedFleetIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fleets: Fleet[] = [
    { id: '1', name: 'FLEET NAME', fleetId: '{Fleet ID}' },
    { id: '2', name: 'PX DEMO...', fleetId: 'PXDEMO1' },
    { id: '3', name: 'FLEET 3', fleetId: 'FLEET 3.' },
  ];

  const handleFleetSelect = (index: number) => {
    setSelectedFleetIndex(index);
    
    // Smooth scroll to selected fleet
    if (scrollContainerRef.current) {
      const scrollLeft = index * (171 + 19); // card width + gap
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay - starts below header, covers dials completely */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[100px] left-0 right-0 bottom-0 bg-black/30 z-[100]"
            onClick={onClose}
          />

          {/* Fleet Profile Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className="fixed top-[100px] left-0 right-0 z-[101] flex justify-center"
          >
            <div className="content-stretch flex flex-col isolate items-start relative w-full">
              {/* Main Menu Content - Frame16 */}
              <div className="bg-[#2474bb] relative shrink-0 w-full z-[2]">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] pt-[21px] pb-0 relative w-full">
                    
                    {/* Fleet Profile Title - Frame15 */}
                    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid border-white inset-0 pointer-events-none" />
                      <p className="font-['Roboto',_sans-serif] font-light leading-[15px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3376px] whitespace-pre">
                        Fleet Profile 
                      </p>
                    </div>

                    {/* Fleet Cards and Pagination - Frame18 */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      {/* Fleet Cards - Frame14 */}
                      <div 
                        ref={scrollContainerRef}
                        className="content-stretch flex gap-[19px] items-center overflow-x-auto relative shrink-0 w-full scrollbar-hide"
                        style={{ 
                          scrollbarWidth: 'none',
                          msOverflowStyle: 'none',
                          WebkitOverflowScrolling: 'touch'
                        }}
                      >
                        {fleets.map((fleet, index) => (
                          <FleetCard
                            key={fleet.id}
                            fleet={fleet}
                            isSelected={index === selectedFleetIndex}
                            onClick={() => handleFleetSelect(index)}
                          />
                        ))}
                      </div>

                      {/* Pagination Dots - Frame17 */}
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                        {fleets.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleFleetSelect(index)}
                            whileTap={{ scale: 0.9 }}
                            className="relative shrink-0 size-[8px]"
                          >
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                              <circle 
                                cx="4" 
                                cy="4" 
                                fill="white" 
                                fillOpacity={index === selectedFleetIndex ? 1 : 0.1}
                                r="4" 
                              />
                            </svg>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Menu Items - Frame19 */}
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      {/* Fleet Management */}
                      <motion.div 
                        whileTap={{ scale: 0.98 }}
                        className="relative shrink-0 w-full cursor-pointer"
                        onClick={() => console.log('Fleet Management clicked')}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative w-full">
                            <div className="h-[40px] relative shrink-0 w-[42px]">
                              <div className="absolute h-[40px] left-0 top-0 w-[42px]">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFleetSwapIcon} />
                                </div>
                              </div>
                            </div>
                            <p className="font-['Roboto',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3376px] whitespace-pre">
                              Fleet Management 
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Add Fleet */}
                      <motion.div 
                        whileTap={{ scale: 0.98 }}
                        className="relative shrink-0 w-full cursor-pointer"
                        onClick={() => console.log('Add Fleet clicked')}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative text-center text-white w-full">
                            <div className="flex flex-col h-[40px] justify-center relative shrink-0 text-[32px] w-[42px] items-center">
                              <svg className="size-[32px]" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8V24M8 16H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <p className="font-['Roboto',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.3376px] whitespace-pre">
                              Add Fleet 
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Document Queue */}
                      <motion.div 
                        whileTap={{ scale: 0.98 }}
                        className="relative shrink-0 w-full cursor-pointer"
                        onClick={() => console.log('Document Queue clicked')}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center px-px py-[4px] relative text-center text-white w-full">
                            <div className="flex flex-col h-[40px] justify-center relative shrink-0 text-[20px] w-[42px] items-center">
                              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L14 6H10V2Z" fill="white"/>
                                <path d="M9 2H4C3.44772 2 3 2.44772 3 3V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V7H11C10.4477 7 10 6.55228 10 6V2H9Z" stroke="white" strokeWidth="1.5" fill="white"/>
                                <path d="M6 12L10 12M6 14L14 14" stroke="#2474BB" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <p className="font-['Roboto',_sans-serif] font-bold leading-[15px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.3376px] whitespace-pre">
                              Document Queue 
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Pull Handle - Frame20 */}
                    <div className="content-stretch flex flex-col gap-[10px] h-0 items-center justify-center relative shrink-0 w-full">
                      <motion.button
                        onClick={onClose}
                        whileTap={{ scale: 0.95 }}
                        className="h-px relative shrink-0 w-[87px]"
                      >
                        <div className="absolute inset-[-200%_-2.3%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 5">
                            <path 
                              d={svgPaths.p38480300} 
                              opacity="0.258355" 
                              stroke="white" 
                              strokeLinecap="round" 
                              strokeWidth="4" 
                            />
                          </svg>
                        </div>
                      </motion.button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Curved Bottom Shape */}
              <div className="h-[27.001px] relative shrink-0 w-full z-[1]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 27">
                  <path 
                    d={svgPaths.p133b2d00} 
                    fill="#2474BB" 
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}