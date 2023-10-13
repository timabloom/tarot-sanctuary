<script lang="ts">
	import { onMount } from "svelte";

	// import stores
	import { getSettings, updateSettings, settingsStore } from "../../stores/settingsStore";

	type Probabilities = {
		animation: number;
		inverted: number;
		grayscale: number;
		reverse: number;
		turn: number;
		fused: number;
	};

	let animation = 1;
	let inverted = 1;
	let grayscale = 1;
	let reverse = 10;
	let turn = 2;
	let fused = 1;

	onMount(() => {
		getSettings();
		settingsStore.subscribe((settings) => {
			animation = settings.animation;
			inverted = settings.inverted;
			grayscale = settings.grayscale;
			reverse = settings.reverse;
			turn = settings.turn;
			fused = settings.fused;
		});
	});

	function changeOptions(event: Event): void {
		const target = event.target as HTMLInputElement;
		if (target.id === "reverse") {
			reverse = parseInt(target.value);
		} else if (target.id === "turn") {
			turn = parseInt(target.value);
		} else if (target.id === "inverted") {
			inverted = parseInt(target.value);
		} else if (target.id === "grayscale") {
			grayscale = parseInt(target.value);
		} else if (target.id === "animation") {
			animation = parseInt(target.value);
		} else if (target.id === "fused") {
			fused = parseInt(target.value);
		}

		const probabilities = {
			animation: animation,
			inverted: inverted,
			grayscale: grayscale,
			reverse: reverse,
			turn: turn,
			fused: fused
		};

		// divide by 10 to get probabilities
		let result: Probabilities = { ...probabilities };
		for (let key in result) {
			if (isKeyOfProbabilities(key)) {
				result[key] = result[key] / 10;
			}
		}

		function isKeyOfProbabilities(key: string): key is keyof Probabilities {
			return key in result;
		}

		updateSettings(result);
	}
</script>

<svelte:head>
	<title>Settings - Description</title>
</svelte:head>

<header>
	<h1>Settings</h1>
</header>

<main>
	<div class="settings-container">
		<h2>Card Options</h2>
		<div class="options-container">
			<label for="reverse">
				<input
					type="range"
					min="1"
					max="10"
					bind:value={reverse}
					id="reverse"
					on:change={changeOptions}
				/>
				Reverse
			</label>
			<label>
				<input type="range" min="1" max="10" bind:value={turn} on:change={changeOptions} />
				Turn
			</label>
			<label>
				<input type="range" min="1" max="10" bind:value={inverted} on:change={changeOptions} />
				Inverted
			</label>
			<label>
				<input type="range" min="1" max="10" bind:value={grayscale} on:change={changeOptions} />
				Grayscale
			</label>
			<label>
				<input type="range" min="1" max="10" bind:value={animation} on:change={changeOptions} />
				Animation
			</label>
			<label>
				<input type="range" min="1" max="10" bind:value={fused} on:change={changeOptions} />
				Fused
			</label>
		</div>
	</div>
</main>

<style>
	header {
		text-align: center;
	}

	h1 {
		margin-top: 1.5em;
	}

	main {
		text-align: center;
		margin-bottom: 3em;
	}

	.settings-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}

	.settings-container h2 {
		margin-bottom: 0.5em;
	}

	label {
		margin-bottom: 0.3em;
	}

	.options-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: auto;
		margin-right: auto;
		gap: 0.5em;
	}

	.options-container input {
		width: 10em;
	}
</style>
