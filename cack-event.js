javascript: (() => {
  $.ajax({
    type: "post",
    url: "https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.doi-may-chu.htm",
    dataType: "json",
    data: {
        server: "S1"
    },
    success: function (result) {
        alertCustomer(result.message);
        
        listLuotquay();
        listLoichuc();
  
        $.post('https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.xu-ly-loi-chuc.htm', {type: 'loi-chuc-5k'}, function (res) {
          if (res.status == 1) {
              $.post("https://cuuam.gosu.vn/home/su-kien/sinh-nhat-11-tuoi.list-loi-chuc.htm", function (res) {
                  $(".load-loichuc").html(res)
              }, 'html');
          }
          alertCustomer(res.message);
          document.location = $(".islogin-gameleft a").attr('href');
      }, 'json');
    }
  })
})()
