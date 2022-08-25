<script>
	import { onMount } from 'svelte';

    import {getCountries} from "../libs/fetchApi.js"

    import Card from "../components/Card.svelte"
    import "../app.css"

	let countries = [];

	onMount(async () => {
		countries = await getCountries()
	});
</script>

<svelte:head>
	<title>Countries App</title>
</svelte:head>

    <h1 class="text-center mb-10 text-3xl font-bold">Countries</h1>
    <div class="cards">
        {#each countries as country}
        <Card name={country.name.common} img={country.flags.svg} continent={country.continents[0]}/>
        {/each}
    </div>


<style>
    .cards {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 30px;
    }
</style>