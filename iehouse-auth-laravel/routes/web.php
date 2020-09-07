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
