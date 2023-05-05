<script lang="ts">
	import { onDestroy } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	let countdown: number = 5;

	const timeoutId = setTimeout(() => {
		for (let i = 5; i > -1; i--) {
			setTimeout(() => {
				countdown = i;
			}, 1000);
		}
		goto("/");
	}, 5000);

	const countdownInterval = setInterval(() => {
		if (countdown > 0) {
			countdown--;
		} else {
			clearInterval(countdownInterval);
		}
	}, 1000);

	onDestroy(() => {
		clearInterval(countdownInterval);
		clearTimeout(timeoutId);
	});
</script>

<svelte:head>
	<title>Error - Description</title>
</svelte:head>

{#if $page.error}
	<div class="error-container">
		<h2>{$page.status}: {$page.error.message}</h2>
		<h2>Oops, something went wrong!</h2>
		<p>Redirecting you to the home page in {countdown} seconds...</p>
	</div>
{/if}

<style>
	.error-container {
		text-align: center;
	}
</style>
