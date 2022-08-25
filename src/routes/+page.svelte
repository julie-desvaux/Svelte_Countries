<script>
	import { onMount, afterUpdate } from 'svelte';

    import {getCountries, getCountriesByRegion} from "../libs/fetchApi.js"

    import Card from "../components/Card.svelte"
    import "../app.css"

	let countries = [];
    let region = "all"

	onMount(async () => {
		countries = await getCountries()
	});

    afterUpdate(() => {
        console.log("update :", region)
    })

    const handleChange = async (e) => {
        region = e.target.value
        if (e.target.value === 'all') {
		    countries = await getCountries()
        } else {
            countries = await getCountriesByRegion(e.target.value)
        }
    }
</script>

<svelte:head>
	<title>Countries App</title>
</svelte:head>

    <h1 class="text-center mb-10 text-3xl font-bold">Countries</h1>
    <div class="w-11/12 mx-auto">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a region</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={region} on:change={handleChange}>
            <option value="all" selected>All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
    <div class="mt-10 mx-auto flex flex-wrap justify-around gap-8">
        {#each countries as country}
        <Card name={country.name.common} img={country.flags.svg} continent={country.continents[0]}/>
        {/each}
    </div>
