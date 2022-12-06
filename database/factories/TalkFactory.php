<?php

namespace Database\Factories;

use App\Models\Conference;
use App\Models\Speaker;
use Database\Seeders\ConferenceSeeder;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Talk>
 */
class TalkFactory extends Factory
{
    private const URLS = [
        'https://www.youtube.com/embed/eVEKIlIEecQ'
    ];

    private const YOUTUBE_IDS = [
        'AxlqFgY0BGY',
        'dccDqpmKVFM',
        '3eyftAR5ilo',
    ];

    public function definition(): array
    {
        $youtubeId = $this->faker->randomElement(self::YOUTUBE_IDS);

        return [
            'title' => $this->faker->words(3, true),
            'description' => $this->faker->words(10, true),
            'url' => "https://www.youtube.com/embed/$youtubeId",
            'duration' => '12:50',
            'thumbnailUrl' => "https://img.youtube.com/vi/$youtubeId/0.jpg",
            'conference_id' => $this->getConference()->id,
            'speaker_id' => Speaker::factory()->create()->id,
        ];
    }

    public function getConference()
    {
        return Conference::query()->inRandomOrder()->first() ?? Conference::factory(5)->create()->first();
    }
}
