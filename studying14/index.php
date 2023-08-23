<?php
include('connection.php')
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studying 14</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<form method="post">
    <input type="text" placeholder="username" name="inputusername">
    <input type="password" placeholder="password" name="inputpwd">
    <input type="text" placeholder="phone" name="inputmobile">
    <input type="submit" value="submit" name="btn">
</form>
    <?php

        if(isset($_POST['btn'])){
            $username   = $_POST['inputusername'];
            $pwd        = $_POST['inputpwd'];
            $phone      = $_POST['inputmobile'];
            
            // echo($username . " " . $pwd . " " . $phone);

            $insertion = "INSERT INTO `data` (`username`,`userpwd`,`userphone`) 
            VALUES ('$username','$pwd','$phone')";
            $sql = mysqli_query($connection ,$insertion);
        }
        
        $getData = "SELECT * FROM `data`";
        $fetch = mysqli_query($connection ,$getData);
        
        // print_r($fetch);

    ?>




    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><?php foreach($fetch as $row){
            print_r("<h1> $row[username] </h1>");
        }; ?> </td>
      <td><?php foreach($fetch as $row){
            print_r("<h1> $row[userpwd] </h1>");
        }; ?></td>
      <td><?php foreach($fetch as $row){
            print_r("<h1> $row[userphone] </h1>");
        }; ?> </td>
    </tr>
  </tbody>
</table>


<script src="js/script.js"></script>
</body>
</html>