"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/common/Icon";
import { useTeamStore } from "@/store/teams";
import MemberItem from "./_components/MemberItem";

export default function SettingTeam() {
  const { totalTeam, totalTeamMember } = useTeamStore();

  return (
    <div>
      <div className="flex-1 z-10 py-4 text-left">
        <div className={`z-10 pt-4  mt-2 grid text-center md:w-full grid-cols-2 md:grid-cols-4 md:text-left gap-x-4 gap-y-8`}>
          {Array.from(Array(totalTeam).keys()).map((team) => (
            <div key={team}>
              <div
                data-team={team + 1}
                className="relative group rounded-lg px-4 py-2  data-[team='1']:bg-red-200 data-[team='2']:bg-blue-200 data-[team='3']:bg-yellow-200 data-[team='4']:bg-green-200 text-left"
              >
                <span>Đội {team + 1}</span>
                <span className="absolute text text-shadow-default text-[20px] group-data-[team='1']:text-red-500 group-data-[team='2']:text-blue-500  group-data-[team='3']:text-yellow-500 group-data-[team='4']:text-green-500 md:text-[70px] bottom-0 md:-bottom-2 right-4 drop-shadow-3xl">
                  <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
                </span>
              </div>
              <div>
                {Array.from(Array(totalTeamMember).keys()).map((member) => (
                  <MemberItem key={member} id={`${member + 1}`} name="" isPlus={false} />
                ))}
              </div>
            </div>
          ))}

          {/* <div>
            <div className="relative rounded-lg px-4 py-2 bg-yellow-200 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-yellow-500 bottom-0 md:-bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div>
          <div>
            <div className="relative rounded-lg px-4 py-2 bg-green-200 text-left">
              <span>Đội 1</span>
              <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-green-500 bottom-0 md:-bottom-2 right-4 drop-shadow-3xl">
                <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
              </span>
            </div>
            <MemberList data={data} />
          </div> */}
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full">
            Đổi Bình Chọn
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] w-[500px] rounded-lg">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">sssss</div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
