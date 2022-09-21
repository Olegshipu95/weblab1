<?php
include 'clear.php';
include "reset.php";
include "checkAndSave.php";
session_start();

if ($_POST) {
    if (isset($_POST["entry"])) {
        validateAndAnswer();
    }
    else if (isset($_POST["clear"])) {
        clearTheResults();
    }
    else if (isset($_POST["reset"])) {
        resetTheResults();
    }
    else {
        echo "You need write one of this params:reset,clear or entry";
    }
}