<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="back"></div>
        <b-card title="Sign In" tag="article" class="col-sm-6 ml-auto">
          <b-card-text class="ct1">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <label for="Email" class="ct">Email address</label>
          <input
            type="email"
            class="form-control form-control-lg mail"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label for="Pass" class="ct my-3">Password</label>
          <input
            type="password"
            class="form-control form-control-lg pass"
            id="Pass"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
          />
          <div class="row col-sm-12">
            <button
              class="btn btn-dark my-3 col-sm-3 in"
              style="color:#ffc107;"
            >
              Sign In
            </button>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
const $ = require("jquery");
export default {
  mounted() {
    $(".card").height($(".back").height());
    $(".in").click(() => {
      var check = $(".mail")
        .val()
        .search("@");
      if (check == -1) {
        alert("Please enter a valid email");
      }
      var users = this.list;
      users.forEach(user => {
        if ($(".mail").val() && $(".pass").val() == user.password) {
          location.href = "/";
          user.status = "online";
        } else {
          alert("user doesnt exist or password is wrong");
          location.reload();
        }
      });
    });
  },
  data() {
    return {
      list: this.$store.state.users
    };
  }
};
</script>
<style lang="scss">
.back {
  background-image: url("https://picsum.photos/600/300/?image=25");
  background-size: 100% 100%;
  background-position: center center;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
.container-fluid {
  margin: 0 !important;
}
.card-title {
  font-size: 2.5rem;
  font-weight: 900;
  font-family: "Times New Roman", Times, serif;
  margin-top: 4rem;
}
.auth {
  height: 100%;
}

.ct1 {
  font-weight: 800;
  color: rgba(0, 0, 0, 0.3);
}
.ct {
  font-size: 1.5rem;
  font-weight: 800;
  font-family: "Times New Roman", Times, serif;
}
</style>
