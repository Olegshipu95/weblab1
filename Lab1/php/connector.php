<?php
function sendException(string $message, $start_time){
    print_r('<tr><td>' . $_POST['x'] . '</td><td>' . $_POST['y'] . '</td><td>' . $_POST['r'] . '</td><td>no</td><td>' . $start_time . '</td></tr><div class="messageFromServer">' . $message .'</div>');
}