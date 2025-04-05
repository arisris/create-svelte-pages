<script lang="ts">
  let { children } = $props();
</script>

<section class="flex flex-col min-h-screen">
  <nav class="navbar bg-primary">
    <div class="w-full md:max-w-screen-lg mx-auto flex items-center">
      <div class="navbar-start">
        <a href="/">Logo</a>
      </div>
      <ul class="navbar-end">
        Menu
      </ul>
    </div>
  </nav>
  <main class="flex-1">
    <div class="w-full md:max-w-screen-lg mx-auto">
      {@render children?.()}
    </div>
  </main>
  <footer class="bg-secondary">
    <div class="w-full md:max-w-screen-lg mx-auto">
      <span>&copy; 2025 arisris</span>
    </div>
  </footer>
</section>
