<template>
  <form
    @submit="onSubmit"
    style="margin-left: 150px; margin-top: 5px"
    class="p-formgroup-inline"
  >
    <div class="p-field">
      <label for="business_name" class="p-sr-only"></label>
      <InputText
        v-model="business_name"
        id="business_name"
        type="text"
        placeholder="Buisness Name"
      />
    </div>
    <div class="p-field">
      <label for="contact_person" class="p-sr-only"></label>
      <InputText
        v-model="contact_person"
        id="contact_person"
        type="text"
        placeholder="contact_person"
      />
    </div>
    <div class="p-field">
      <label for="contact_no" class="p-sr-only"></label>
      <InputText
        v-model="contact_no"
        id="contact_no"
        type="text"
        placeholder="contact_no"
      />
    </div>
    <div class="p-field">
      <label for="address" class="p-sr-only"></label>
      <InputText
        v-model="address"
        id="address"
        type="text"
        placeholder="address"
      />
    </div>
    <div class="p-field">
      <label for="postal" class="p-sr-only"></label>
      <InputText
        v-model="postal"
        id="postal"
        type="text"
        placeholder="postal"
      />
    </div>
    <div class="p-field">
      <label for="country" class="p-sr-only"></label>
      <InputText
        v-model="country"
        id="country"
        type="text"
        placeholder="country"
      />
    </div>
    <div class="p-field">
      <label for="state" class="p-sr-only"></label>
      <InputText v-model="state" id="state" type="text" placeholder="state" />
    </div>
    <div class="p-field">
      <label for="city" class="p-sr-only"></label>
      <InputText v-model="city" id="city" type="text" placeholder="city" />
    </div>
    <div class="p-field">
      <label for="fax_no" class="p-sr-only"></label>
      <InputText
        v-model="fax_no"
        id="fax_no"
        type="text"
        placeholder="fax_no"
      />
    </div>

    <div class="p-field">
      <label for="email_id" class="p-sr-only">email_id</label>
      <InputText
        v-model="email_id"
        id="email_id"
        type="text"
        placeholder="email_id"
      />
    </div>
    <div class="p-field">
      <label for="phone_no" class="p-sr-only"></label>
      <InputText
        v-model="phone_no"
        id="phone_no"
        type="text"
        placeholder="phone_no"
      />
    </div>
    <div class="p-field">
      <label for="website" class="p-sr-only"></label>
      <InputText
        v-model="website"
        id="website"
        type="text"
        placeholder="website"
      />
    </div>
    <div class="p-field">
      <label for="second_address" class="p-sr-only"></label>
      <InputText
        v-model="second_address"
        id="second_address"
        type="text"
        placeholder="second_address"
      />
    </div>
    <Button type="submit" label="Submit" />
  </form>
</template>

<script>
export default {
  name: "AddPet",
  data() {
    return {
      business_name: "",
      contact_person: "",
      contact_no: "",
      address: "",
      postal: "",
      country: "",
      state: " ",
      city: "",
      fax_no: "",
      phone_no: "",
      email_id: "",
      website: "",
      second_address: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newUser = {
        id: Math.random(),
        business_name: this.business_name,
        contact_person: this.contact_person,
        contact_no: this.contact_no,
        address: this.address,
        postal: this.postal,
        country: this.country,
        state: this.state,
        city: this.city,
        fax_no: this.fax_no,
        phone_no: this.phone_no,
        email_id: this.email_id,
        website: this.website,
        second_address: this.second_address,
      };

      console.log("New user", newUser);
      this.$emit("add-user", newUser);

      this.business_name = "";
      this.contact_person = "";
      this.contact_no = "";
      this.address = "";
      this.postal = "";
      this.country = "";
      this.state = "";
      this.city = "";
      this.fax_no = "";
      this.phone_no = "";
      this.email_id = "";
      this.website = "";
      this.second_address = "";
    },
  },
};
</script>

<style>
</style>