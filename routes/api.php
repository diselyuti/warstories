<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Models\histories;
use App\Http\Controllers\HistoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$historyController = new HistoryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('histories', function (){
    return response(histories::all(), 200);
});

Route::get('histories/search/', function (){
    $queryText = htmlspecialchars($_GET["searchQuery"]);
    $data = histories::query()
        ->where('name', "LIKE", "%".$queryText."%")
        ->orWhere('surname', 'LIKE', "%{$queryText}%")
        ->orWhere('title', 'LIKE', "%{$queryText}%")
        ->get();
    return response(json_encode($data), 200);
});

Route::post('histories', function(Request $request) {
    $history = new histories;
    $history->name = $request->name;
    $history->surname = $request->surname;
    $history->title = $request->title;
    $history->story = $request->story;

    return $history->save();
});

Route::put('histories/{story}', function(Request $request, $storyId) {
    $product = histories::findOrFail($storyId);
    $product->update($request->all());
    return $product;
});

Route::delete('histories/{story}',function($storyId) {
    Product::find($storyId)->delete();

    return 204;

});
