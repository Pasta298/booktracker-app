export default function StatsBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f0f0f0] w-full h-[50%] text-center rounded-[10px] p-3 flex flex-col overflow-hidden">
      <h1 className="font-bold text-[24px]">{title}</h1>
      <p className="text-[22px]">{children}</p>
    </div>
  );
}
