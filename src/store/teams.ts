import { clearStorage, localStorageGetItem } from "@/lib/localStorage/helpers";
import { create } from "zustand";

clearStorage();

const time = localStorageGetItem("time")
  ? parseInt(localStorageGetItem("time") ?? "0")
  : 0;

console.log(
  `localStorageGetItem("data")`,
  localStorageGetItem("data")
    ? JSON.parse(localStorageGetItem("data"))?.data
    : []
);

const data = localStorageGetItem("data")
  ? JSON.parse(localStorageGetItem("data") ?? '{"data": "[]"}').data
  : [
      // ["Bình <span class='ml-1 dot-red inline-flex'>+</span>", "A Thanh  <span class='ml-1 dot-red inline-flex'>+</span>", "Quang", "A Lương"],
      // ["A Thái  <span class='ml-1 dot-red inline-flex'>+</span>", "Chung", "Sỹ", "A Hải"],
      // ["A Kiên", "A Vương", "Thầy Trình  <span class='ml-1 dot-red inline-flex'>+</span>", "A Tân"],
      // ["Tuấn Nguyễn", "Nguyễn Thanh", "Đức Máy Xúc", "Thành Neymar"],
      // ["Quyền CC", "Anh Tho  <span class='ml-1 dot-red inline-flex'>+</span>", "A Bình", "Ngọc Thuận"],
      // ["Đỉnh Bùi", "Ngọc Dũng", "Luân TQ", "Tín Nguyễn"],
      // ["Jackie Dương <span class='ml-1 dot-red inline-flex'>+</span>", "Tâm Tít", "Trương Phi", "Trần Quang <span class='ml-1 dot-red inline-flex'>+</span>"],
      // ["Hiếu Thứ 3", "Anh Hải", "Thầy Trình", "Louis"],
      // ["Chung VCB", "Ngọc Anh", "Luka Duy", "Phú Chủ Tịch"],
      // ["Bảo Ford", "A Tân", "Bùi Thiện", "Du Ford"],
      // ["Anh Hoàng",  "Sang Delima", "Lành Nguyễn", "--",],
      // ["Đạt G", "Đức Máy Xúc"],
      // ["Ngọc Anh", "Tâm Photo"],
      ["Trịnh Thành", "Anh Cảnh" , "Chị Oanh" ,"Quốc Bảo", "Đặng Thao", "Quốc Bình"],
      ["Mỹ Trinh", "Đặng Ngân", "Thùy Linh", "Chị Năm", "Chị Xuyên", "Chị Nương"],

    // ["TUẤN GÒ CÔNG <span class='ml-1 dot-red inline-flex'>+</span>", "A TÂN/TOÀN <span class='ml-1 dot-blue inline-flex'>*</span>", "LÊ ĐỨC", "LUÂN TQ/LÂM ĐẠT <span class='ml-1 dot-blue inline-flex'>*</span>"],
    // ["NGUYỄN THANH", "LINTE", "THÀNH NAITO", "TRUYỀN FORD"],
    // ["TÍN NGUYỄN <span class='ml-1 dot-red inline-flex'>+</span>", "DU FORD", "QUỐC BẢO", "THÁI ZINDO"],
    // ["NGỌC THUẬN", "QUYỀN", "ANH THO", "ÚT NHỎ <span class='ml-1 dot-red inline-flex'>+</span>"],
    // ["JACKIE DƯƠNG <span class='ml-1 dot-red inline-flex'>+</span>", "TRẦN QUANG", "VĨNH PHÚ <span class='ml-1 dot-red inline-flex'>+</span>", "LÊ KU"],
    // ["ĐỈNH BÙI", "CAO PHONG <span class='ml-1 dot-red inline-flex'>+</span>", "NGỌC DŨNG/CON <span class='ml-1 dot-blue inline-flex'>*</span>", "PHI HỌC"],
    // ["TUẤN PY/CON <span class='ml-1 dot-blue inline-flex'>*</span>", "THÀNH NEYMAR", "TUẤN NGUYỄN", "ĐỨC MÁY XÚC"],
    // ["VĂN CHUNG <span class='ml-1 dot-red inline-flex'>+</span>", "HOÀNG DUY <span class='ml-1 dot-red inline-flex'>+</span>", "NGỌC ANH", "TÂM TÍT"],
    // ["ANH HẢI", "LOUIS", "BÙI THIỆN", "THẦY TRÌNH"],
    // ["MINH KHÔI", "LÀNH NGUYỄN", "SANG DELIMA", "HOÀNG PHẠM"]
    ];

type TeamState = {
  data: any;
  time: number;
  totalTeam: number;
  totalTeamMember: number;
  setTotalTeam: (value: number) => void;
  setTotalTeamMember: (value: number) => void;
};

export const useTeamStore = create<TeamState>((set) => ({
  data: data,
  time: time,
  totalTeam: 6,
  totalTeamMember: 2,
  setTotalTeam: (value: number) => set({ totalTeam: value }),
  setTotalTeamMember: (value: number) => set({ totalTeamMember: value }),
}));
