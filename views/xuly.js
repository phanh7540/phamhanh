$(function(){
  
var socket = io("http://localhost:3000");
    socket.on("server-send-dki-thatbai", function(){
      alert("Sai Username (co nguoi da dang ki roi!!!)");
    });// mghe đang ký thất bại 

    socket.on("otrong", (data)=>{
      $("#otrong").html(data.message)

      console.log(data)
    });// mghe đang ký thất bại 

    socket.on("server-send-danhsach-Usersa", function(data){
      $("#list_ten_use").html("");

      data.forEach(function(i){
        $("#list_ten_use").append("<div class='user'>" + i + "</div>");
      });
    });

    socket.on("server-send-danhsach-Usersb", function(data){
      $("#list_bienso_use").html("");

      data.forEach(function(i){
        $("#list_bienso_use").append("<div class='user'>" + i + "</div>");
      });
    });


    socket.on("server-send-dki-thanhcong", function(data){
     // $("#list_ten_use").html(data);
    //  $("#list_bienso_use").html(data);
    $("#login_register").show(1000);
      $("#loginForm").hide(1000);
      $("#list_regiter").show(1000); // đăng ký thành công và hiện form danh sách  


    });


    $(document).ready(function(){
        $("#hienthi").show();
        $("#login_register").hide();
        $("#loginForm").hide();
        $("#list_regiter").hide();
        $("#hanhdz").click(function(){
          $("#login_register").show(1000);
          $("#loginForm").show(1000);
          $("#hienthi").hide();
          $("#list_regiter").hide();

          $("#id_uesregister").click(function(){
            socket.emit("client-send-aUsername", $("#id_name_register").val()); 
            socket.emit("client-send-bUsername", $("#id_license_register").val());
        });
     $("#btnLogout").click(function(){
      $("#hienthi").show(1000);
      $("#login_register").hide();
      $("#loginForm").hide();
      $("#list_regiter").hide();

      });

      });  

  });
})
 /* 
socket.on("server-send-danhsach-Users", function(data){
  $("#boxContent").html("");
  data.forEach(function(i){
    $("#boxContent").append("<div class='user'>" + i + "</div>");
  });
});


socket.on("server-send-mesage", function(data){
  $("#listMessages").append("<div class='ms'>" + data.un + ":" + data.nd +"</div>");
});

socket.on("ai-do-dang-go-chu", function(data){
  $("#thongbao").html("<img width='20px' src='typing05.gif'> " + data);
});

socket.on("ai-do-STOP-go-chu", function(){
  $("#thongbao").html("");
});


$(document).ready(function(){
  $("#loginForm").show();
  $("#chatForm").hide();

  $("#txtMessage").focusin(function(){
    socket.emit("toi-dang-go-chu");
  })

  $("#txtMessage").focusout(function(){
    socket.emit("toi-stop-go-chu");
  })

  $("#btnRegister").click(function(){
    socket.emit("client-send-Username", $("#txtUsername").val());
  });

  $("#btnLogout").click(function(){
    socket.emit("logout");
    $("#chatForm").hide(2000);
    $("#loginForm").show(1000);
  });

  $("#btnSendMessage").click(function(){
    socket.emit("user-send-message", $("#txtMessage").val());
  });


});*/
