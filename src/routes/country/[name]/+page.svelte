<script>
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
  import {getACountry} from "../../../libs/fetchApi"

  const name = $page.params.name
  export const title = name.charAt(0).toUpperCase()+name.substr(1)

  let country

  onMount(async () => {
		country = await getACountry(name);
    console.log(country)
	});

</script>

<svelte:head>
	<title>{title} - Countries App</title>
</svelte:head>


  {#if country}
    <h1 class="text-center mb-10 text-3xl font-bold">{country[0].name.common}</h1>
    <div class="flex flex-wrap">
      <div class="flag max-w-11/12 mx-auto mb-8">
        <img class="mx-auto" src={country[0].flags.svg} alt={country[0].name.common}>
      </div>
      <div class="infos max-w-11/12 mx-auto">
        <div class="column mb-8 lg:mb-0">
          <div class="mb-3 flex justify-between">
              <span class="font-bold">Official Name: </span>
              <span>{country[0].name.official}</span>
          </div>
          <div class="mb-3 flex justify-between">
              <span class="font-bold pr-5">Population: </span>
              {country[0].population}
          </div>
          <div class="mb-3 flex justify-between">
              <span class="font-bold">Region: </span>
              {country[0].region}
          </div>
          <div class="mb-3 flex justify-between">
              <span class="font-bold">Subregion: </span>
              {country[0].subregion}
          </div>
          <div class="mb-3 flex justify-between">
              <span class="font-bold">Capital: </span>
              {country[0].capital}
          </div>
      </div>
      </div>
    </div>
  {/if}

<style>
  .flag {
    width: 700px;
  }
  .infos {
    width: 500px;
    max-width: 90%;
  }
</style>