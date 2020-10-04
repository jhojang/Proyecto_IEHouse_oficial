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

        $jwtAuth = new \JwtAuth();
        // Recibir datos por post
        $json = $request->input('json', null);
        $params = json_decode($json);
        $params_array = json_decode($json, true);


        // Validar esos datos
        $validate = \Validator::make($params_array, [
            'userOrEmail' => 'required',
            'password' => 'required'
        ]);

        if ($validate->fails()) {
            $signin = [
                'status' => 'error',
                'code' => 404,
                'message' => 'El usuario no ha sido creado',
                'error' => $validate->errors()
            ];
        } else {
            // Cifrar el password
            $passHash = hash('sha256', $params->password);
            $signin = $jwtAuth->signin($params->userOrEmail, $passHash);

            if (!empty($params->getToken)) {
                $signin = $jwtAuth->signin($params->userOrEmail, $passHash, true);
            }
        }
        
        // Devolver token o datos
        return response()->json($signin, 200);
    }

    public function update(Request $request) {

        $token = $request->header('Authorization');
        $jwtAuth = new \JwtAuth();

        // Comprobar si el usuario está identificado
        $checkToken = $jwtAuth->checkToken($token);

        // Recoger datos por post
        $json = $request->input('json', null);
        $params = json_decode($json);
        $params_array = json_decode($json, true);

        if ($checkToken && !empty($params_array) && !empty($params)) {

            // Sacar usuario identificado
            $user = $jwtAuth->checkToken($token, true);
            
            // Validar datos
            $validate = \Validator::make($params_array, [
                'username' => 'required|alpha|unique:users'.$user->sub,
                'name' => 'required|alpha',
                'last_name' => 'required|alpha',
                'email' => 'required|email|unique:users,'.$user->sub
            ]);

            // Quitar los campos que no se van a actualizar
            unset($params_array['id']);
            unset($params_array['rol']);
            unset($params_array['created_at']);
            unset($params_array['remember_token']);

            // Actualizar datos en la base de datos
            $user_update = User::where('id', $user->sub)->update($params_array);

            // Devolver array con resultado
            $data = [
                'status' => 'success',
                'code' => 200,
                'message' => 'El usuario ha sido actualizado correctamente',
                'user' => $user,
                'changes' => $params_array
            ];

        } else {
            // Si no está identificado
            $data = [
                'status' => 'error',
                'code' => 400,
                'message' => 'El usuario no está identificado'
            ];
        }

        return response()->json($data, $data['code']);

    }

    public function grantedAccess(Request $request) {

        $token = $request->header('Authorization');
        $token = str_replace('"', '', $token);
        $jwtAuth = new \JwtAuth();
        $checkToken = $jwtAuth->checkToken($token, true);
        
        return response()->json($checkToken);

    }
}
