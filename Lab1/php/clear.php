<?php
function clearTheResults()
{
    unset($_SESSION['results']);
    printf('Reset has done');
}
