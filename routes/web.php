<?php

use App\Models\Conference;
use App\Models\Speaker;
use App\Models\Talk;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'videos' => Talk::all()
    ]);
});

Route::get('/watch/{talk}', function (Talk $talk) {
   return Inertia::render('WatchTalk', [
       'video' => $talk
   ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', ['videos' => Talk::with(['speaker', 'conference'])->paginate()]);
    })->name('dashboard');
});
