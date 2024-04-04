<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tags')->insert([
            'name' => 'Laravel',
            'home_display_flg' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'React',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Vue.js',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Angular',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'JavaScript',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'PHP',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Python',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Ruby',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Java',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'C#',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'C++',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Go',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Swift',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Kotlin',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Docker',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'AWS',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Azure',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'GCP',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'SQL',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'NoSQL',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'HTML',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'CSS',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Sass',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Webpack',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Babel',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Git',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'GitHub',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'GitLab',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Bitbucket',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Agile',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('tags')->insert([
            'name' => 'Scrum',
            'home_display_flg' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
