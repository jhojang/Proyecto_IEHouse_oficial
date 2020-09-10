<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/show-token', function() {
    return csrf_token();
});

Route::post('/api/register', 'UserController@register');
Route::post('/api/login', 'UserController@login');
Route::get('/api/granted-access', 'UserController@grantedAccess');
Route::put('/user/update', 'UserController@update');