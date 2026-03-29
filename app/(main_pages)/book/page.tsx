import CompletitionBar from "./completition_bar";
import ReadInfoComponent from "./ri_component";
import Timer from "./timer";

export default function Book() {
  const percent = 90;

  const annotation = `Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. 
    Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, 
    Mark finds himself stranded and completely alone with no way to even signal Earth that he's alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive. 
    Chances are, though, he won't have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first. 
    But Mark isn't ready to give up yet. Drawing on his ingenuity, his engineering skills — and a relentless, 
    dogged refusal to quit — he steadfastly confronts one seemingly insurmountable obstacle after the next. 
    Will his resourcefulness be enough to overcome the impossible odds against him?`;

  return (
    <div className="flex p-3 w-full h-full">
      <div className="p-3 w-full h-full bg-[#f0f0f0] rounded-[20px]">
        <div className="flex flex-row w-full h-[50%]">
          <div className="bg-[#c7c8c9] h-full w-[20%] rounded-[12px]" />
          <div className="flex flex-col w-[80%] gap-2">
            <div className="flex flex-row ml-4 gap-2 items-center text-center">
              <h1 className="text-3xl font-bold">Martian</h1>
              <div className="w-px h-full shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-[#d9d9d9]" />
              <h1 className="text-xl">Andy Weir</h1>
            </div>
            <span className="ml-4 h-full line-clamp-14 text-justify wrap-break-word">
              {annotation}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full h-[50%] mt-2 gap-2">
          <div className="flex flex-row w-full h-[20%] items-center gap-4">
            <Timer />
            <CompletitionBar>76</CompletitionBar>
          </div>
          <div className="flex flex-row w-full h-[80%] gap-10 mt-10 overflow-x-auto overflow-y-hidden flex-nowrap custom-content-scroll">
            <ReadInfoComponent />
            <ReadInfoComponent />
            <ReadInfoComponent />
            <ReadInfoComponent />
            <ReadInfoComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
