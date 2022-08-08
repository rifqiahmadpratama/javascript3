let api = require("cross-fetch");

let apiF = api("https://jsonplaceholder.typicode.com/users");

let ambilData = new Promise((berhasil, gagal) => {
  apiF
    .then((response) => {
      if (response.status == 200) {
        berhasil("Berhasil");
        return response.json();
      } else {
        gagal("Tidak Berhasil");
      }
    })
    .then((nama) => {
      nama.map((item) => {
        console.log(item.name);
      });
    });
});

let getData = () => {
  ambilData
    .then((nilai) => {
      console.log(`Berhasil ${nilai}`);
    })
    .catch((err) => {
      console.log(`sorry ${err}`);
    });
};

getData();
