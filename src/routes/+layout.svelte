<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<body class="bg-gray-800 text-gray-100 flex flex-col justify-between min-h-screen">
    <header>
        <Navbar />
    </header>
    
    <main class="mt-16 pt-5 pb-5">
        <slot></slot>
    </main>
    
    <Footer/>
</body>