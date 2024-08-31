<svelte:head>
	<!--svelte:head, added to header on page-->
</svelte:head>

<script>
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";
    let sujets = []
    onMount(() =>{

        async function getSujets(){
            
            const response = await fetch('http://localhost:3000/api/sujet-bac-pratique', {
                method: 'get',
                headers: { 'Content-Type' : 'application/json'},
                credentials: 'include'
            }).then((resp) => { 
                return resp.json();
            }).then((data)=>{
                sujets = JSON.parse(JSON.stringify(data))
                //document.cookie = JSON.stringify(data)
                //Todo: put in cookie, then check if sent back with another api.
            });

        }
        getSujets()
        });
</script>
<Navbar/>
<p>Ici, les sujets d'epreuve pratique</p>
{#each sujets as sujet}
<p>{sujet.number} {sujet.year} <a href={sujet.pdf_path}>lien</a></p>
{:else}
loading...
{/each}