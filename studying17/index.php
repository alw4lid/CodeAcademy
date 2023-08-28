
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

    <h1>Register</h1>
    <form method="post">
        <label for="inputusername">Username: </label>
    <input type="text" placeholder="username" name="inputusername"><br><br>
    <label for="inputpwd">Password: </label>
    <input type="password" placeholder="password" name="inputpwd"><br><br>
    <label for="inputmobile">Mobile : </label>
    <input type="text" placeholder="phone" name="inputmobile"><br><br>
    <label for="inputAddress">Address : </label>
    <input type="text" placeholder="Address" name="inputAddress">
    <br>
    <input type="submit" value="submit" name="btn">
</form>
    <?php
       if(isset($_POST['btn'])){
        $uname      = $_POST['inputusername']   ;
        $pwd        = $_POST['inputpwd']        ;
        $mobile     = $_POST['inputmobile']     ;
        $address    = $_POST['inputAddress']    ;

        // echo($uname .'<br>'. $pwd .'<br>'. $mobile .'<br>'.$address);

        $insert     = "INSERT INTO `newdata` (`username`,`password`,`mobile`,`address`) 
        VALUES 
        ('$uname','$pwd','$mobile','$address')";

        $db = mysqli_query($connection, $insert);
       }
    ?>
</body>
</html>