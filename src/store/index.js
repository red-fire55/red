import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    promoCombo: [
      {
        img: "",
        title: "family safari vacation",
        name: "JW Mariot",
        rate: "5",
        dicount: "true"
      },
      {
        img: "url",
        title: "cde health alert",
        name: "JW Mariot",
        rate: "5",
        dicount: "true"
      },
      {
        img: "url",
        title: "airport hotels",
        name: "JW Mariot",
        rate: "5",
        dicount: "false"
      }
    ],
    users: [
      { email: "ded@yahoo.com", password: "12345", statues: "offline" },
      { email: "ded2@yahoo.com", password: "12345", statues: "offline" }
    ],
    dest: [
      {
        img: "",
        title: "Hoi An"
      },
      {
        img: "",
        title: "Nha trang"
      },
      {
        img: "",
        title: "cat ba"
      },
      {
        img: "",
        title: "Da Nang"
      },
      {
        img: "",
        title: "Ph Quoc"
      }
    ],
    recommended: [
      { title: "Family Safari To The Home Of Gods", rate: "5" },
      { title: "Will The Democrates will Be Able to Reserve ", rate: "2" },
      { title: "Get Around New York with Limousine", rate: "4" },
      { title: "See The Unmatched Beauty Of The Great Lakes", rate: "3" }
    ],
    partners: [
      { img: "https://picsum.photos/600/300/?image=25", name: "" },
      { img: "https://picsum.photos/600/300/?image=25", name: "" },
      { img: "https://picsum.photos/600/300/?image=25", name: "" },
      { img: "https://picsum.photos/600/300/?image=25", name: "" }
    ],
    Blogs: [
      {
        title: "Fro Westlands To Canals And Dams Amesterdam Is Alive",
        sub: "travel health useful medical for good health"
      },
      {
        title: "cost cutting ideas for wedding",
        sub: "Global Resorts Network Grn Puttn"
      },
      {
        title: "Getting Cheap Aircraft For Last Minute Travel",
        sub: "Famil safari to the home of the gods"
      },
      {
        title: "New Ideas For Vacation On water",
        sub: "Will The Democrates Be Able To Reverse  The Online Gambling"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
