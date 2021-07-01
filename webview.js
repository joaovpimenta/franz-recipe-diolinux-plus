module.exports = (Ferdi) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FerdiData = document.querySelector('#FerdiMessages').dataset;
    if (FerdiData) {
      direct = FerdiData.direct;
      indirect = FerdiData.indirect;
    }

    Ferdi.setBadge(direct, indirect);
  }

  Ferdi.loop(getMessages);
}
