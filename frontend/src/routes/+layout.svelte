<script>
	import Header from './Header.svelte';
	import './styles.css';
	import {onMount} from 'svelte'
	import { goto } from '$app/navigation';
	onMount(()=>{
		goto('login')
	})
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	
	<footer>
		<p>create by HZ</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
