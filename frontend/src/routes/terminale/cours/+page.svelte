<svelte:head>
	<!--svelte:head, added to header on page-->
</svelte:head>

<script>
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";
    /**
     * @type {any[]}
     */
    let all_cours = [];
    onMount(() => {
        all_cours = [
            {
                "_id": "randomstuff",
                "title": "cours 1",
                "description": "bidule",
                "fileUrl": "http://localhost:3000/data/terminale/cours/cours1.pdf",
                "class": "terminale",
                "visible": true,
                "done": true,
                "numero": 1,
                "__v": 0
            },
            {
                "_id": "randomstuff2",
                "title": "cours 2",
                "description": "mon truc",
                "fileUrl": "http://localhost:3000/data/terminale/cours/cours2.pdf",
                "class": "terminale",
                "visible": true,
                "done": false,
                "numero": 1,
                "__v": 0
            }
        ]

    });
</script>
<Navbar/>
{#each all_cours as cours}
<p>{cours.title} <a href={cours.fileUrl}>lien</a></p>
{:else}
loading...
{/each}
cours, #todo: recup sujets, check auth.
