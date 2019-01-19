<template lang="html">
  <div class="py-5">
    <header class="sr-only">
      <b-container>
        <h1>{{header}}</h1>
        <p class="lead">
          {{lead}}
        </p>
      </b-container>
    </header>

    <main>
      <b-container>
        <event-list :data="events" />
      </b-container>
    </main>

  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";

export default {
  name: "EventsPage",
  layout: "page",
  components: {
    EventList
  },
  data() {
    return {
      header: "Eventos",
      lead:
        "Queremos mostrate el ambientillo que creamos en Lobo y Mono en nuestros eventos.",
      events: [
        {
          id: 0,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=21",
            srcset: "//picsum.photos/g/700/550?image=21 2x"
          }
        },
        {
          id: 1,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=22",
            srcset: "//picsum.photos/g/700/550?image=22 2x"
          }
        },
        {
          id: 2,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=23",
            srcset: "//picsum.photos/g/700/550?image=23 2x"
          }
        },
        {
          id: 3,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=24",
            srcset: "//picsum.photos/g/700/550?image=24 2x"
          }
        },
        {
          id: 4,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=25",
            srcset: "//picsum.photos/g/700/550?image=25 2x"
          }
        },
        {
          id: 5,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=26",
            srcset: "//picsum.photos/g/700/550?image=26 2x"
          }
        },
        {
          id: 6,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=27",
            srcset: "//picsum.photos/g/700/550?image=27 2x"
          }
        },
        {
          id: 7,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=28",
            srcset: "//picsum.photos/g/700/550?image=28 2x"
          }
        },
        {
          id: 8,
          title: "Título",
          place: "Lugar",
          date: "Fecha",
          img: {
            src: "//picsum.photos/g/350/275?image=20",
            srcset: "//picsum.photos/g/700/550?image=20 2x"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css">
</style>
