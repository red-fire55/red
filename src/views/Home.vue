<template>
  <div class="home">
    <!--navbar-->
    <navB class="navigate" />
    <!--a div that should contain the background-->
    <div class="background">
      <!--mid nav -->
      <div class="container">
        <div class="row">
          <nav
            class="navbar navbar-expand-lg navbar-light bg-light col-sm-9 mx-auto"
            style="margin-top:40%;"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active mr-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="btnGroupAddon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control nav-link form-control"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </div>
              </li>
              <li class="nav-item active mr-3">
                <div class="input-group">
                  <b-form-datepicker
                    locale="en"
                    placeholder="Date"
                    style="min-width: 10rem;"
                  ></b-form-datepicker>
                </div>
              </li>
              <li class="nav-item active mr-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="btnGroupAddon">
                      <i class="fas fa-user-alt"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control nav-link form-control"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </div>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link btn btn-dark "
                  style="color:#ffc107 !important; width:10rem;"
                  >Search</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!--end of the background div-->
    <div class="container my-5">
      <div class="row">
        <!--bes promotions title-->
        <ul class="nav col-sm-12">
          <li class="nav-item mr-auto">
            <div
              class="nav-link"
              style="font-size:2rem; color:black; font-weight:900;"
            >
              Best Promotions
            </div>
          </li>
          <li class="nav-item mx-auto row my-3">
            <a class="nav-link link btn">
              combo
            </a>
            <a class="nav-link link btn">
              Hotels
            </a>
          </li>
          <li class="nav-item ml-auto my-3">
            <a class="nav-link link btn" style="opacity:.7;">
              view all
            </a>
          </li>
        </ul>
        <!--end tag of promotion title -->
        <!--sale promos cards -->
        <b-card
          title=""
          img-src="../assets/tst.png"
          img-alt=""
          img-top
          tag="article"
          class="mb-2 col-sm-3 mx-auto"
          v-for="combo in promo"
          v-bind:key="combo.discount"
        >
          <div v-if="combo.dicount == 'true'">
            <router-link class="c1" :to="`/auth/${combo.title}`">{{
              combo.title
            }}</router-link>

            <div variant="primary" class="form-control">
              {{ combo.name }} {{ combo.rate }}
            </div>
          </div>
        </b-card>
        <!--end of promotions tag -->
        <!-- destination title-->
        <ul class="nav col-sm-12">
          <li class="nav-item mr-auto">
            <div
              class="nav-link"
              style="font-size:2rem; color:black; font-weight:900;"
            >
              Destinations
            </div>
          </li>
          <li class="nav-item mx-auto row my-3">
            <a class="nav-link link btn">
              vietnam
            </a>
            <a class="nav-link link btn">
              myanmar
            </a>
            <a class="nav-link link btn">
              thailand
            </a>
            <a class="nav-link link btn">
              philipines
            </a>
          </li>
          <li class="nav-item ml-auto my-3">
            <a class="nav-link link btn" style="opacity:.7;">
              view all
            </a>
          </li>
        </ul>
        <!--end tag of destination title -->
        <div class="slider">
          <b-card
            overlay
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Card Image"
            v-for="destination in destinations"
            :key="destination.title"
          >
            <b-card-text class="card-t">
              {{ destination.title }}
            </b-card-text>
          </b-card>
        </div>
        <!--sale destination cards -->

        <!--end tag of destinations -->
        <!-- recommended title-->
        <ul class="nav col-sm-12 mt-5">
          <li class="nav-item mr-auto">
            <div
              class="nav-link"
              style="font-size:2rem; color:black; font-weight:900;"
            >
              RECOMMENEDS FOR YOU
            </div>
          </li>
          <li class="nav-item mx-auto row my-3">
            <a class="nav-link link btn">
              Hotels/Resorts
            </a>
            <a class="nav-link link btn">
              Combo
            </a>
            <a class="nav-link link btn">
              Voucher
            </a>
          </li>
          <li class="nav-item ml-auto my-3">
            <a class="nav-link link btn" style="opacity:.7;">
              view all
            </a>
          </li>
        </ul>
        <!--end tag of recommended title -->
        <!--recommended titles-->
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-left
          img-width="50%"
          tag="article"
          class="mb-2 col-sm-5 mx-auto"
          v-for="hot in recommended"
          :key="hot.title"
        >
          <div class="ct1">{{ hot.title }}</div>
          <b-card-text>
            {{ hot.rate }}
            <br />
            <div style="opacity:.7;">Hotel Services</div>
          </b-card-text>

          <b-button variant="light">Details</b-button>
        </b-card>
        <!--end tag of recommended -->
        <!-- Our Parteners title-->
        <ul class="nav col-sm-12 mt-5">
          <li class="nav-item mr-auto">
            <div
              class="nav-link"
              style="font-size:2rem; color:black; font-weight:900;"
            >
              Our Partners
            </div>
          </li>
        </ul>
        <!--end tag of parteners title -->

        <img
          :src="partener.img"
          class="col-sm-3 mt-3"
          v-for="partener in partners"
          :key="partener.name"
        />
        <!--end tag of parteners -->
        <!-- Travel Blog title-->
        <ul class="nav col-sm-12 mt-5">
          <li class="nav-item mr-auto">
            <div
              class="nav-link"
              style="font-size:2rem; color:black; font-weight:900;"
            >
              travel Blog
            </div>
          </li>
          <li class="nav-item mx-auto row my-3">
            <a class="nav-link link btn">
              Reviews
            </a>
            <a class="nav-link link btn">
              Destinations
            </a>
            <a class="nav-link link btn">
              HandBook
            </a>
          </li>
          <li class="nav-item ml-auto my-3">
            <a class="nav-link link btn" style="opacity:.7;">
              view all
            </a>
          </li>
        </ul>
        <!--end tag of Travel Blog title -->
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 mx-auto"
          style="max-width : 15rem;"
          v-for="blog in blogs"
          :key="blog.title"
        >
          <div class="c1">{{ blog.title }}</div>
          <b-card-text>
            {{ blog.sub }}
          </b-card-text>
        </b-card>
      </div>
    </div>
    <!--end of container -->
    <div class="container-fluid bg-dark" style="min-height:15rem;">
      <div class="row">
        <div class="col-sm-3 row ml-2 mt-5 mx-auto">
          <div class="col-sm-12 bt">
            NKN
          </div>
          <div class="col-sm-12 bt">
            <i class="fas fa-map-marker-alt"></i> 302 Willburn Mountain Apt.518
          </div>
          <div class="col-sm-12 bt">
            <i class="fas fa-phone-square"></i> 685-290-5343
          </div>
          <div class="col-sm-12 bt">
            <i class="fas fa-envelope-square"></i> angel_olson@gmail.com
          </div>
        </div>
        <div class="col-sm-3 row mt-5 mx-auto">
          <div class="col-sm-12 bt">
            Our Services
          </div>
          <ul class="col-sm-12 row mt-5">
            <li class="col-sm-12 bt">
              Hotels/Resorts
            </li>
            <li class="col-sm-12 bt">
              Combo
            </li>
            <li class="col-sm-12 bt">
              Voucher
            </li>
            <li class="col-sm-12 bt">
              Promotions
            </li>
            <li class="col-sm-12 bt">
              Destinations
            </li>
          </ul>
        </div>
        <div class="col-sm-3 row mt-5 mx-auto">
          <div class="col-sm-12 bt">
            About Us
          </div>
          <ul class="col-sm-12 row mt-5">
            <li class="col-sm-12 bt">
              Contact US
            </li>
            <li class="col-sm-12 bt">
              About Us
            </li>
            <li class="col-sm-12 bt">
              Blog
            </li>
            <li class="col-sm-12 bt">
              Partener
            </li>
            <li class="col-sm-12 bt">
              Sign In/Sign Up
            </li>
          </ul>
        </div>
        <div class="col-sm-3 row mt-5 mx-auto">
          <input type="text" class="form-control col-sm-9" />
          <span class="col-sm-3 bg-warning btn form-control">Sent</span>
          <div class="col-sm-12 mr-auto">Follow Us</div>
          <div class="col-sm-12 mr-auto">
            <i
              class="fab fa-twitter-square mr-2"
              style="font-size: 3rem; color:white"
            ></i>
            <i
              class="fab fa-youtube-square mr-2"
              style="font-size: 3rem; color:white"
            ></i>
            <i
              class="fab fa-facebook-square mr-2"
              style="font-size: 3rem; color:white"
            ></i>
            <i
              class="fab fa-instagram-square mr-2"
              style="font-size: 3rem; color:white"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navB from "../components/NavBar";
