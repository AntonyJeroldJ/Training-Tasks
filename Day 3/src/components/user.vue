<template>
  <div class="user">
    <Card
      class="p-col-12 p-md-6 p-lg-3"
      style="margin-top: 2px; margin-left: 1em; width: 25em; height: auto"
    >
      <template #header>
        <img
          src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg?size=626&ext=jpg"
          style="height: 15rem"
        />
      </template>
      <template #title>{{ user.business_name }}</template>
      <template #subtitle>
        {{ user.city }},{{ user.state }}, {{ user.country }}<br />
        <b>{{ user.contact_person }},{{ user.contact_no }}</b
        ><br />
        {{ user.email_id }}
      </template>
      <template #content>
        <a href="https://{{ user.website }}">{{ user.website }}</a>
      </template>
      <template #footer>
        <!-- <Button icon="pi pi-check" label="Update" /> -->
        <Button
          @click="onRemove(user._id)"
          icon="pi pi-times"
          label="Remove"
          class="p-button-danger"
          style="margin-left: 0.5em"
        />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  components: {},
  methods: {
    onRemove(id) {
      console.log("Clicked", id);
      this.$emit("remove-user", id);
    },
  },
};
</script>

<style>
img {
  height: 250px;
  object-fit: cover;
}
</style>