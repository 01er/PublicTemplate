<template>
  <!-- Home slider -->
  <section class="p-0">
    <div class="slide-1 home-slider">
      <div>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{item.title}}</h4>
                          <h1>{{item.subtitle}}</h1>
                          <a href="#" class="btn btn-solid black-btn">shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Home slider end -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'special offer',
          subtitle: 'men\'s shoes',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'special offer',
          subtitle: 'women\'s shoes',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'on sale',
          subtitle: 'latest shoes',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
