import { IntrouductionPageGridData } from "@/config/data";
import FirstSingleGrid from "./FirstSingleGrid";

function FirstGrid() {
  const data = IntrouductionPageGridData;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
      <FirstSingleGrid isBigGrid={true} data={data[0]} />
      <FirstSingleGrid isBigGrid={false} data={data[1]} />
      <FirstSingleGrid isBigGrid={false} data={data[2]} />
      <FirstSingleGrid isBigGrid={true} data={data[3]} />
    </div>
  );
}

export default FirstGrid;
