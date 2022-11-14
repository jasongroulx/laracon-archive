<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conference extends Model
{
    use HasFactory;

    public function talks(): HasMany
    {
        return $this->hasMany(Talk::class);
    }
}
