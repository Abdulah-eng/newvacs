const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('VACS-Demo Full Week 1.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const root = dom.window.document.getElementById('root');
    if (root) {
      fs.writeFileSync('rendered_ui.html', root.innerHTML);
      console.log('Successfully rendered to rendered_ui.html');
    } else {
      console.log('No root element found after rendering');
    }
  }, 2000);
});
