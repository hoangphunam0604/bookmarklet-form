chrome.storage.local.get(['username'], async function (result) {
  let username = result.username
  let clone_account = username.includes('eventcack')
  if (clone_account) {
    let lastid = parseInt(username.replace(/^\D+/g, ''));
    const account_number = String(lastid).padStart(3, '0')
    const account = `eventcack${account_number}`;
    const password = `asd123456`;
    console.log(account);
    document.getElementsByName(`UserName`)[1].value = account;
    document.getElementsByName(`Password`)[1].value = password;
    document.getElementsByTagName('form')[1].submit();
    setTimeout(function(){
      document.getElementsByTagName('form')[1].submit();
    },10000)
  }
}); 