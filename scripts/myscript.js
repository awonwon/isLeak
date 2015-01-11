var arr=[];

$(document).ready(function () {

  $('#pwd').strength({
    strengthClass: 'strength',
    strengthMeterClass: 'strength_meter',
    strengthButtonClass: 'button_strength',
    strengthButtonText: '',
    strengthButtonTextToggle: ''
  });

  $.get("pwd_data.csv", {}, function (csv,textStatus){
    console.log(csv.split(","));
    arr = csv.split(",");
  });

});

$(document).on('keyup','#pwd',function(e) {
  var pwd = $('#pwd').val();

  if(pwd.length==0){
    clear();
    return;
  }

  $('#md5_hex').html(hex_md5(pwd));
  $('#md5_b64').html(b64_md5(pwd));
  $('#sha1_hex').html(hex_sha1(pwd));
  $('#sha1_b64').html(b64_sha1(pwd));
  $('#sha256_hex').html(hex_sha256(pwd));
  $('#sha256_b64').html(b64_sha256(pwd));
  $('#sha512_hex').html(hex_sha512(pwd));
  $('#sha512_b64').html(b64_sha512(pwd));
  $('#rmd160_hex').html(hex_rmd160(pwd));
  $('#rmd160_b64').html(b64_rmd160(pwd));
  $('#caesar').html(crypt(pwd,3));

  $.each(arr,function(i, item) {
    //console.log(typeof item);
    //console.log(JSON.stringify(item));
    //console.log(typeof pwd);
    //console.log(pwd);
    //console.log("key:"+item);
    if(item==pwd){
      $('#pwd').popover({
        template: $('#search').html()
      });
      $('#pwd').popover('show');
      return false;
      //must be false. if not, it will continue.
    }else{
      $('#pwd').popover('destroy');
    }
  });
});

function clear(){
  $('#md5_hex').html("");
  $('#md5_b64').html("");
  $('#sha1_hex').html("");
  $('#sha1_b64').html("");
  $('#sha256_hex').html("");
  $('#sha256_b64').html("");
  $('#sha512_hex').html("");
  $('#sha512_b64').html("");
  $('#rmd160_hex').html("");
  $('#rmd160_b64').html("");
  $('#caesar').html("");
}
