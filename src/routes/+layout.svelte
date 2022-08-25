<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<div class="bg-gray-800 text-gray-100 flex flex-col justify-between min-h-screen">
    <header>
        <Navbar />
    </header>

    <main class="mt-20 pt-5 pb-5 w-11/12 mx-auto">
        <slot></slot>
    </main>

    <Footer/>
</div>
