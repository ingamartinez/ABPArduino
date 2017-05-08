<?php

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
    return view('dashboard.index');
});

Route::post('historico', function (\Illuminate\Http\Request $request) {

//    $hist=\App\Model\Historico::forceCreate([
//        'distancia' => $request->distancia
//    ]);



    Log::info('Showing user profile for user: '.$request->distancia);


    event(new \App\Events\UpdateGauge($request->distancia));

});