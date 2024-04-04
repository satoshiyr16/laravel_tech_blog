<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('post_tag')->insert([
            [
                'post_id' => 1,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 1,
                'tag_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 1,
                'tag_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 2,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 2,
                'tag_id' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 2,
                'tag_id' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 2,
                'tag_id' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 3,
                'tag_id' => 6,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 3,
                'tag_id' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 3,
                'tag_id' => 8,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 4,
                'tag_id' => 8,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 4,
                'tag_id' => 9,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 4,
                'tag_id' => 10,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 5,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 5,
                'tag_id' => 11,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 5,
                'tag_id' => 12,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 5,
                'tag_id' => 13,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 6,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 6,
                'tag_id' => 13,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 6,
                'tag_id' => 14,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 6,
                'tag_id' => 15,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 7,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()],
            [
                'post_id' => 7,
                'tag_id' => 15,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 7,
                'tag_id' => 16,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 7,
                'tag_id' => 17,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 8,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 8,
                'tag_id' => 18,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 8,
                'tag_id' => 19,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 8,
                'tag_id' => 20,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 9,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 9,
                'tag_id' => 21,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 9,
                'tag_id' => 22,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 9,
                'tag_id' => 23,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 10,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 10,
                'tag_id' => 23,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 10,
                'tag_id' => 24,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 10,
                'tag_id' => 25,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 11,
                'tag_id' => 26,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 11,
                'tag_id' => 27,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 11,
                'tag_id' => 28,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);

        DB::table('post_tag')->insert([
            [
                'post_id' => 12,
                'tag_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 12,
                'tag_id' => 28,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 12,
                'tag_id' => 29,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 12,
                'tag_id' => 30,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'post_id' => 12,
                'tag_id' => 31,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
