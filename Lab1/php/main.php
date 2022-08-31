<?php
include 'clear.php';
include "reset.php";
include "checkAndSave.php";
session_start();

if ($_POST) {
    if (isset($_POST["entry"])) {
        validateAndAnswer();
    }
    if (isset($_POST["clear"])) {
        clearTheResults();
    }
    if (isset($_POST["reset"])) {
        resetTheResults();
    }
}