const $ = require("jquery");
export default {
  data() {
    return {
      promo: this.$store.state.promoCombo,
      title: this.$router.title,
      recommended: this.$store.state.recommended,
      partners: this.$store.state.partners,
      blogs: this.$store.state.Blogs,
      destinations: this.$store.state.dest
    };
  },
  name: "Home",
  components: { navB },
  mounted() {
    $(".card-subtitle").attr("class", "card-subtitle");
    $(".img-t").width($(".img").width());
    $(".background").height(window.innerHeight - $(".navigate").innerHeight());
    $(".slider").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
};
</script>
<style lang="scss">
.card-t {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  color: black !important;
  opacity: 0.9;
  margin-top: 90%;
  text-align: center;
  min-height: 2rem !important;
  background-color: beige;
}
.img {
  position: absolute;
  z-index: -1;
}
.background {
  background-color: black;
  z-index: -1;
}
.link {
  font-size: 1rem;
  color: black !important;
  font-weight: 900;
}
.bold {
  font-size: 1.5rem;
  font-weight: 800;
}
.c1 {
  font-weight: 800;
  color: black !important;
}
.card {
  padding: 0 !important;
}
.card-title {
  font-weight: 800;
  color: black !important;
}
.bt {
  color: blanchedalmond !important;
}
.slider {
  max-width: 1000px;
  margin: 0 auto;
}
.slick-slide {
  margin: 0 5px;
}
.slick-list {
  margin: 0px -5px 0px -5px;
}
button.slick-next,
button.slick-next:hover {
  position: absolute;
  top: 41%;
  right: 54px;
  width: 47px;
  height: 75px;
  background-image: url("http://maggiesadler.com/wp-content/uploads/2015/10/left-right-arrow.png");
  background-size: 95px;
}
button.slick-prev,
button.slick-prev:hover {
  position: absolute;
  top: 41%;
  left: 15px;
  z-index: 1;
  width: 47px;
  height: 75px;
  background-image: url("http://maggiesadler.com/wp-content/uploads/2015/10/left-right-arrow.png");
  background-size: 95px;
  background-position-x: right;
}
.slick-prev:before,
.slick-next:before {
  font-size: 70px;
  color: #ea8496;
  line-height: inherit;
  font-weight: bold;
}
.slider img {
  height: 324px;
}

/* Slick Slider Styles -- Provided by https://kenwheeler.github.io/slick/ */
/* Slider */
.slick-slider {
  position: relative;

  display: block;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;

  display: block;
}
.slick-track:before,
.slick-track:after {
  display: table;

  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;

  height: auto;

  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
@charset 'UTF-8';
/* Slider */
.slick-loading .slick-list {
  background: #fff
    url("http://maggiesadler.com/wp-content/uploads/2015/10/ajax-loader.gif")
    center center no-repeat;
}

/* Icons */
@font-face {
  font-family: "slick";
  font-weight: normal;
  font-style: normal;

  src: url("file:///C:/Users/msadler/Desktop/slick-1.5.7/slick/fonts/slick.eot");
  src: url("file:///C:/Users/msadler/Desktop/slick-1.5.7/slick/fonts/slick.eot?#iefix")
      format("embedded-opentype"),
    url("file:///C:/Users/msadler/Desktop/slick-1.5.7/slick/fonts/slick.woff")
      format("woff"),
    url("file:///C:/Users/msadler/Desktop/slick-1.5.7/slick/fonts/slick.ttf")
      format("truetype"),
    url("file:///C:/Users/msadler/Desktop/slick-1.5.7/slick/fonts/slick.svg#slick")
      format("svg");
}
/* Arrows */
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  margin-top: -10px;
  padding: 0;

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: white;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}
[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: "";
}
[dir="rtl"] .slick-prev:before {
  content: "";
  font-weight: bold;
  font-size: 20px;
}

.slick-next {
  right: -25px;
}
[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: "";
}
[dir="rtl"] .slick-next:before {
  content: "";
}

/* Dots */
.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -45px;

  display: block;

  width: 100%;
  padding: 0;

  list-style: none;

  text-align: center;
}
.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}
.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: "•";
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
</style>
