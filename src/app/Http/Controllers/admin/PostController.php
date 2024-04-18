<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function store(Request $request)
    {
        Log::info('data:', $request->all());
        $post = new Post;
        $post->title = $request->input('title');
        // $post->tags = $request->input('tags');
        $post->content = $request->input('postContent');

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $path = $request->image->store('images', 'public');
            Log::info('URL:'. $path);
            // $post->image_path = Storage::url($path);
        }
        $post->save();

        return response()->json(['message' => '投稿を保存しました'], 200);
    }

    // private function imageUpload(Request $request)
    // {
    //     if($request->hasFile('image') && $request->file('image')->isValid())
    //     {
    //         $path = $request->image->store('images', 'public');
    //         Log::info('URL:'. $path);
    //         return response()->json([
    //             'url' => Storage::url($path)
    //         ], 200);
    //     }
    // }
}
