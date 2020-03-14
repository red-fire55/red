<template>
  <div class="about">
    <navB class="navigate" />
    <!--title of the hotel-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 my-3 hotel">
          <span>Hotels / </span>
          <span>{{ $route.params.title }}</span>
        </div>
      </div>
    </div>
    <!--end tag of title of the hotel-->
    <!--main slider-->
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
    <!--end tag of main slider-->
    <!--left section of the page-->
    <div class="container my-3">
      <div class="row">
        <div class="col-sm-8">
          <b-card
            :title="$route.params.title"
            tag="article"
            class="mb-2 col-sm-12 row"
            style="border:none;"
          >
            <b-card-text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </b-card-text>

            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              class="w-100"
            >
              <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
            <img
              src="https://picsum.photos/1024/480/?image=22"
              alt=""
              style="height :5rem;"
              class="my-3 col-sm-2"
            />
          </b-card>
        </div>
        <!--end tag of left section of the page-->
        <!--right section of the page -->
        <b-card tag="div" class="mb-2 col-sm-4">
          <div class="title">
            <p>Book Your Room Now</p>
          </div>
          <b-card-text class="mr-2 ml-2 row">
            <div class="col-sm-12 ct my-2 mb-2">Tourist Information</div>
            <div class="col-sm-12 ct1 my-2 mb-2">Nationality</div>
            <button class="btn form-control btn-warning col-sm-5 mx-auto">
              Local Tourist
            </button>
            <button class="btn form-control  btn-light col-sm-5  ct1 mx-auto">
              Foreign Tourist
            </button>
            <div class="col-sm-6 ct1 my-2">Check In</div>
            <div class="col-sm-6 ct1 my-2">Time</div>
            <div class="col-sm-6 ct1 mb-2">
              <b-form-datepicker
                locale="en"
                placeholder="Date"
              ></b-form-datepicker>
            </div>
            <div class="col-sm-6 ct1 mb-2">
              <b-form-timepicker
                id="timepicker-placeholder"
                placeholder="Time"
                local="en"
              ></b-form-timepicker>
            </div>
            <div class="col-sm-6 ct1 my-2 ">Check Out</div>
            <div class="col-sm-6 ct1 my-2 ">Time</div>
            <div class="col-sm-6 ct1 mb-2">
              <b-form-datepicker
                locale="en"
                placeholder="Date"
              ></b-form-datepicker>
            </div>
            <div class="col-sm-6 ct1 mb-2">
              <b-form-timepicker
                id="timepicker-placeholder"
                placeholder="Time"
                local="en"
              ></b-form-timepicker>
            </div>
            <div class="col-sm-12 ct my-2 mb-2">Contact's Information</div>
            <labl class="col-sm-12 ct1 my-2 mb-2">First And Last Name</labl>
            <input
              class="col-sm-12 ct1 my-2 mb-2 form-control"
              type="text"
              tag="div"
            />
            <labl class="col-sm-12 ct1 my-2 mb-2">Email</labl>
            <input
              class="col-sm-12 ct1 my-2 mb-2 form-control"
              type="text"
              tag="div"
            />
            <labl class="col-sm-12 ct1 my-2 mb-2">Phone Number</labl>
            <input
              class="col-sm-12 ct1 my-2 mb-2 form-control"
              type="text"
              tag="div"
            />
            <button
              class="btn form-control btn-warning col-sm-12 my-2 mb-2"
              style="color:white"
            >
              Book Room
            </button>
          </b-card-text>
        </b-card>
        <!-- end tag of the right section -->
        <!--some random text tags-->
        <div class="col-sm-8 mb-5 row">
          <span class="ct mb-4">Guests Services Of Sun Travel</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum</span
          >
        </div>
        <div class="col-sm-8 mb-5 row">
          <span class="ct mb-4">Guests Services Of Sun Travel</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum</span
          >
        </div>
        <div class="col-sm-8 mb-5 row">
          <span class="ct mb-4">Guests Services Of Sun Travel</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum</span
          >
        </div>
        <div class="col-sm-12 mb-5 my-5 row">
          <span class="ct mb-4 col-sm-12">Similar Hotels</span>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            img-height="200rem"
            tag="article"
            class="mb-2 mx-auto"
            style="max-width: 15rem;"
          >
            <b-card-text class="mr-2 ml-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            img-height="200rem"
            tag="article"
            class="mb-2 mx-auto"
            style="max-width: 15rem;"
          >
            <b-card-text class="mr-2 ml-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            img-height="200rem"
            tag="article"
            class="mb-2 mx-auto"
            style="max-width: 15rem;"
          >
            <b-card-text class="mr-2 ml-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            img-height="200rem"
            tag="article"
            class="mb-2 mx-auto"
            style="max-width: 15rem;"
          >
            <b-card-text class="mr-2 ml-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navB from "../components/NavBar";
const $ = require("jquery");
export default {
  components: {
    navB
  },
  data() {
    return {
      title: this.$store.state.promoCombo
    };
  },
  mounted() {
    $(".carousel-item").height(
      window.height - ($(".navigate").innerHeight() + $(".hotel").innerHeight())
    );
  }
};
</script>
<style lang="scss">
.title {
  color: whitesmoke;
  background-color: black;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  border-top-right-radius: 2% !important;
  border-top-left-radius: 2% !important;
}
.card {
  padding: 0px !important;
  border-radius: 2% !important;
}
.card-body {
  padding: 0px !important;
  align-content: center center;
  border-radius: 2% !important;
}
.ct {
  font-weight: 800;
}
.ct1 {
  font-weight: 800;
  color: rgba(0, 0, 0, 0.3);
}
</style>
