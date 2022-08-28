<?php
session_start();
$time_start = microtime(true);

date_default_timezone_set('Europe/Moscow');
$date = date('h:i:s');
$entry = "No";
$message = "";
$arrayX = array(-2, -1.5, -1, -0.5, 0, 1, 1.5, 2);
$arrayR = array(1, 1.5, 2, 2.5, 3);
$validation = true;
$x = htmlspecialchars($_POST['x']);
$y = (float)(htmlspecialchars($_POST['y']));
$r = (float)htmlspecialchars($_POST('r'));


if (is_null($r)) {
    $message = "R is null";
    $validation = false;
}
if (is_null($x)) {
    $message = "X is null";
    $validation = false;
}
if (is_null($y)) {
    $message = "Y is null";
    $validation = false;
}

if (!is_null($r) && !is_null($x) && !is_null($y) && $validation) {

    if (!in_array($x, arrayX)) {
        $message = "Invalid X";
        $validation = false;
    }
    if (!in_array($r, $arrayR)) {
        $message = "Invalid R";
        $validation = false;
    }
    if ($y >= 5 || $y <= -5) {
        $message = "Invalid Y";
        $validation = false;
    }
}

if ($validation) {
    if ((($x >= 0 && $y >= 0 && 4 * ($x * $x + $y * $y) <= $r * $r)) ||
        ($x >= 0 && $y <= 0 && ($x + $y >= -$r / 2)) ||
        ($x <= 0 && $y <= 0 && abs($x) <= $r && abs($y) <= $r / 2)) {
        $message = "In";
        $entry = "Yes";
    } else {
        $message = "Out";
    }
}
$time = strval(number_format(microtime(true) - $time_start, 10, ".", "") * 1000) . 'ms';
$result = array($x, $y, $r, $message, $time, $date);
if (!isset($_SESSION['results'])) {
    $_SESSION['results'] = array();
}
$_SESSION['results'][] = $result;
print_r('<tr><td>' . $x . '</td><td>' . $y . '</td><td>' . $r . '</td><td entry=' . $entry . '>' . $message . '</td><td>' . $time . '</td><td>' . $date . '</td></tr>');
?>