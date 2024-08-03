<svelte:head>
	<!--svelte:head, added to header on page-->
</svelte:head>

<script>
    import Comptest from "$lib/Comptest.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Comptest/>
<Comptest val={1} />