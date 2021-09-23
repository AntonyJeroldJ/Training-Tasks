  <template>
  <div class="p-grid">
    <div v-for="user in users" :key="user.id">
      <!-- <h2>{{ user.email_id }}kk</h2> -->
      <User @remove-user="$emit('remove-user', user._id)" :user="user" />
    </div>
  </div>
</template>
  
  <script>
import User from "./user";

export default {
  props: {
    users: Array,
  },
  components: { User },
  emits: ["remove-user"],
};
</script>
  
  <style>
</style>