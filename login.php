<?php session_start(); ?>


<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>เข้าสู่ระบบ...</title>
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit|Prompt"/>

<body style="margin-top: 20px;">

<img class="image1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/180px-Emblem_of_Thammasat_University.svg.png" >
  <div class="div1"> 
    <p style = "margin-top:5px; margin-left: 5px;">ระบบแบบฟอร์มคำร้อง เพิ่ม - ถอนรายวิชาออนไลน์ ปีการศึกษา 2565</p>

  </div>
<div class="emp">
</div>

<div class="wrapper">
  <div class="inner-warpper text-center">
    <h2 class="title">เข้าสู่ระบบ</h2>
    <form action="chklogin.php" id="formvalidate" method="post" >
      <div class="input-group">
        <label class="palceholder" for="username">ชื่อผู้ใช้งาน</label>
        <input class="form-control" name="userName" id="username" type="text" placeholder="" required/>
        <span class="lighting"></span>

      </div>
      <div class="input-group">
        <label class="palceholder" for="password">รหัสผ่าน</label>
        <input class="form-control" name="userPass" id="password" type="password" placeholder="" required/>
        <span class="lighting"></span>

      </div>

      <button type="submit" id="login">LOGIN</button>
      <div class="clearfix supporter">
        <a class="forgot pull-right" href="#">ลืมรหัสผ่าน ?</a>
      </div>
    </form>
  </div>
</div>

<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js'></script>
<script  src="./script.js"></script>

</body>
</html>

