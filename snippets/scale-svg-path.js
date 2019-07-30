const path = prompt('Paste just the path string. For example: M 2.4 6.8 Z');
const scale = prompt('The multiplier (scale value):');
const scaledPath = path
  .replace(/[A-Za-z]/g, ' $& ')
  .replace(/-/g, ',-')
  .replace(/(\d+)\.(\d+)\.(\d+)/g, '$1.$2,0.$3')
  .replace(/,/g, ' ')
  .trim()
  .split(/\s/)
  .map(i => /\d/.test(i) ? i * scale : i)
  .join(' ');
const text = document.createElement('textarea');
const selection = document.getSelection();
text.textContent = scaledPath;
document.body.appendChild(text);
selection.removeAllRanges();
text.select();
document.execCommand('copy');
selection.removeAllRanges();
document.body.removeChild(text);
alert('Copied to clipboard.');