<svelte:head>
	<!--svelte:head, added to header on page-->
</svelte:head>

<script>
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";
    let r = {}
    let resu = "";
    onMount(() =>{

    async function login(){
        
        
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'post',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "username" : "123",
                "password" : "123"
            })
        }).then((resp) => { 
            return resp.json();
        }).then((data)=>{
            resu = JSON.parse(JSON.stringify(data))
            //Todo: put in cookie, then check if sent back with another api.
        });

    }
    document.getElementById('login').onsubmit = function(){login(); return false;};
});
</script>
<Navbar/>

<form id="login">
    <label>
        Userz
        <input id="username" name="username" type="text">
    </label>
    <label>
        Pass
        <input id="password" name="password" type="password">
    </label>
    <button type="submit">log in !</button>
</form>
<p>{resu ? resu.userId +" + "+ resu.token: ""}</p>
