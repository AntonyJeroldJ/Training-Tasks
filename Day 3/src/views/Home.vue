<template>
  <div class="home"></div>
  <h3>Add New Details</h3>
  <AddPet @add-user="addUser" :users="users" />
  <Users @remove-user="removeUser" :users="users" />
</template>


<script>
import Users from "../components/users";
import AddPet from "../components/adduser";

// @ is an alias to /src

export default {
  name: "Home",
  components: { AddPet, Users },
  methods: {
    // addUser(user) {
    //   this.users = [...this.users, user];
    // },

    async addUser(user) {
      const res = await fetch("http://localhost:9000/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      this.users = [...this.users, data];
    },
    // removeUser(id) {
    //   console.log("home", id);
    //   if (confirm("Do you want to Delete ?")) {
    //     this.users = this.users.filter((user) => user.id !== id);
    //   }
    // },
    async removeUser(id) {
      console.log(id);
      if (confirm("Are you sure you want to remove this pet?")) {
        const res = await fetch(`http://localhost:9000/user/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.users = this.users.filter((user) => user.id !== id))
          : alert("Delete failed!");
      }
    },
    async fetchUsers() {
      const res = await fetch("http://localhost:9000/user");
      const data = await res.json();
      console.log(data);
      return data;
    },
    async fetchuser(id) {
      const res = await fetch(`http://localhost:9000/user/${id}`);
      const data = await res.json();
      return data;
    },
  },
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = await this.fetchUsers();
    // this.users = [
    //   {
    //     id: 1,
    //     business_name: "Golden Farmers",
    //     contact_person: "Samantha",
    //     contact_no: "9658989658",
    //     address: "Sun complex,Coimbatore",
    //     postal: "870548",
    //     country: "India",
    //     state: "Tamil Nadu",
    //     city: "Coimbatore",
    //     fax_no: "4589745",
    //     phone_no: "9965878547",
    //     email_id: "sunsunder@gmail.com",
    //     website: "battelfield.com",
    //     second_address: "",
    //   },
    //   {
    //     id: 2,
    //     business_name: "Golden Farmers",
    //     contact_person: "Samantha",
    //     contact_no: "9658989658",
    //     address: "Sun complex,Coimbatore",
    //     postal: "870548",
    //     country: "India",
    //     state: "Tamil Nadu",
    //     city: "Coimbatore",
    //     fax_no: "4589745",
    //     phone_no: "9965878547",
    //     email_id: "sunsunder@gmail.com",
    //     website: "battelfield.com",
    //     second_address: "",
    //   },
    // ];
  },
};
</script>
