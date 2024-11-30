<script setup lang="ts"></script>

<template>
  <section>
    <nav>
      <p>{{ $route.fullPath }}</p>
      <RouterLink to="/" class="link" activeClass="active">Main</RouterLink>
      <RouterLink to="/connection" class="link" activeClass="active">
        Connection
      </RouterLink>
      <RouterLink to="/manage" class="link" activeClass="active">
        Manage
      </RouterLink>
    </nav>
    <main>
      <header>common information</header>

      <section id="router">
        <RouterView />
      </section>
    </main>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 4px;
  grid-auto-rows: minmax(100vh, auto);
}

nav {
  background: #eee;
  .link {
    display: block;
    text-decoration: none;
    color: #333;
    &.active {
      color: purple;
    }
  }
  p {
    font-weight: bold;
  }
}

main {
  padding: 8px;
  margin: 8px;
}

header {
  background: #eee;
  padding: 8px;
  min-height: 20px;
}

#router {
  padding: 8px;
}
</style>
