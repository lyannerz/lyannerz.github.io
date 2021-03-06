<template>
  <transition name="fade">
    <div v-if="show">
      <div class="container tight paddingBottom small">
        <div class="content paddingBottom">
          <h1 class="header marginBottom">About me</h1>
          <p class="message marginBottom large">
            {{"Hi! I'm"}}
            <b>{{'Lyanna'}}</b>
            {{', currently designing at BirdEye.'}}
            <br /><br />
            {{"I'm extremely grateful to be able to learn and tackle creative challenges"}}
            <br />
            {{'in my current role.'}}
            {{'I love the end-to-end process in creating innovative,'}} 
            <br />
            {{'simple products and enjoy learning about all the small details which'}}
            <br />
            {{'are often overlooked. '}}
            <br /><br />
            {{'In my free time, I play the guitar/bass, doodle, game, and hang out with'}}
            <br />
            <span class="strikethrough">dogs</span>
            {{'friends.'}}
          </p>
          <div class="marginBottom large" style="display: flex;">
            <a class="hover hover3 marginRight" style="font-size: 18px;" href="mailto:lyannaho0@gmail.com" target="_top">Contact</a>
          </div>
          <div class="grid marginBottom small">
            <img
              class="item-img hover"
              :src="item.imgSrc"
              :alt="item.class"
              :key="index"
              v-on:click="changeModal(item)"
              v-for="(item, index) in ABOUT_IMGS"
            />
          </div>
        </div>
        <!-- <div class="contact-me-wrapper">
          <router-link class="contact-me hover marginBottom large" to="/portfolio">
            Go to Portfolio
          </router-link>
        </div> -->
      </div>
      <transition name="fadeNoDelay">
        <Modal v-if="isModalOpen" :onClose="closeModal">
          <img
            class="modal-img"
            :src="currentEntry.imgSrc"
            :alt="currentEntry.class"
            v-on:click="closeModal"
          />
        </Modal>
      </transition>
    </div>
  </transition>
</template>

<script>
import Modal from '@/components/modal';

import {ABOUT_IMGS} from '@/defs';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      // state
      show: false,
      isModalOpen: false,
      currentEntry: ABOUT_IMGS.find((item) =>
        item.entry === this.$route.hash.slice(1)
      ),

      // assets
      ABOUT_IMGS,
    };
  },
  methods: {
    changeModal: function(item) {
      this.isModalOpen = true;
      this.currentEntry = item;
      window.location.hash = item.entry;
    },
    closeModal: function() {
      this.isModalOpen = false;
      this.currentEntry = null;
      history.pushState(null, null, ' ');
    },
    track() {
      this.$ga.page('/about');
    },
  },
  mounted() {
    this.show = true;
    this.track();

    if (this.currentEntry) {
      this.isModalOpen = true;
    }
  },
  beforeRouteUpdate({ hash }, from, next) {
    if (hash) {
      this.currentEntry = ABOUT_IMGS.find(item =>
        item.entry === hash.slice(1));
      this.isModalOpen = true;
    } else {
      this.currentEntry = null;
      this.isModalOpen = false;
    }
    next();
  },
}
</script>

<style scoped>
.content {
  padding-top: 100px;
  width: 70%;
}

.header {
  font-size: 36px;
  font-weight: 800;
}

.message {
  font-size: 20px;
  line-height: 1.7em;
  vertical-align: bottom;
}

.strikethrough {
  text-decoration: line-through;
}

.grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 685px;
}

.item-img {
  border-radius: 5px;
  display: inline-block;
  object-fit: contain;
  height: 275px;
  cursor: pointer;
}

.contact-me-wrapper {
  text-align: center;
}

.contact-me {
  background-color: var(--light-blue-color);
  border-radius: 50px;
  padding: 14px 28px;
}

.modal-img {
  border-radius: 10px;
  height: 100%;
  cursor: pointer;
  width: 100%;
  vertical-align: top;
}

@media (max-width: 880px) {
  .content {
    width: 100%;
  }

  .grid {
    display: block;
    width: 100%;
  }

  .item-img {
    display: block;
    height: auto;
    margin: auto;
    margin-bottom: 40px;
    width: 200px;
  }
}

@media (max-width: 580px) {
  .content {
    padding-top: 50px;
  }
}
</style>
