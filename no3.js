// 1
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data1 = 11;
//     if (data1 > 10) {
//       console.log("data pertama");
//       resolve(data1);
//     } else {
//       reject("maaf nilai awal kurang");
//     }
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data2 = 20;
//     if (data2 > 10) {
//       console.log("data kedua");
//       resolve(data2);
//     } else {
//       reject("maaf nilai kudua kurang");
//     }
//   }, 2 * 1000);
// });

// Promise.all([p1, p2])
//   .then((results) => {
//     const total = results.reduce((p, c) => p - c);

//     console.log(`Results: ${results}`);
//     console.log(`Selisih: ${total}`);
//   })
//   .catch((err) => {
//     console.log(`sorry ${err}`);
//   });

// 2
// const cekHobi = (day) => {
//   try {
//     if (Number(day)) throw "Input harus berupa string";
//   } catch (err) {
//     console.log(err);
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataHobi = ["berenang", "bulu tankis", "membaca", "bermain game"];
//       let cek = dataHobi.find((item) => {
//         return item === day;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject("Maaf, salah memasukan hobi");
//       }
//     }, 1000);
//   });
// };

// cekHobi("berenang")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
