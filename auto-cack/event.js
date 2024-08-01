
  if($(".hello-user-left .f-myriadpro_b_cond").length > 0){
    username = $(".hello-user-left .f-myriadpro_b_cond").text();
    chrome.storage.local.set({username});
    doiMayChu();
  }
  
  function doiMayChu(){
   $.ajax({
      type: "post",
      url: "https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.doi-may-chu.htm",
      dataType: "json",
      data: {
          server: "S1"
      },
      success: function (result) {
        alertCustomer(result.message);
        nhanQua3k();
      }
    }); 
  }
    
function nhanQua3k(){
  $.post('https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.xu-ly-loi-chuc.htm', {type: 'loi-chuc-3k'}, function (res) {
    alertCustomer(res.message);
    nhanQua5k();
}, 'json');
}
function nhanQua5k(){
  $.post('https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.xu-ly-loi-chuc.htm', {type: 'loi-chuc-5k'}, function (res) {
    alertCustomer(res.message);
    nhanQua9k();
  }, 'json');
}
function nhanQua9k(){
  $.post('https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.xu-ly-loi-chuc.htm', {type: 'loi-chuc-9k'}, function (res) {
    alertCustomer(res.message);    
    nhanQua11k();
  }, 'json');
}
function nhanQua9k(){
  $.post('https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.xu-ly-loi-chuc.htm', {type: 'loi-chuc-11k'}, function (res) {
    alertCustomer(res.message);    
    setTimeout(function(){
      doiTaiKhoan();
    },3000);
  }, 'json');
}
function doiTaiKhoan(){
  document.location = $(".islogin-gameleft a").attr('href');
}
function alertCustomer(text) {
  if (text != '') {
      $("#popup-alert .detail-alert .text-alert").html(text);
      $('#popup-alert').fadeIn();
  }
}