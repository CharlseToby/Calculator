const display = document.querySelector('#display');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=> {
  item.onclick = () => {
    if (item.id == 'c') {
      display.innerText = '';
      result.innerText = '';
    } else if (item.id == 'ce') {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equals') {
      result.innerText = eval(display.innerText);
      display.innerText = '';
    } else if (display.innerText == '' && item.id == 'equals') {
      display.innerText = '';
      /* setTimeout(() => (display.innerText = ''), 2000); */
    } else {
      display.innerText += item.id;
    }
  }
})