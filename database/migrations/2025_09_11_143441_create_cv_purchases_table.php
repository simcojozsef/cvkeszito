<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('cv_purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_data_id')->constrained()->onDelete('cascade');
            $table->string('pdf_url');
            $table->string('stripe_session_id')->unique();
            $table->string('invoice_number')->nullable();
            $table->string('template')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cv_purchases');
    }
};
