<script lang="ts">
  import type { ActionData } from './$types';

  let { form }: { form: ActionData | null } = $props();

  let title = $state(form?.values?.title ?? '');
  let description = $state(form?.values?.description ?? '');
  let visibility = $state<'public' | 'private'>(form?.values?.visibility ?? 'public');

  $effect(() => {
    if (!form?.values) return;
    title = form.values.title ?? '';
    description = form.values.description ?? '';
    visibility = form.values.visibility ?? 'public';
  });
</script>

<div class="max-w-2xl mx-auto space-y-8">
  <header class="space-y-2">
    <h1 class="text-3xl font-bold text-slate-900">Create a counter</h1>
    <p class="text-slate-600">Start a new counter and share the link with everyone.</p>
  </header>

  <form method="POST" class="space-y-6 bg-white rounded-lg shadow p-6">
    <div class="space-y-2">
      <label class="block text-sm font-semibold text-slate-700" for="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        required
        bind:value={title}
        placeholder="Community donations"
        class="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
      {#if form?.errors?.title}
        <p class="text-sm text-red-600">{form.errors.title}</p>
      {/if}
    </div>

    <div class="space-y-2">
      <label class="block text-sm font-semibold text-slate-700" for="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        bind:value={description}
        placeholder="Add a short note about what this counter tracks"
        class="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      ></textarea>
    </div>

    <div class="space-y-2">
      <span class="block text-sm font-semibold text-slate-700">Visibility</span>
      <div class="flex items-center gap-4">
        <label class="flex items-center gap-2 text-sm text-slate-700">
          <input type="radio" name="visibility" value="public" bind:group={visibility} />
          Public
        </label>
        <label class="flex items-center gap-2 text-sm text-slate-700">
          <input type="radio" name="visibility" value="private" bind:group={visibility} />
          Private (shareable link)
        </label>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button
        type="submit"
        class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700 transition"
      >
        Create counter
      </button>
      <a href="/" class="text-sm text-slate-600 hover:text-slate-900">Cancel</a>
    </div>
  </form>
</div>
