const cekHariKerja = (day) => {
  try {
    if (Number(day)) throw "Input harus string berupa";
  } catch (err) {
    console.log(err);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject("Hari ini bukan hari kerja");
      }
    }, 1000);
  });
};

cekHariKerja("kamis")
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
