export default function CompletitionBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-[80%] gap-1.5">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold">Progress</h1>
        <div className="bg-[#d2c000] w-24 h-6 rounded-[10px] text-center text-white font-semibold text-[16px]">
          Reading
        </div>
      </div>
      <div className="w-full h-3 bg-[#d9d9d9] rounded-full">
        <div
          style={{ width: `${children}%` }}
          className="h-3 bg-[#888888] rounded-full"
        />
      </div>
      <h2 className="text-sm">{children}% completed</h2>
    </div>
  );
}
