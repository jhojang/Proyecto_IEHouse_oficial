<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function register(Request $request) {

        // Recoger los datos del usuario
        $json = $request->input('json', null);

        $params = json_decode($json);
        $params_array = json_decode($json, true);

        if (!empty($params) && !empty($params_array)) {
            // Limpiar datos
            $params_array = array_map('trim', $params_array);

            // Validad los datos
            $validate = \Validator::make($params_array, [
                'username' => 'required|alpha|unique:users',
                'name' => 'required|alpha',
                'last_name' => 'required|alpha',
                'email' => 'required|email|unique:users',
                'password' => 'required'
            ]);

            if ($validate->fails()) {
                $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El usuario no ha sido creado',
                    'error' => $validate->errors()
                ];
            } else {
                // Cifrar la contraseña
                $passHash = hash('sha256', $params->password);
                // Crear el usuario
                $user = new User();
                $user->username = $params_array['username'];
                $user->name = $params_array['name'];
                $user->last_name = $params_array['last_name'];
                $user->email = $params_array['email'];
                $user->password = $passHash;
                $user->id_rol = 2;

                // Guardar el usuario en la base de datos
                $user->save();

                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'El usuario se ha registrado correctamente',
                    'user' => $user
                ];
            }
        } else {
            $data = [
                'status' => 'error',
                'code' => 404,
                'message' => 'Los datos enviados no son correctos',
            ];
        }
        

        

        

        

        return response()->json($data, $data['code']);
    }

    public function login (Request $request) {
        return "Método login";
    }
}
