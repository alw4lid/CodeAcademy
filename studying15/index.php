<?php
include('config.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studying 15</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method="post" enctype='multipart/form-data'>
        <input type="text" name="inputname">
        <input type="password" name="inputpassword">
        <input type="file" name="inputimage">
        <input type="submit" name="submit">
    </form>
    <?php
        if(isset($_POST['submit'])){
            $inputname     = $_POST['inputname'];
            $inputpassword = $_POST['inputpassword'];
            $inputimage    = $_FILES['inputimage'];
            $path          = 'img/' . $inputimage['name'];
            
            print_r($inputname . "<br>" . $inputpassword . "<br>". $path ); 
          
            $query = "INSERT INTO `data2` (`imgname`, `imgpath`, `inputpassword`) 
            VALUES('$inputname','$path','$inputpassword')";
            $insert = mysqli_query($connection, $query);
            }                                      

        ?>

            <?php 
                if($insert == true){
                    ?>
                    <h1>Hello</h1>
                    <?php
                }
                else{
                    ?>
                    <h1>Wrong</h1>
                    <?php
                }
            ?>


</body>
</html>