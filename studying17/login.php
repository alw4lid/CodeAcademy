
<?php
include('config.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studying 17</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Login</h1>
    <form method="post">
        <label for="inputusername">Username: </label>
    <input type="text" placeholder="username" name="inputusername"><br><br>
    <label for="inputpwd">Password: </label>
    <input type="password" placeholder="password" name="inputpwd"><br><br>
    <br>
    <input type="submit" value="submit" name="btn">
</form>
     <?php
       if(isset($_POST['btn'])){
        $uname     = $_POST['inputusername'];
        $pwd        = $_POST['inputpwd'];

        // echo($uname .'<br>'. $pwd .'<br>'. $mobile .'<br>'.$address);

        $getUname     = "SELECT * FROM `newdata` WHERE `username` = '$uname'";
        $db           = mysqli_query($connection, $getUname);

        $fetching = mysqli_fetch_assoc($db);
        
        if(mysqli_num_rows($db) > 0){
            if($fetching['password'] == $pwd){
                session_start();
                $_SESSION['inputusername'] = $uname;
                header('location: done.php');
                echo($uname);
            }else{
                echo("<h1>Wrong Username Or Password</h1>");
            }
        }
       

        // print_r($insert);
        
        
    }
    ?>
</body>
</html>