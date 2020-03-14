<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-dark"
      style="min-height: 5rem;"
    >
      <a
        class="navbar-brand mr-5"
        href="/"
        style="color:white; margin-left:10rem; font-size:1.5rem;"
        >NKN</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link  mr-5" href="/" style="color:white;">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/">Hotels</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mr-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Promotions
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mr-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Destinations
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-4" href="/">vouchers</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link " href="/">About Us</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item up">
            <a class="nav-link mr-3 upc" href="/user" style="color:white;"
              >Sign Up</a
            >
          </li>
          <li class="nav-item in">
            <a class="nav-link btn btn-outline-warning" href="/signin"
              >Sign In</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
const $ = require("jquery");
export default {
  name: "navB",
  data() {
    return {
      users: this.$store.state.users
    };
  },
  mounted() {
    this.users.forEach(user => {
      if (user.status == "online") {
        $(".in").hide();
        $(".upc").innerText = `${user.email}`;
        $(".upc").css("width", "1.5rem");
      }
    });
  }
};
</script>
<style lang="scss">
.in {
  color: #ffc107 !important;
  width: 7rem;
}
a {
  color: whitesmoke !important;
}
</style>
