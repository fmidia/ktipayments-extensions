chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Extensão instalada!");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ENABLE_ETHEREUM') {
    // Aqui você pode pedir confirmação ao usuário via popup
    const fakeAccount = '0xAb5801a7D3991cA6d6dE4d0f9D211B00b61f7D96';
    console.log('Conta solicitada pelo site:', fakeAccount);
    sendResponse({ accounts: [fakeAccount] });
  }

  if (message.type === 'ETHEREUM_REQUEST') {
    console.log('Requisição Ethereum recebida:', message.method, message.params);
    // Aqui você pode enviar para o popup ou tratar transações
    sendResponse({ result: '0x1' }); // Resposta genérica
  }
});
