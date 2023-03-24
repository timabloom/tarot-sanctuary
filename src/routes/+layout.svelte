<script lang="ts">
	import "./styles.css";
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/guidance">Guidance</a></li>
			<li><a href="/decks">Decks</a></li>
			<li><a href="/readings">Readings</a></li>
			<li><a href="/settings">Settings</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<div><slot /></div>

<footer />

<style>
	nav,
	ul {
		display: flex;
	}
	li {
		list-style: none;
		margin: 1rem;
	}
	a {
		text-decoration: none;
	}
</style>
