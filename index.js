const PORT = 3000;		
var express = require("express");
var app = express();
app.use(express.static("public"));
var ip = require('ip');
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3000 );


var mangaUsers=[];
var mangbUsers=[];

io.on("connection", function(socket){
    console.log("Co nguoi ket noi " + socket.id);// hiển thi id kết nối 

    socket.on("client-send-aUsername", function(data){
     console.log(data) ; // nhận thông tin của tên khách hàng 
      if(mangaUsers.indexOf(data)>=0){
        socket.emit("server-send-dki-thatbai");// gửi thông báo đăng ký thất bại về người dùng 
      }else{
        mangaUsers.push(data);// đưa data vào mảng mangUsers
        socket.Usernamea = data;
        io.sockets.emit("server-send-danhsach-Usersa", mangaUsers);// gửi thông báo đăng ký thành công về người dùng 
    }

    });
    socket.on("client-send-bUsername", function(data){
      console.log(data) ; // nhận thông tin biển số khách hàng
        if(mangbUsers.indexOf(data)>=0){
          socket.emit("server-send-dki-thatbai");// gửi thông báo đăng ký thất bại về người dùng 
        }else{
          mangbUsers.push(data);// đưa data vào mảng mangUsers
          socket.Usernameb = data;
          socket.emit("server-send-dki-thanhcong", data);
          io.sockets.emit("server-send-danhsach-Usersb", mangbUsers);// gửi thông báo đăng ký thành công về người dùng 
      }
    });
 


});

/*
var mangUsers=[];

io.on("connection", function(socket){
  console.log("Co nguoi ket noi " + socket.id);

  socket.on("client-send-Username", function(data){
    if(mangUsers.indexOf(data)>=0){
      socket.emit("server-send-dki-thatbai");
    }else{
      mangUsers.push(data);
      socket.Username = data;
      socket.emit("server-send-dki-thanhcong", data);
      io.sockets.emit("server-send-danhsach-Users", mangUsers);
    }
  });

  socket.on("logout", function(){
    mangUsers.splice(
      mangUsers.indexOf(socket.Username), 1
    );
    socket.broadcast.emit("server-send-danhsach-Users",mangUsers);
  });

  socket.on("user-send-message", function(data){
    io.sockets.emit("server-send-mesage", {un:socket.Username, nd:data} );
  });

  socket.on("toi-dang-go-chu", function(){
    var s = socket.Username + " dang go chu";
    io.sockets.emit("ai-do-dang-go-chu", s);
  });

  socket.on("toi-stop-go-chu", function(){
    io.sockets.emit("ai-do-STOP-go-chu");
  });


});
*/
app.get("/", function(req, res){
  res.render("trangchu");
});
