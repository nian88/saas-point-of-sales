<?php

namespace App\Providers;

use App\Support\ProductionSecurityBaseline;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $issues = ProductionSecurityBaseline::issues();
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
            // Alternatively, in newer versions: URL::forceHttps();
        }

        if ($issues !== []) {
            Log::warning('Production security baseline check failed.', [
                'issues' => $issues,
            ]);
        }
    }
}
