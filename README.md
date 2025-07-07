# 🧰 Extensão Base Multi-Navegador

Este é um projeto base funcional para desenvolver uma extensão de navegador compatível com:

- ✅ Google Chrome  
- ✅ Mozilla Firefox  
- ✅ Microsoft Edge  
- ✅ Brave Browser  
- ✅ Opera  

É ideal para quem quer criar uma extensão básica e expandi-la futuramente (como carteiras dApp, gateways web3, ferramentas de produtividade, etc).

---

## 📁 Estrutura do Projeto
webext-base/
│
├── manifest.json     → Configuração principal da extensão
├── popup.html        → Interface gráfica da extensão
├── popup.js          → Lógica do popup
├── background.js     → Código executado em segundo plano
├── content.js        → Script injetado nas páginas web
└── icon.png          → Ícone da extensão


---

## 🚀 Como Testar a Extensão

### 🔹 Google Chrome / Microsoft Edge / Brave / Opera / Arc Browser / Librewolf / Tor

1. Abra o navegador
2. Acesse: `chrome://extensions/`
3. Ative o **Modo desenvolvedor** (canto superior direito)
4. Clique em **"Carregar extensão não verificada"**
5. Selecione a pasta onde está o arquivo `manifest.json`

---

### 🔹 Mozilla Firefox

1. Abra o Firefox
2. Acesse: `about:debugging#/runtime/this-firefox`
3. Clique em **"Carregar complemento temporário"**
4. Selecione o arquivo `manifest.json` na sua pasta

---

## 💻 Funcionalidades Incluídas

- Popup funcional com interação via JavaScript
- Service Worker (background.js) para tarefas em segundo plano
- Content Script para interagir com páginas web
- Armazenamento local básico (pode ser expandido com `browser.storage`)
- Suporte a todos os navegadores modernos

---

## 🧪 Desenvolvimento

Para adicionar novas funcionalidades, seguem os arquivos:

- Integração com Web3 (`window.ethereum`, carteira dApp)
- Armazenamento persistente (`browser.storage.local.set/get`)
- Comunicação entre scripts (`chrome.runtime.sendMessage`)
- Injeção de elementos visuais nas páginas
- Ingeração com APIs externas

---

## 📦 OPCIONAL BAIXAR ZIP

Se quiser compactar tudo em `.zip` para upload ou compartilhamento:

```bash
zip -r minha-extensao.zip webext-base/



