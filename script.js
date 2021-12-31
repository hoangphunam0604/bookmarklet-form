javascript: (() => {
function autoComplete() {
  setSelect();
  setTextArea();
  setInput();
};


function setSelect() {
  var form_select = document.getElementsByTagName('select');
  for (let i = 0; i < form_select.length; i++) {
    select = form_select[i];
    if (!select.value) {
      select_option = select.querySelectorAll('option');
      const random_option = getRandomInt(select_option.length);
      select_option[random_option].selected = true;
    }
  }
}
function setTextArea() {

  var form_textarea = document.getElementsByTagName('textarea');
  for (let i = 0; i < form_textarea.length; i++) {
    textarea = form_textarea[i];
    if (!textarea.value) {
      textarea.value = `${demo_text}\n${demo_text}${demo_text}\r${demo_text}${demo_text}${demo_text}`
    }
  }
}
function setInput() {
  var form_input = document.getElementsByTagName('input');
  for (let i = 0; i < form_input.length; i++) {
    let input = form_input[i];
    let input_type = input.getAttribute("type");
    if (input_type === 'email') {
      input.value = demo_email;
      continue;
    }
    if (input_type == 'checkbox' || input_type == 'radio') {
      setCheckbox(input);
      continue;
    }

    if (input_type == 'password') {
      setPassword(input);
      continue;
    }
    input.value = demo_text;
  }
}
function setCheckbox(input) {
  input_name = input.getAttribute('name');
  input_checkbox = document.querySelectorAll(`input[name='${input_name}']`);
  input_checkbox_number = document.querySelectorAll(`input[name='${input_name}']:checked`);
  if (input_checkbox_number.length == 0) {
    const random_checkbox = getRandomInt(input_checkbox.length);
    input_checkbox[random_checkbox].checked = true;
  }
}
function setPassword(input) {
  input.value = demo_pass;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var demo_email = 'mailform@example.com';
var demo_text = 'CONTENT_HERE';
var demo_pass = 'paswordhere';
autoComplete();
})()