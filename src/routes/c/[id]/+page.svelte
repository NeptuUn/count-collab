<script lang="ts">
  
  import { browser } from '$app/environment';
  import { invalidate } from '$app/navigation';
import type { ActionData, PageData } from './$types';

  const { data, form }: { data: PageData; form: ActionData | null } = $props();

  const _displayCount = $derived(form?.count ?? data.counter.count);
  const _displayUpdatedAt = $derived(form?.updatedAt ?? data.counter.updatedAt);

  $effect(() => {
    if (!browser) return;

    const interval = setInterval(() => {
      invalidate(`counter:${data.counter.id}`);
    }, 4000);

    return () => clearInterval(interval);
  });
</script>

<div class="space-y-8">
  <header class="space-y-2">
    <p class="text-sm uppercase tracking-wide text-slate-500">
      {data.counter.isPublic ? 'Public counter' : 'Private counter'}
    </p>
    <h1 class="text-4xl font-bold text-slate-900">{data.counter.title}</h1>
    {#if data.counter.description}
      <p class="text-lg text-slate-600">{data.counter.description}</p>
    {/if}
    <p class="text-sm text-slate-500">Shareable link: /c/{data.counter.id}</p>
  </header>

  <section class="grid gap-6 lg:grid-cols-[2fr,1fr]">
    <div class="bg-white rounded-lg shadow p-6 space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-slate-500">Current count</p>
          <p class="text-5xl font-bold text-blue-600">{displayCount}</p>
        </div>
        <form method="POST" action="?/increment">
          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            +1
          </button>
        </form>
      </div>
      <p class="text-sm text-slate-500">
        Last updated: {new Date(displayUpdatedAt).toLocaleString()}
      </p>
      {#if form?.message}
        <p class="text-sm text-red-600">{form.message}</p>
      {/if}
    </div>

    <aside class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold text-slate-900 mb-4">Recent updates</h2>
      {#if data.history.length === 0}
        <p class="text-sm text-slate-500">No updates yet.</p>
      {:else}
        <ol class="space-y-3">
          {#each data.history as entry (entry.id)}
            <li class="text-sm text-slate-600">
              {entry.previousValue} → {entry.newValue}
              <span class="text-xs text-slate-400">
                ({new Date(entry.changedAt).toLocaleTimeString()})
              </span>
            </li>
          {/each}
        </ol>
      {/if}
    </aside>
  </section>
</div>
