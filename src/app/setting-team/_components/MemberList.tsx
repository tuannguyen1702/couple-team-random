import MemberItem from "./MemberItem";
import { MemberItemData } from "./type";

interface MemberListProps {
    data: MemberItemData[];
  }
  
  export default function MemberList(props: Readonly<MemberListProps>) {
    const { data } = props;
    return (
      <div>
       {data?.map((item, idx) => <MemberItem key={idx} {...item} id={`${idx + 1}`} />)}
      </div>
    );
  }