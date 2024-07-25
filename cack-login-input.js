javascript: (() => {
  var lastid = parseInt(localStorage.getItem("lastid"));
  if(!lastid) lastid = 16
  lastid++;
  lastid = prompt("Nhập số tài khoản", lastid);
  console.log(lastid);
  localStorage.setItem('lastid',lastid)
  
  const account_number = String(lastid).padStart(3, '0')
  const account = `eventcack${account_number}`;
  const password = `asd123456`;
  $(`[name="UserName"]`).val(account)
  $(`[name="Password"]`).val(password)
  $(`form`).submit();
  })()
  