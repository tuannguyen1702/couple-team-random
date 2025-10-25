import { MemberData } from "@/type/member";
import { create } from "zustand";

const data = [
    {
      name: "Tran Quang",
      avatar:
        "https://s120-ava-talk.zadn.vn/1/e/0/5/28/120/6d15fe535c756c9eb0a49802b9a4d11f.jpg",
    },

    {
      name: "Hải",
      avatar:
        "https://s120-ava-talk.zadn.vn/3/6/b/4/6/120/35e7274efe67af82962d7a03f0da380e.jpg",
    },

    {
      name: "Thầy Trình-trí Việt-ielts Master",
      avatar:
        "https://s120-ava-talk.zadn.vn/1/3/b/8/13/120/f3abc0f2fcbd2d558e3260229bec3eac.jpg",
    },

    {
      name: "Vương- Ts Hải Minh",
      avatar:
        "https://s120-ava-talk.zadn.vn/9/4/1/0/23/120/cf815ea4dc4c0fe093822035a9b48ece.jpg",
    },
    {
      name: "Anh Le Ngoc",
      avatar:
        "https://s75-ava-talk.zadn.vn/a/8/9/b/22/75/3ef6d90200b92777d37c745bf80087b2.jpg",
    },
    {
      name: "Bảo Nguyễn",
      avatar:
        "//s75-ava-talk.zadn.vn/f/9/c/0/10/75/599e6d89a98a2d14f898c0e5a01e55b1.jpg",
    },
    {
      name: "Binh Thaitran",
      avatar:
        "//s75-ava-talk.zadn.vn/a/6/0/c/8/75/04b793d4668880870c17d2d9cd261f3a.jpg",
    },
    {
      name: "Bùi Thiện",
      avatar:
        "//s75-ava-talk.zadn.vn/0/9/f/a/13/75/eafb9c50f53dd35b2f9f95889ecdf93f.jpg",
    },
    {
      name: "Đặng Đôn Lai",
      avatar:
        "https://s75-ava-talk.zadn.vn/a/9/8/e/25/75/4130ca4f493eec86155ea85ca582439e.jpg",
    },
    {
      name: "Dinh Bui",
      avatar:
        "https://s75-ava-talk.zadn.vn/2/c/c/9/9/75/cac68a6bb1ce34caebf2bf1f8ae556d1.jpg",
    },
    {
      name: "Đức Võ",
      avatar:
        "https://s75-ava-talk.zadn.vn/8/2/2/3/37/75/191ada934e8db6923ae8cfe1746f0dd9.jpg",
    },
    {
      name: "Ford Truyền",
      avatar:
        "https://s75-ava-talk.zadn.vn/7/8/0/9/8/75/20d84ba3afadf15f6502b8b450dd879d.jpg",
    },
    {
      name: "Hoàng Duy",
      avatar:
        "//s75-ava-talk.zadn.vn/2/b/2/0/35/75/1b5e7dfeeda53bc9494ba8cf4b8b0a44.jpg",
    },
    {
      name: "Hoàng Phạm",
      avatar:
        "//s75-ava-talk.zadn.vn/8/2/a/f/33/75/215356b455815187ff381997d78a0cb7.jpg",
    },
    {
      name: "Huynh Thanh Tuan",
      avatar:
        "//s75-ava-talk.zadn.vn/d/3/e/5/4/75/b0c6e562ce491496c5a8cbf7e27eb443.jpg",
    },
    {
      name: "Jackie Dương",
      avatar:
        "https://s75-ava-talk.zadn.vn/1/0/0/1/54/75/f2a834620bac188535cb9ccfd1ac9d6d.jpg",
    },
    {
      name: "Kentdy",
      avatar:
        "https://s75-ava-talk.zadn.vn/d/0/f/d/30/75/a3d0131a19bf7c2a7988294454ff7f97.jpg",
    },
    {
      name: "Khúc Ngọc Dũng",
      avatar:
        "https://s75-ava-talk.zadn.vn/f/2/e/e/14/75/574f20fc2b2b479732bceb7a7f8fa8c4.jpg",
    },
    {
      name: "Lê Đức",
      avatar:
        "https://s75-ava-talk.zadn.vn/f/5/b/4/34/75/47ebd8e38eb0880f837ff96be5fcd8b3.jpg",
    },
    {
      name: "Lê Đức Long",
      avatar:
        "https://s75-ava-talk.zadn.vn/d/e/2/a/24/75/bb23e9b2eb548767508a28f8c869d11d.jpg",
    },
    {
      name: "Lê Ku",
      avatar:
        "//s75-ava-talk.zadn.vn/3/4/4/c/30/75/d11f302e89b9a43b09496057a03d7db3.jpg",
    },
    {
      name: "Lê Tín",
      avatar:
        "https://s75-ava-talk.zadn.vn/e/9/8/9/10/75/4cc48680ad1f447b783fbd013b9754e9.jpg",
    },
    {
      name: "Louis",
      avatar:
        "https://s75-ava-talk.zadn.vn/1/1/d/6/13/75/00f2439b73af9bcc16903dd815f47678.jpg",
    },
    {
      name: "Nguyễn Đàn",
      avatar:
        "https://s75-ava-talk.zadn.vn/6/e/f/8/10/75/e2db1f90effc8f374aba6c10fda3c9cf.jpg",
    },
    {
      name: "Nguyễn Minh Khôi",
      avatar:
        "https://s120-ava-talk.zadn.vn/2/f/3/3/9/120/1bafba57862eadb1919a82b7398f80d8.jpg",
    },
    {
      name: "PHAM DINH HUAN",
      avatar:
        "https://s75-ava-talk.zadn.vn/9/5/4/6/11/75/8724132c1e5a5a2571e69919cd767995.jpg",
    },
    {
      name: "Phùng Vĩnh Phú",
      avatar:
        "https://s120-ava-talk.zadn.vn/f/1/4/c/17/120/2d3bf75ce822c2585220aec3a6c6cd1b.jpg",
    },
    {
      name: "Quốc Bảo Western Ford",
      avatar:
        "https://s75-ava-talk.zadn.vn/9/0/1/7/22/75/fffe0424f2e93e866a9d98f3cd004906.jpg",
    },
    {
      name: "Tâm Vtb",
      avatar:
        "https://s75-ava-talk.zadn.vn/3/6/0/4/11/75/39e544a3743266db01793cd58e9bbe86.jpg",
    },
    {
      name: "Thành",
      avatar:
        "https://s120-ava-talk.zadn.vn/f/4/3/c/38/120/1cbe707341fe79a9e230a91c7876f8e7.jpg",
    },
    {
      name: "Thi Cong Noi That",
      avatar:
        "//s75-ava-talk.zadn.vn/1/8/9/9/11/75/53457e314b1bb28c6ba6cfd9b3fb7a90.jpg",
    },
    {
      name: "Thuan Ngoc",
      avatar:
        "https://s75-ava-talk.zadn.vn/1/e/c/0/2/75/4cfab642e41dfbc5bb7728fb1a8d9804.jpg",
    },
    {
      name: "Trịnh Thành",
      avatar:
        "//s75-ava-talk.zadn.vn/e/7/d/7/31/75/854477370feaa0115f76293e8dcd9594.jpg",
    },
    {
      name: "Zindo",
      avatar:
        "https://s75-ava-talk.zadn.vn/c/f/0/c/9/75/e6ff73152e05ee651eba94be8ebb8ac0.jpg",
    },
    {
      name: "A Chung",
      avatar:
        "https://s120-ava-talk.zadn.vn/f/e/1/3/11/120/b47554b7cbb25871e7b0853c76fc85e9.jpg",
    },
    {
      name: "Anh Tho",
      avatar:
        "https://s120-ava-talk.zadn.vn/0/5/8/9/7/120/3c4a518070dc5146d409d04021435565.jpg",
    },
    {
      name: "La Nguyen Thanh Sang",
      avatar:
        "https://s120-ava-talk.zadn.vn/c/3/1/6/9/120/546e5bb9a3ff54527ba5c8bd1c7d1947.jpg",
    },
    {
      name: "Lâm Đạt",
      avatar:
        "https://s120-ava-talk.zadn.vn/d/b/a/9/23/120/ef645fce8602376639dc125b19561122.jpg",
    },
    {
      name: "Lanh Nguyen",
      avatar:
        "https://s120-ava-talk.zadn.vn/8/e/c/1/4/120/cd94b2ff404f5e5e04c1589e3eb43919.jpg",
    },
    {
      name: "Nc Quyền",
      avatar:
        "https://s120-ava-talk.zadn.vn/f/f/8/4/13/120/c79ce535a5dddf94e52fc8e93e80b7df.jpg",
    },
    {
      name: "Tan Nguyen Ielts Master",
      avatar:
        "https://s120-ava-talk.zadn.vn/a/9/3/c/44/120/562d2355b3fe35ab1aca485451785c74.jpg",
    },
    {
      name: "TanDXLM",
      avatar:
        "https://s120-ava-talk.zadn.vn/3/3/f/3/17/120/394305d16fd234c3bdbb37722433a8bf.jpg",
    },
    {
      name: "Tuan Nguyen",
      avatar:
        "https://s120-ava-talk.zadn.vn/c/0/0/d/5/120/b5ded96a15b4e94e46eb17519bad4722.jpg",
    },
  ];

type MemberState = {
  members: MemberData[];
  memberNotYetVoted: MemberData[];
  memberJoinMatch: MemberData[];
  memberUnJoinMatch: MemberData[];
  setMemberJoinMatch: (members: MemberData[]) => void;
  setMemberUnJoinMatch: (members: MemberData[]) => void;
  setMemberNotYetVoted: (members: MemberData[]) => void;
};

export const useMemberStore = create<MemberState>((set) => ({
  members: data,
  memberNotYetVoted: data,
  memberJoinMatch: [],
  memberUnJoinMatch: [],
  setMemberJoinMatch: (members: MemberData[]) => set({ memberJoinMatch: members }),
  setMemberUnJoinMatch: (members: MemberData[]) => set({ memberUnJoinMatch: members }),
  setMemberNotYetVoted: (members: MemberData[]) => set({ memberNotYetVoted: members }),
  
}));
