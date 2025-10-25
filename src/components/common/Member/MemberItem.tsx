import { Label } from "@/components/ui/label";
import Image from "../Image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MemberData } from "@/type/member";
interface MemberItemProps {
  data: MemberData,
  type: 'join' | 'unJoin' | 'notYetVoted';
  onClickJoin?: () => void;
  onClickUnJoin?: () => void;
}

export default function MemberItem(props: Readonly<MemberItemProps>) {
  const {data, type, onClickJoin, onClickUnJoin} = props;
  const { id, name, isPlus, avatar } = data;

  return (
    <div className="relative gap-2 mt-2 py-2 px-2 md:px-4 rounded-t-sm  group hover:z-10 hover:cursor-pointer hover:bg-blue-100">
      <div className="flex items-center gap-x-2 ">
        <div className="w-[30px]">
          <Image
            className="w-30 h-30 rounded-full"
            src={avatar ?? ""}
            alt={id ?? ""}
          />
        </div>
        <div className="flex-1">{name}</div>
        <div>{isPlus ? "+" : ""}</div>
      </div>
      <RadioGroup className="absolute mt-[1px] gap-6 rounded-b-sm w-full text-end right-0 px-3 top-0 translate-y-[100%] h-full bg-gradient-to-l from-blue-100 to-blue-50 items-center hidden group-hover:flex">
        <div className="flex-1"></div>
        {type !==  "join" && <div className="flex items-center space-x-2">
          <RadioGroupItem
            onClick={() => onClickJoin?.()}
            value={`${name}_tham_gia`}
            id={`${name}_tham_gia`}
          />
          <Label htmlFor={`${name}_tham_gia`}>Tham gia</Label>
        </div>}
        { type !==  "unJoin" && <div className="flex items-center space-x-2">
          <RadioGroupItem
            onClick={() => onClickUnJoin?.()}
            value={`${name}_vang`}
            id={`${name}_vang`}
          />
          <Label htmlFor={`${name}_vang`}>Vắng</Label>
        </div>}
      </RadioGroup>
    </div>
  );
}
