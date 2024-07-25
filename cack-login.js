javascript: (() => {
var lastid = parseInt(localStorage.getItem("lastid"));
if(!lastid) lastid = 16
lastid++;
console.log(lastid);
localStorage.setItem('lastid',lastid)

const account_number = String(lastid).padStart(3, '0')
const account = `eventcack${account_number}`;

$(`<form action="/Account/Access" method="post">
  <input type="text" name="UserName" value="${account}">
  <input type="text" name="Password" value="asd123456">
  <input id="client_id" name="client_id" type="hidden" value="cack.Rbvyoow386a86jbCCaLLHo35i3rsFR" />
            <input id="returnURL" name="returnURL" type="hidden" value="https://cuuam.gosu.vn/home/authenticate.html" />
            <input id="state" name="state" type="hidden" value="https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.htm" />
            <input id="qrcode" name="qrcode" type="hidden" value="" />
            <input id="Action" name="Action" type="hidden" value="logon" />
            <input id="Agent" name="Agent" type="hidden" value="" />
            <input id="ActiveTab" name="ActiveTab" type="hidden" value="" />
            <input id="btnSubmitPopup2" class="" type="submit" name="submitForm" value="" />
  `).appendTo('body').submit();
})()
