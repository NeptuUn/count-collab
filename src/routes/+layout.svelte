<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';

  let { children } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
  <nav class="bg-white shadow-sm border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-slate-900">
        <a href="/">Count Collab</a>
      </h1>
      <div class="flex gap-4">
        <a href="/" class="text-slate-700 hover:text-slate-900 transition">Home</a>
        <a href="/counters" class="text-slate-700 hover:text-slate-900 transition">Browser</a>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {@render children()}
  </main>

  <footer class="bg-white border-t border-slate-200 mt-12 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
      <p>&copy; 2026 Count Collab. Shared counts for everyone.</p>
    </div>
  </footer>
</div>

{#if dev}
  <div class="fixed bottom-4 right-4 text-xs bg-slate-900 text-white px-2 py-1 rounded">
    Development Mode
  </div>
{/if}
