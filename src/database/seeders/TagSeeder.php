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
        DB::table('tags')->insert(['name' => 'Laravel', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'React', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Vue.js', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Angular', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'JavaScript', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'PHP', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Python', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Ruby', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Java', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'C#', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'C++', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Go', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Swift', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Kotlin', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Docker', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'AWS', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Azure', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'GCP', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'SQL', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'NoSQL', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'HTML', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'CSS', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Sass', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Webpack', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Babel', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Git', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'GitHub', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'GitLab', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Bitbucket', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Agile', 'created_at' => now(), 'updated_at' => now()]);
        DB::table('tags')->insert(['name' => 'Scrum', 'created_at' => now(), 'updated_at' => now()]);
    }
}
