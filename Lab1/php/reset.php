<?php
function reset()
{
    unset($_SESSION['results']);
    print('Reset has done');
}