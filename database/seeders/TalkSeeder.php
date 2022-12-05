<?php

namespace Database\Seeders;

use App\Models\Talk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TalkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $videos = [
            [ "title" => 'Samantha Geitz - Full-Stack Testing Strategies', "duration" => '39:59', "thumbnailUrl" => 'https://img.youtube.com/vi/AxlqFgY0BGY/0.jpg', 'url' => 'https://www.youtube.com/embed/eVEKIlIEecQ' ],
            [ "title" => 'Jason McCreary - Laravel by the Numbers', "duration" => '44:20', "thumbnailUrl" => 'https://img.youtube.com/vi/dccDqpmKVFM/0.jpg', 'url' => 'https://www.youtube.com/embed/eVEKIlIEecQ' ],
            [ "title" => 'Freek Van Der Herten - Laravel MediaLibrary v7', "duration" => '41:01', "thumbnailUrl" => 'https://img.youtube.com/vi/3eyftAR5ilo/0.jpg', 'url' => 'https://www.youtube.com/embed/eVEKIlIEecQ' ],
            [ "title" => 'Colin Decarlo: family vacation', "duration" => '41:01', "thumbnailUrl" => 'https://img.youtube.com/vi/3eyftAR5ilo/0.jpg', 'url' => 'https://www.youtube.com/embed/eVEKIlIEecQ' ],
        ];

        foreach ($videos as $video) {
            Talk::query()->updateOrCreate(["title" => $video["title"]], $video);
        }
    }
}
