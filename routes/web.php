<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/core', function () {
    return view('welcome');
});

Route::get('/tellstory', function () {
    return view('welcome');
});

Route::get('/helpukraine', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('welcome');
});

