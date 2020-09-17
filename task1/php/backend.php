<?php
    $numbers = $_POST['result'];
    $isNumber = $_POST['isNumber'];
    if (is_numeric($numbers)) {
        if ($numbers % 2 == 1) {
            echo "error";
        } else {
            $result = (string)decbin($numbers);
            $result = strrev($result);
            $result = substr($result, 1);
            while (strlen($result) < 10) {
                $result = $result . "0";
            }
        }
    }
    else {
        for ($i = 0; $i < 10; $i++) {
            if ($numbers[$i] == 1) {
               $result += pow(2, $i);
            };
        };
    }
    echo $result;
?>
