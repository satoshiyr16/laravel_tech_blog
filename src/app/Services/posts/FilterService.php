<?php
namespace App\Services\posts;

use App\Models\Post;

class FilterService
{
    public function getRecommendPosts()
    {
      return Post::isRecommend()->get();
    }

    public function getLimit10NewPosts()
    {
      return Post::newPosts(10)->get();
    }
}
