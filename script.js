
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Кошелёк подключён!");
    } catch (error) {
      alert("Ошибка подключения.");
    }
  } else {
    alert("Установи MetaMask!");
  }
}

function buyToken() {
  alert("Функция покупки в разработке (будет подключена к контракту).");
}

function sellToken() {
  alert("Функция продажи в разработке (вывод будет ручной через сайт).");
}
