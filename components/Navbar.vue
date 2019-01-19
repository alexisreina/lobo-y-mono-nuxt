<template lang="html">
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-toggle target="nav_collapse" />
    <b-navbar-brand to="/">
      {{brand}}
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="nav in navList"
          :class="$style.myNavLink"
          :key="nav.id"
          :to="nav.link"
        >
          {{nav.label}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      brand: "Lobo y Mono",
      navList: [
        {
          id: 0,
          label: "Eventos",
          link: "/eventos"
        },
        {
          id: 1,
          label: "Quienes Somos",
          link: "/quienes-somos"
        },
        {
          id: 2,
          label: "Qué Ofrecemos",
          link: "/que-ofrecemos"
        },
        {
          id: 3,
          label: "Colaboradores",
          link: "/colaboradores"
        },
        {
          id: 4,
          label: "Crea tu evento",
          link: "/crea-tu-evento"
        },
        {
          id: 5,
          label: "Contacto",
          link: "/contacto"
        }
      ]
    };
  }
};
</script>

<style module lang="scss">
.myNavbar {
}

.myNavLink {
  font-size: 0.75rem;
}
</style>
