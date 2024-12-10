import 'webextension-polyfill';
// import { exampleThemeStorage } from '@extension/storage';

// exampleThemeStorage.get().then(theme => {
//   console.log('theme', theme);
// });

// console.log('background loaded');
// console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const webWhatsappUrl = 'https://web.whatsapp.com/';

chrome.action.onClicked.addListener(async tab => {
  console.log('clicked');
  if (tab?.url && tab.url.startsWith(webWhatsappUrl)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === 'ON') {
      // Insert the CSS file when the user turns the extension on
      chrome.scripting.insertCSS({
        files: ['styles/whatsapp.css'],
        target: { tabId: tab.id as number },
      });
    } else if (nextState === 'OFF') {
      // Remove the CSS file when the user turns the extension off
      chrome.scripting.removeCSS({
        files: ['styles/whatsapp.css'],
        target: { tabId: tab.id as number },
      });
    }
  }
});
