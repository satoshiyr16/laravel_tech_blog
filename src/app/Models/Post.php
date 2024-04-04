<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Post extends Model
{
    use HasFactory;

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopeIsRecommend(mixed $query)
    {
        return $query->where('recommend_flg', 1);
    }

    public function scopeNewPosts(mixed $query, int $limit)
    {
        return $query->where('deleted', 0)
                    ->orderBy('updated_at', 'desc')
                    ->limit($limit);
    }

    public function scopePostsByTag(mixed $query)
    {
        return $query->whereHas('tags', function($query){
            $query->where('home_display_flg', 1);
        });
    }
}
