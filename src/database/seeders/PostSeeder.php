<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'title' => 'おすすめ投稿 1',
            'content' => 'これはおすすめの投稿内容です。1',
            'heading_image' => null,
            'recommend_flg' => 1,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'おすすめ投稿 2',
            'content' => 'これはおすすめの投稿内容です。2',
            'heading_image' => null,
            'recommend_flg' => 1,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'おすすめ投稿 3',
            'content' => 'これはおすすめの投稿内容です。3',
            'heading_image' => null,
            'recommend_flg' => 1,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'おすすめ投稿 4',
            'content' => 'これはおすすめの投稿内容です。4',
            'heading_image' => null,
            'recommend_flg' => 1,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 1',
            'content' => 'これはサンプルの投稿内容です。1',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 2',
            'content' => 'これはサンプルの投稿内容です。2',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 3',
            'content' => 'これはサンプルの投稿内容です。3',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 4',
            'content' => 'これはサンプルの投稿内容です。4',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 5',
            'content' => 'これはサンプルの投稿内容です。5',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 6',
            'content' => 'これはサンプルの投稿内容です。6',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 7',
            'content' => 'これはサンプルの投稿内容です。7',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => 'サンプル投稿 8',
            'content' => 'これはサンプルの投稿内容です。8',
            'recommend_flg' => 0,
            'deleted' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => '削除投稿 1',
            'content' => 'これは削除投稿内容です。1',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'title' => '削除投稿 2',
            'content' => 'これは削除投稿内容です。2',
            'heading_image' => null,
            'recommend_flg' => 0,
            'deleted' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
