(function () {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Já existe um provedor Ethereum ativo.');
    return;
  }

  const ethereum = {
    isMyWallet: true,
    isConnected: () => true,
    enable: async () => {
      return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'ENABLE_ETHEREUM' }, (response) => {
          if (response && response.accounts) {
            resolve(response.accounts);
          } else {
            reject('Usuário negou acesso.');
          }
        });
      });
    },
    request: async ({ method, params }) => {
      return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'ETHEREUM_REQUEST', method, params }, (response) => {
          if (response && !response.error) {
            resolve(response.result);
          } else {
            reject(response.error || 'Erro desconhecido.');
          }
        });
      });
    }
  };

  window.ethereum = ethereum;

  console.log('🟢 Carteira dApp injetada!');
})();
