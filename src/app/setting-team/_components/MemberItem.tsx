import { MemberItemData } from "./type";

interface MemberItemProps extends MemberItemData {}

export default function MemberItem(props: Readonly<MemberItemProps>) {
  const { id, name, isPlus } = props;
  return (
    <div className="flex rounded-sm bg-white mt-2 py-2 px-2 md:px-4">
        <div className="w-[22px]">{id}</div>
      <div className="flex-1">{name}</div>
      <div>{isPlus ? "+" : ""}</div>
    </div>
  );
}
