<?php 
//http://localhost/264latest/project/
session_start();
        if(isset($_POST['userName'])){
				//connection
                  include("condb.php");
				//รับค่า user & userPass
                  $userName = $_POST['userName'];
                  $userPass = ($_POST['userPass']);
				//query 
                  $sql="SELECT * FROM userdata WHERE userName='".$userName."' 
                  AND userPass='".$userPass."' ";

                //   echo $sql;
                //     exit;

                  $result = mysqli_query($condb,$sql);
				
                  if(mysqli_num_rows($result)==1){

                      $row = mysqli_fetch_array($result);

                      $_SESSION["id"] = $row["id"];
                      $_SESSION["isAdmin"] = $row["isAdmin"];
                      $_SESSION["isActive"] = $row["isActive"];

                      if($_SESSION["isAdmin"]== 0 && $_SESSION["isActive"]==1){ //user yung active
                        Header("location:u5-complain.html");
                      }

                      if ($_SESSION["isAdmin"]==1 && $_SESSION["isActive"] ==1){  //admin yung active
                        //แปะของหน้าแอดมินจรื้อพี่สาว ฝากหน่อยค่า
                        Header("location:u6ForStaff.html");
                      }

                      if($_SESSION["isAdmin"]== 0 && $_SESSION["isActive"]==0){ //user mai active
                        //แปะยูไอหน้าเฟลเฟลแอคไม่ active แล้วค่า
                        Header("location:not_actived.html");
                      }

                      if($_SESSION["isAdmin"]== 1 && $_SESSION["isActive"]==0){ //admin mai active
                        //แปะยูไอหน้าเฟลเฟลแอคไม่ active แล้วค่า
                        Header("location:not_actived.html");
                      }

                  }else{
                    //แปะโลเคชั่นของหน้า error 
                    Header("location: wrong.html");
                    
                    // echo "<script>";
                    //     echo "alert(\" USERNAME หรือ  PASSWORD ไม่ถูกต้อง\");"; 
                    //     echo "window.history.back()";
                    // echo "</script>";

                  }

        }else{


             Header("Location: form.php"); //user & userPass incorrect back to login again

        }
?>