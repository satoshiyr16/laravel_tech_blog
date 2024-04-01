<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'              => 'admin',
            'email'             => 'admin@example.com',
            'email_verified_at' => now(),
            'password'          => bcrypt('password1234'),
        ]);

        User::create([
            'name'              => 'pikimaru',
            'email'             => 'pikimaru@example.com',
            'email_verified_at' => now(),
            'password'          => bcrypt('password1234'),
        ]);
    }
}
