const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (error) {
      callback(new Error("Maaf data tidak di temukan"), []);
    } else {
      callback(month);
    }
  }, 5000);
};

const result = (bulan) => {
  const map = bulan.map((item) => {
    return item;
  });
  console.log(map);
};
getMonth(result);
