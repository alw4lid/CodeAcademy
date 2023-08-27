<?php
    class user {
        public $userName = 'Alwaleed';
        public $age = 22;
        public $email = "Alwaleed@gmail.com";
        
        
        
        
        public function Ok(){
                echo('Welcome');  // => Method
        }

        
        
    }
    $user1 = new user();
    echo($user1->Ok());
    echo($user1->userName);
    echo($user1->email);
    $user1-> userName = "Mohammed";
    echo($user1->userName);
    // $user1.ok();

?>