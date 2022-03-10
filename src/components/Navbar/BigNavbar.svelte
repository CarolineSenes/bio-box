<script>
    import CartButton from '../Cart/CartButton.svelte'
    import TitleNavbar from '../Navbar/TitleNavBar.svelte'
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <p>nav links</p>
            <TitleNavbar />
            <div class="nav-aside">
                <CartButton />
            </div>
        </div>
    </div>
</nav>