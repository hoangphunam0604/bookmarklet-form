javascript: (() => {

  const zipcode = document.querySelector('input[name="zipcode"]');
  if (zipcode && zipcode.value == "")
    zipcode.value = "102-0071";

  const company_zipcode = document.querySelector('input[name="company_zipcode1"]');
  if (company_zipcode && company_zipcode.value == "")
    company_zipcode.value = "102-0071";

  const zipcode1 = document.querySelector('input[name="zipcode1"]');
  if (zipcode1 && zipcode1.value == "")
    zipcode1.value = "102";

  const zipcode2 = document.querySelector('input[name="zipcode2"]');
  if (zipcode2 && zipcode2.value == "")
    zipcode2.value = "0071";

  const address = document.querySelector('input[name="address"]');
  if (address && address.value == "")
    address.value = "こちらはテスト送信確認になります";

  const company_zipcode1 = document.querySelector('input[name="company_zipcode1"]');
  if (company_zipcode1 && company_zipcode1.value == "")
    company_zipcode.value = "102";

  const company_zipcode2 = document.querySelector('input[name="company_zipcode2"]');
  if (company_zipcode2 && company_zipcode2.value == "")
    company_zipcode2.value = "0071";

  const company_address = document.querySelector('input[name="company_address"]');
  if (company_address && company_address.value == "")
    company_address.value = "こちらはテスト送信確認になります";

  const phone = document.querySelector('input[name="phone"]');
  if (phone && phone.value == "")
    phone.value = "000000000";

  const phonenumber = document.querySelector('input[name="phonenumber"]');
  if (phonenumber && phonenumber.value == "")
    phonenumber.value = "000000000";

  const year = document.querySelector('input[name="year"]');
  if (year && year.value == "")
    year.value = "1990";

  const month = document.querySelector('input[name="month"]');
  if (month && month.value == "")
    month.value = "01";

  const day = document.querySelector('input[name="day"]');
  if (day && day.value == "")
    day.value = "01";

  const inputTel = document.querySelectorAll('input[type="tel"]');
  for (let i = 0; i < inputTel.length; i++) {
    const input = inputTel[i];
    if (!input.value) {
      input.value = `1000`
    }
  }
  const inputEmail = document.querySelectorAll('input[type="email"]');
  for (let i = 0; i < inputEmail.length; i++) {
    const input = inputEmail[i];
    if (!input.value) {
      input.value = `formtest@icon-corp.jp`
    }
  }

  const inputText = document.querySelectorAll('input[type="text"]');
  for (let i = 0; i < inputText.length; i++) {
    const input = inputText[i];
    if (!input.value) {
      input.value = `icon送信テスト確認`
    }
  }
  const inputTextarea = document.querySelectorAll('textarea');
  for (let i = 0; i < inputTextarea.length; i++) {
    const textarea = inputTextarea[i];
    if (!textarea.value) {
      textarea.value = `こちらはテスト送信確認になります`
    }
  }
  const inputSelect = document.querySelectorAll('select');
  for (let i = 0; i < inputSelect.length; i++) {
    const select = inputSelect[i];
    if (!select.value) {
      textarea.value = `こちらはテスト送信確認になります`
    }
  }

  var form_select = document.getElementsByTagName('select');
  for (let i = 0; i < form_select.length; i++) {
    select = form_select[i];
    if (!select.value) {
      select_option = select.querySelectorAll('option');
      console.log(select_option)
      const random_option = getRandomInt(select_option.length - 1);
      select_option[random_option + 1].selected = true;
    }
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
})()
