<script>
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
  import {getACountry} from "../../../libs/fetchApi"

  const name = $page.params.name

  let country

  onMount(async () => {
		country = await getACountry(name);
    console.log(country)
	});

</script>

<main>
  {#if country}
    <h1>{country[0].name.common}</h1>
    <div class="container">
      <div class="flag">
        <img src={country[0].flags.svg} alt={country[0].name.common}>
      </div>
      <div class="infos">
        <div class="column mb-8 lg:mb-0">
          <p class="mb-3">
              <span class="font-bold">Native Name: </span>
              {country[0].name.official}
          </p>
          <p class="mb-3">
              <span class="font-bold">Population: </span>
              {country[0].population}
          </p>
          <p class="mb-3">
              <span class="font-bold">Region: </span>
              {country[0].region}
          </p>
          <p class="mb-3">
              <span class="font-bold">Subregion: </span>
              {country[0].subregion}
          </p>
          <p class="mb-3">
              <span class="font-bold">Capital: </span>
              {country[0].capital}
          </p>
      </div>
      </div>
    </div>
  {/if}
</main>

<style>
  main {
      max-width: 90%;
      margin: 0 auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    text-align: center;
    margin: 2rem;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .flag {
    width: 700px;
    max-width: 90%;
    margin: 0 auto;
  }
  img {
    width: 90%;
  }
  .infos {
    width: 500px;
    max-width: 90%;
  }
</style>