<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Error - Description</title>
</svelte:head>

{#if $page.error}
	<h2>{$page.status}: {$page.error.message}</h2>
{/if}

<style></style>
