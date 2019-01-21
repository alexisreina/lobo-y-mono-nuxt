<template lang="html">
  <footer class="bg-light">
    <b-container class="py-3">
      <!-- social media -->
      <div class="py-3 d-flex flex-row justify-content-center">
        <b-link
          v-for="social in rrss"
          :key="social.id"
          :href="social.url"
          class="d-flex flex-column flex-sm-row justify-content-center align-items-center mx-3"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >

          <b-img
            :src="social.icon"
            :blank="!social.icon"
            blank-color="#777"
            rounded="circle"
            width="32"
            height="32"
            class="mb-1 mb-sm-0 mr-sm-2"
          />

          <span>
            {{social.label}}
          </span>
        </b-link>
      </div>
      <!-- /social media -->

      <hr class="mb-4">

      <!-- footer navigation -->
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-row>
            <b-col
              v-for="menu in menus"
              :key="menu.id"
              md="6"
              lg="3"
            >
              <h4 class="h5">
                {{menu.title}}
              </h4>

              <ul class="list-unstyled">
                <li
                  v-for="item in menu.list"
                  :key="item.id"
                >
                  <b-link
                    v-if="item.external"
                    :href="item.url"
                  >
                    {{item.label}}
                  </b-link>

                  <b-link
                    v-else
                    :to="item.url"
                  >
                    {{item.label}}
                  </b-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- footer navigation -->
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    rrss: {
      type: Array,
      required: true
    },
    menus: {
      type: Array,
      required: true
    }
  }
};
</script>
