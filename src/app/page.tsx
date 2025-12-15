"use client";

import Icon from "@/components/common/Icon";
import { useTeamStore } from "@/store/teams";
import MemberItem from "./_components/MemberItem";
import { Button } from "@/components/ui/button";
import { randomTeams } from "@/lib/random-teams";
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  const { totalTeam, totalTeamMember, data, time } = useTeamStore();

  // const data = [
  //   [
  //     "Lê Tín <span class='ml-1 dot-red inline-flex'>+</span>",
  //     "Truyền Ford <span class='ml-1 dot-red inline-flex'>+</span>",
  //     "Lâm Đạt",
  //     "Trịnh Thành ",
  //   ],
  //   [
  //     "Tuấn Phú Yên ",
  //     "Lê Đức <span class='ml-1 dot-blue inline-flex'>G</span>",
  //     "Lê Ku <span class='ml-1 dot-red inline-flex'>+</span>",
  //     "Thầy Huấn <span class='ml-1 dot-red inline-flex'>+</span><span class='dot-blue inline-flex'>G</span>",
  //   ],
  //   [
  //     "A Thái",
  //     "Hiếu ",
  //     "Bảo Ford <span class='ml-1 dot-blue inline-flex'>G</span>",
  //     "Đàn <span class='ml-1 dot-blue inline-flex'>G</span>",
  //   ],
  //   [
  //     "Tuấn Nguyễn <span class='ml-1 dot-blue inline-flex'>G</span>",
  //     "Thành Neymar",
  //     "Thầy Trình",
  //     "A Khôi <span class='ml-1 dot-blue inline-flex'>G</span>",
  //   ],
  //   [
  //     "Quyền <span class='ml-1 dot-red inline-flex'>+</span>",
  //     "Jackie Dương <span class='ml-1 dot-red inline-flex'>+</span>",
  //     "Phú ",
  //     "Tho <span class='ml-1 dot-red inline-flex'>+</span>",
  //   ],
  //   [
  //     "Đỉnh",
  //     "A Dũng",
  //     "A Quang <span class='ml-1 dot-red inline-flex'>+</span> ",
  //     "A Thuận",
  //   ],
  //   ["Tâm Vũ", "Duy", "Ngọc Anh", "Chung VCB"],
  //   ["A Tân", "Bùi Thiện", "Luis", "A Hải "],
  //   [
  //     "A Chung <span class='ml-1 dot-blue inline-flex'>G</span>",
  //     "A Hoàng <span class='ml-1 dot-blue inline-flex'>G</span>",
  //     "Sang",
  //     "A Lành",
  //   ],
  // ];

  const createTeams = () => {
    randomTeams(data);
  };

  return (
    <div className="pt-[64px] pb-[65px] md:py-0">
      <h1
        className="flex  md:justify-center text-lg font-semibold pt-4"
        id="title"
      >
        Danh sách gốc
      </h1>
      <div className="flex-1 z-10 pb-4 md:pt-4 text-left">
        <div
          className={`z-10 pt-4  mt-2 grid text-center md:w-full grid-cols-2 md:grid-cols-4 md:text-left gap-x-4 gap-y-8`}
        >
          {Array.from(Array(totalTeam).keys()).map((team) => (
            <div key={team}>
              <div
                data-team={team + 1}
                className="relative group rounded-lg px-4 py-2  
                data-[team='1']:bg-red-200 
                data-[team='3']:bg-blue-200 
                data-[team='2']:bg-yellow-200 
                data-[team='4']:bg-green-200 
                data-[team='5']:bg-violet-200 
                data-[team='6']:bg-pink-200 
                data-[team='7']:bg-indigo-200 
                data-[team='8']:bg-sky-200 
                text-left"
              >
                <span>
                  <span className="teams mr-2">Đội</span> {team + 1}
                </span>
                <span
                  className="absolute text text-shadow-default text-[20px] 
                group-data-[team='1']:text-red-500 
                group-data-[team='3']:text-blue-500  
                group-data-[team='2']:text-yellow-500 
                group-data-[team='4']:text-green-500 
                group-data-[team='5']:text-violet-500 
                group-data-[team='6']:text-pink-500
                group-data-[team='7']:text-indigo-500 
                group-data-[team='8']:text-sky-500
                md:text-[70px] bottom-0 md:-bottom-2 
                right-4 drop-shadow-3xl"
                >
                  <Icon className="h-[50px] w-[50px]" name="ShirtOutline" />
                </span>
              </div>
              <div>
                {Array.from(Array(totalTeamMember).keys()).map((member) => (
                  <MemberItem
                    key={member}
                    index={`${member + 1}`}
                    id={`group-${team + 1}-name-${member + 1}`}
                    name={data[member][team]}
                    isPlus={false}
                  />
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
      <div className="fixed -mx-2 md:mx-0 bg-white p-2 md:p-0 bottom-0 w-full md:bg-transparent md:static">
        <Button className="w-full" onClick={() => createTeams()}>
          Tạo Ngẫu Nhiên
        </Button>
      </div>
    </div>
    // <div className="flex">
    //   {/* <div>
    //     <div className="rounded-lg z-[1] overflow-hidden shadow-lg border-gray-50 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //       <Image
    //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //         src="/images/albums/AZ5Q7385.jpg"
    //         alt="Next.js Logo"
    //         width={1200}
    //         height={900}
    //         priority
    //       />
    //     </div>
    //   </div>

    //   <div className="flex-1 z-10 py-4 text-left mt-4 md:mt-2">
    //     <div className="flex">
    //       <h2 className="md:text-lg flex-1">
    //         Kết quả bình chọn tham gia trận đấu ngày <b>10/12/2023</b> - Sân C1
    //       </h2>
    //       <Link className="text-blue-600 hidden md:block" href="/vote">
    //         Chi tiết bình chọn
    //       </Link>
    //     </div>
    //     <div className="z-10 py-4  mt-2 grid text-center md:w-full md:grid-cols-3 md:text-left space-y-6 md:space-y-0 md:space-x-4">
    //       <div className="relative rounded-lg px-4 py-2 md:p-4 bg-blue-100 text-left">
    //         Tham gia{" "}
    //         <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-blue-500 -bottom-2 right-4 drop-shadow-3xl">
    //           23
    //         </span>
    //       </div>
    //       <div className="relative rounded-lg px-4 py-2 md:p-4  bg-red-100 text-left">
    //         Xin vắng{" "}
    //         <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-red-500 -bottom-2 right-4 drop-shadow-3xl">
    //           13
    //         </span>
    //       </div>
    //       <div className="relative rounded-lg px-4 py-2 md:p-4 bg-orange-100 text-left">
    //         Chưa bình chọn{" "}
    //         <span className="absolute text text-shadow-default text-[50px] md:text-[70px] text-orange-500 -bottom-2 right-4 drop-shadow-3xl">
    //           10
    //         </span>
    //       </div>
    //       <Link
    //         className="rounded-lg md:hidden px-4 py-2 bg-blue-500 text-white"
    //         href="/vote"
    //       >
    //         Chi tiết bình chọn
    //       </Link>
    //     </div>
    //   </div> */}

    // </div>
  );
}
