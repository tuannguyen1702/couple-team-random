import SafeHTMLRender from "@/components/common/SafeHtmlRender/SafeHtmlRender";
import { MemberItemData } from "./type";

interface MemberItemProps extends MemberItemData {}

export default function MemberItem(props: Readonly<MemberItemProps>) {
  const { index, id, name} = props;
  return (
    <div className="flex rounded-sm bg-white text-left mt-2 py-2 px-2 md:px-4">
        <div className="w-[22px]">{index}</div>
      <SafeHTMLRender id={id} isStyleContent htmlContent={name} className="flex items-center" />
      {/* <div>{isPlus ? "+" : ""}</div> */}
    </div>
  );
}
