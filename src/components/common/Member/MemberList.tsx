import { MemberData } from "@/type/member";
import MemberItem from "./MemberItem";
import { useMemberStore } from "@/store/members";

interface MemberListProps {
  data: MemberData[],
  type: 'join' | 'unJoin' | 'notYetVoted';
}

export default function MemberList(props: MemberListProps) {
  const { data, type } = props;
  const { setMemberJoinMatch, memberJoinMatch, setMemberNotYetVoted, memberNotYetVoted, setMemberUnJoinMatch, memberUnJoinMatch} = useMemberStore();

  const handleJoinMatch = (data: MemberData, index: number) => {
    if(type === "notYetVoted") {
      memberNotYetVoted.splice(index, 1);
      setMemberNotYetVoted(memberNotYetVoted);
    }

    if(type === "unJoin") {
      memberUnJoinMatch.splice(index, 1);
      setMemberUnJoinMatch(memberUnJoinMatch);
    }
    
    setMemberJoinMatch([...memberJoinMatch, data]);
  }


  const handleUnJoinMatch = (data: MemberData, index: number) => {
    if(type === "notYetVoted") {
      memberNotYetVoted.splice(index, 1);
      setMemberNotYetVoted(memberNotYetVoted);
    }

    if(type === "join") {
      memberJoinMatch.splice(index, 1);
      setMemberJoinMatch(memberJoinMatch);
    }

    setMemberUnJoinMatch([...memberUnJoinMatch, data]);
  }
  
  return (
    <>
      {data?.map((item, idx) => (
        <MemberItem type={type} onClickJoin={() => handleJoinMatch(item, idx)} onClickUnJoin={() => handleUnJoinMatch(item, idx)} key={idx} data={{...item, id: `${idx}`}} />
      ))}
    </>
  );
}
