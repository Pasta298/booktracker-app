export default function PlRightBar() {
  const percent = 90;

  const bio = `Andy Weir is an American novelist known for science fiction, particularly The Martian
    which was based on his self-published web novel. Before becoming a full-time author, he
    was a software engineer who worked for companies like AOL and Blizzard. Born in 1972, he
    is a self-described "lifelong space nerd" with interests in physics, orbital mechanics, and spaceflight history.`;

  const annotation = `Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. 
    Now, he's sure he'll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, 
    Mark finds himself stranded and completely alone with no way to even signal Earth that he's alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive. 
    Chances are, though, he won't have time to starve to death. The damaged machinery, unforgiving environment, or plain-old “human error” are much more likely to kill him first. 
    But Mark isn't ready to give up yet. Drawing on his ingenuity, his engineering skills — and a relentless, 
    dogged refusal to quit — he steadfastly confronts one seemingly insurmountable obstacle after the next. 
    Will his resourcefulness be enough to overcome the impossible odds against him?`;

  return (
    <div className="m-1 p-3 w-[75%] h-full bg-gray-200 rounded-[20px]">
      <div className="flex flex-row h-[50%]">
        <div className="bg-[#c7c8c9] h-full w-[25%] rounded-[12px]" />
        <div className="flex flex-col ml-4 w-[72%] gap-1">
          <h1 className="text-3xl font-bold">Martian</h1>
          <h1 className="text-xl ">Andy Weir</h1>
          <div className="mt-3 mb-3 h-px w-full shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-[#d9d9d9]" />
          <span className="text-lg h-full line-clamp-10 text-justify wrap-break-word">
            {bio}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-[50%] mt-2 gap-1.5">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold">Progress</h1>
          <div className="bg-[#d2c000] w-30 h-9 rounded-[10px] text-center text-white font-semibold text-[22px]">
            Reading
          </div>
        </div>
        <div className="w-full h-3.5 bg-[#d9d9d9] rounded-full">
          <div
            style={{ width: `${percent}%` }}
            className="h-3.5 bg-[#888888] rounded-full"
          />
        </div>
        <h2 className="text-lg">{percent}% completed</h2>
        <h1 className="text-2xl font-bold">About Book</h1>
        <span className="text-justify line-clamp-9 wrap-break-word">
          {annotation}
        </span>
      </div>
    </div>
  );
}
