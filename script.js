javascript: (() => {
  
let current_url = location.href;
current_url = current_url.split("#")[0];
current_url = current_url.replace("https://","");
current_url = current_url.replace("http://","");
current_url = current_url.replaceAll("\/","");
let site_name = "";
let lp = "";
const testName = "送信テスト確認"
const testFurigana = "ソウシンテストカクニン"
const testEmail = "formtest@icon-corp.jp";
const testPhone = "0123456789";
const testYear = "1990";
const testMonth = "01";
const testDay = "01";
const postcode1 = "100";
const postcode2 = "0013";
const prefecture = "東京都";
const address = "千代田区霞が関";
const street = "3-6-15";
const building_room = "霞ヶ関MHタワーズ6F";
const testText = "こちらはフォームからの送信テスト確認になります。"
if (current_url.includes("crecamoney")) {
  crecamoney();
}

if (current_url.includes("kaitori-quest")) {
  kaitoriQuest();
}
if (current_url.includes("k-credit")) {
  kCredit();
}
function crecamoney(){
  
  current_url = current_url.replace("crecamoney.com","");
  lp = current_url.replace("crecamoney.nam","").toUpperCase();
  if(lp) lp = `（${lp}）`
  
  site_name = "ギフトキャッシュ";
  
  $("#register_number1").prop("checked", true);
  $("#fullname").val(`${site_name}${lp}${testName}`);
  $("#furigana").val(`${site_name}${lp}${testFurigana}`);
  $("#sex1").prop("checked", true);
  $("#email").val(testEmail);
  $("#contact").val(testPhone);
  $("#zipcode1").val(postcode1);
  $("#zipcode2").val(postcode2);
  $("#address").val(`${prefecture}${address}`);
  $("#street_address").val(street);
  $("#building").val(building_room);
  $("#loan01").prop("checked", true);
}

function kaitoriQuest(){
  site_name = "KAITORI-QUEST";
  $("#fullname").val(`${site_name}${lp}${testName}`);
  $("#furigana").val(`${site_name}${lp}${testFurigana}`);
  $("#gender1").prop("checked", true);
  $("#year").val(testYear);
  $("#month").val(testMonth);
  $("#day").val(testDay);
  $("#tel").val(testPhone);
  $("#email").val(testEmail);
  $("#postcode1").val(postcode1);
  $("#postcode2").val(postcode2);
  $("#prefecture").val(prefecture);
  $("#address").val(address);
  $("#street").val(street);
  $("#building_room").val(building_room);

  $("#company_name").val(`株式会社買取クエスト`);  
  $("#company_postcode1").val(postcode1);
  $("#company_postcode2").val(postcode2);
  $("#company_address").val(`東京都〇〇市△△町1丁目2-3 □□ビル10階`);
  $("#company_tel").val(testPhone);
  $("#monthly_income").val(`100000円`);
  $("#payday").val(`10日`);
  
  $("#plan1").prop("checked", true);
  $("#products1").prop("checked", true);
  $("#products2").prop("checked", true);
  $("#remarks").val(testText);
}
function kCredit(){
  
  current_url = current_url.replace("mailform","");
  current_url = current_url.replace("input.php","");
  current_url = current_url.replace("k-credit.net","");
  lp = current_url.replace("k-credit.nam","").toUpperCase();
  if(lp) lp = `（${lp}）`
  

  site_name = "信頼と実績の後払いサービス現金化優良店";
  
  $("#radio1").prop("checked", true);
  $("#zip1").val(postcode1);
  $("#zip2").val(postcode2);
  $("#pref").val(prefecture);
  if($("#addr1").length>0){
    $("#addr").val(`${address}`);
    $("#addr1").val(`${street}`);
  }else{
    $("#addr").val(`${address}${street}`);
  }
  $("#addr2").val(building_room);
  $("#f_email").val(testEmail);
  $("#radio3").prop("checked", true);
  $("#fullname").val(`${site_name}${lp}${testName}`);
  $("[name='furigana']").val(`${site_name}${lp}${testFurigana}`);
  $("#f_tel").val(testPhone);
  $("#time_contact").val("12:00〜13:00");
}
  })()
  