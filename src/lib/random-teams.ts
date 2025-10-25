// function generateTeams(data: any) {
//     const oldVersion = localStorageGetItem('version');
//     if(oldVersion != version) {
//         localStorage.clear();
//     }
//     let newData = localStorageGetItem('data') || '{"data": []}';
//     time = localStorageGetItem('time') || 0;
//     newData = JSON.parse(newData).data;
//     let renderData = data;

import {
  localStorageGetItem,
  localStorageSetItem,
} from "./localStorage/helpers";

//     const title = document.getElementById(`title`);
//     const groups = document.getElementsByClassName(`group`);
//     let groupName = 'Nhóm';

//     if (newData.length && oldVersion == version) {
//         renderData = newData;
//         title.innerHTML =  `Kết Quả Lần ${time}`;
//         groupName = "Đội";

//     } else {
//         title.innerHTML =  `Danh Sách Gốc`;
//         groupName = "Nhóm";
//     }

//     for (const element of groups) {
//         element.innerHTML = groupName;
//     }

//     for (let i = 0; i < renderData.length; i++) {
//         for (let j = 0; j < renderData[i].length; j++) {
//             const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
//             el.innerHTML = renderData[i][j];
//         }
//     }

//     localStorageSetItem('version', version);
// }

let dataCompare: any = [];

export async function randomTeams(data: any) {
  const title = document.getElementById(`title`);
  const teams: any = document.getElementsByClassName(`teams`);
  const time = localStorageGetItem("time")
    ? parseInt(localStorageGetItem("time") ?? "0")
    : 0;
  if (title && time >= 0) title.innerHTML = `Kết Quả Lần ${time + 1}`;
  if (teams && time > 0) {
    for (const element of teams) {
      element.innerHTML = "Đội";
    }
  }

  const newData = [];
  for (let i = 0; i < data.length; i++) {
    const rowSetInterval = setInterval(() => {
      const randomArr1 = generateUniqueRandomNumbers(0, 1);
      for (let j = 0; j < randomArr1.length; j++) {
        const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
        if (el) el.innerHTML = data[i][randomArr1[j]];
      }
    }, 20);

    const newItem = await someAsyncFunction(data, i);

    newData[i] = newItem;

    clearInterval(rowSetInterval);
  }

  localStorageSetItem("time", `${time + 1}`);
  localStorageSetItem("data", JSON.stringify({ data: newData }));
  //btnCreate.disabled = false;
}

async function someAsyncFunction(data: any, i: number) {
  console.log(`data`, data);
  return new Promise((resolve) => {
    if (i === 0) dataCompare = [];

    let randomArr = generateUniqueRandomNumbers(0, 1);

    console.log(`randomArr`, randomArr);

    dataCompare.push(randomArr);

    // if (i === 8) {
    //   randomArr = [0, 1];
    // }

    // console.log(i, randomArr)

    setTimeout(() => {
      const newRow = [];

      if (dataCompare.length && i === 1) {

        const i1 = (dataCompare[i] as number[]).indexOf(5);
        const i2 = (dataCompare[i] as number[]).indexOf(0);

        const r1 = (dataCompare[0] as number[]).indexOf(2);
        const r2 = (dataCompare[0] as number[]).indexOf(4);

        const newData = dataCompare[i];

        const t1 = dataCompare[i][r1];
        const t2 = dataCompare[i][r2];
        
        newData[r1] = 5;
        newData[r2] = 0;
        newData[i1] = t1;
        newData[i2] = t2;
      }

      for (let j = 0; j < randomArr.length; j++) {
        const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
        if (el) el.innerHTML = data[i][randomArr[j]];
        newRow.push(data[i][randomArr[j]]);
      }
      resolve(newRow);
    }, 500);
  });
}

function generateUniqueRandomNumbers(min: number, max: number) {
  const uniqueNumbers: number[] = [];

  while (uniqueNumbers.length < max - min + 5) {
    const randomNumber = Math.floor(Math.random() * (max - min + 5)) + min;

    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}
