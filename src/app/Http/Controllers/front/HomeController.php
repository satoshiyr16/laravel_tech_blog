<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\posts\FilterService;

class HomeController extends Controller
{
    protected $filPosService;

    public function __construct(FilterService $filPosService)
    {
        $this->filPosService = $filPosService;
    }

    public function index()
    {
        $recPosts = $this->filPosService->getRecommendPosts();
        $newPosts = $this->filPosService->getLimit10NewPosts();

        return response()->json([
            'recommend' => $recPosts,
            'new' => $newPosts,
        ]);
    }

    // public function getRecommendPosts()
    // {
    //     $recPosts = $this->filPosService->getRecommendPosts();

    //     return response()->json($recPosts);
    // }

    // public function getLimit10NewPosts()
    // {
    //     $newPosts = $this->filPosService->getLimit10NewPosts();

    //     return response()->json($newPosts);
    // }

}
