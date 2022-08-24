<script>
    export let img;
    export let name
    export let continent
</script>


<div class="flex justify-center ">
    <div class="rounded-lg shadow-lg bg-gray-600 max-w-sm flex flex-col justify-between">
      <a href={`/country/${name.toLowerCase()}`}>
        <img class="rounded-t-lg" src={img} alt={name}/>
      </a>
      <div class="p-6">
        <h5 class="text-gray-100 text-xl font-medium mb-2">{name}</h5>
        <p class="text-gray-200 text-base mb-4">
            {continent}
        </p>
        <a href={`/country/${name.toLowerCase()}`} type="button" class=" inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Button</a>
      </div>
    </div>
  </div>