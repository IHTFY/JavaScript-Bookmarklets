const path = prompt('Paste just the path string. For example: M 2.4 6.8 Z');
const scale = prompt('The multiplier (scale value):');

const svgArray = [];
let term = '';
let hasDecimal = false;

const add = () => {
  if (term.length) {
    svgArray.push(term);
    term = '';
    hasDecimal = false;
  }
}

for (let symbol of path.trim()) {
  if (/\s+/.test(symbol)) {
    add();
    continue;
  }
  if (/[A-Za-z]/.test(symbol)) {
    add();
    svgArray.push(symbol);
    continue;
  }
  if (/\d/.test(symbol)) {
    term += symbol;
    continue;
  }
  if (symbol === '.') {
    if (hasDecimal) {
      add();
      term += '0';
    }
    term += symbol;
    hasDecimal = true;
  }
  if (symbol === '-') {
    add();
    term += symbol;
  }
}

const scaledPath = svgArray.map(i => /\d/.test(i) ? i * scale : i)
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