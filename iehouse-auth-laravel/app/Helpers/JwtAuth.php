<?php

namespace App\Helpers;

use Firebase\JWT\JWT;
use Illuminate\Suport\Facades\BD;
use App\User;

class JwtAuth {

    public $secret_key;

    public function __construct() {
        $this->secret_key = 'esta_es_mi_clave_secreta_112233445566778899';
    }

    public function signin($userOrEmail, $password, $getToken = null) {

        // Buscar si existe el usuario con sus credenciales
        if (filter_var($userOrEmail, FILTER_VALIDATE_EMAIL)) {
            $user = User::where([
                'email' => $userOrEmail,
                'password' => $password
            ])->first();
        } else {
            $user = User::where([
                'username' => $userOrEmail,
                'password' => $password
            ])->first();
        }

        // Comprobar si son correctas (Si devuelve un objeto)
        $signin = false;
        if (is_object($user)) {
            $signin = true;
        }

        if ($signin == true) {

            $token = [
                'sub' =>$user->id,
                'username' => $user->username,
                'name' => $user->name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'rol' => $user->id_rol,
                'iat' => time(),
                'exp' => time() + (7*24*60*60)
            ];

            // Generar el token con los datos
            $jwt = JWT::encode($token, $this->secret_key, 'HS256');
            $decoded = JWT::decode($jwt, $this->secret_key, ['HS256']);
            // Devolver los datos decodificados o el token en función del parametro
            if (is_null($getToken)) {
                $data = $jwt;
            } elseif($jwt == $getToken) {
                $data = $decoded;
            }

        } else {
            $data = [
                'status' => 'error',
                'message' => 'Login incorrecto'
            ];
        }

        return $data;
    }

    public function checkToken($jwt, $getIdentity = false) {
        $auth = false;

        try {
            $decoded = JWT::decode($jwt, $this->secret_key, ['HS256']);
        } catch (\UnexpectedValueException $e) {
            $auth = false;
        } catch (\DomainException $e) {
            $auth = false;
        }

        if (!empty($decoded) && is_object($decoded) && isset($decoded->sub)) {
            $auth = true;
        }

        if ($getIdentity) {
            return $decoded;
        }

        return $auth;

    }
}