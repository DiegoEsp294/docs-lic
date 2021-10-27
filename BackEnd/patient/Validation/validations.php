<?php
class Validation {

    function isPassword($password){
        //Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número: \
        $rexpPass = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/";
        // preg_match($rexp_pass, $password);
        return preg_match($rexpPass, $password);
    }

    function isUsername($username){
        //Al menos una letra, minimo 3, maximo 15, permitidos letras y numeros
        $rexpUsername = "/^[a-z0-9]{3,15}$/";
        return preg_match($rexpUsername, $username);
    }

    function isNumWallet($numWallet){
        $rexpWallet = "/^0x[a-fA-F0-9]{40}$/";
        return preg_match($rexpWallet, $numWallet);
    }
}
?>