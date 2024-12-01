<script setup lang="ts"></script>

<template>
  <section id="wrapper">
    <nav>
      <p class="link">{{ $route.fullPath }}</p>
      <RouterLink to="/" class="link" activeClass="active"> Main </RouterLink>
      <RouterLink to="/connection" class="link" activeClass="active">
        Connection
      </RouterLink>
      <RouterLink to="/manage" class="link" activeClass="active">
        Manage
      </RouterLink>
      <RouterLink to="/monitoring" class="link" activeClass="active">
        Monitoring
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
#wrapper {
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 4px;
  grid-auto-rows: minmax(100vh, auto);
}

nav {
  background: #eee;
  padding: 16px;
  .link {
    display: block;
    text-decoration: none;
    color: #333;
    margin-bottom: 8px;
    &.active {
      color: purple;
    }
  }
  p.link {
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
