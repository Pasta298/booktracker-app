import PlLeftBar from "./pl_left_bar";
import PlRightBar from "./pl_right_bar";

export default function MyBooks() {
  const percent = 23;

  return (
    <div className="flex flex-row justify-left p-2 gap-4 w-full h-full overflow-hidden">
      <PlLeftBar percent={percent} />
      <PlRightBar percent={percent} />
    </div>
  );
}
