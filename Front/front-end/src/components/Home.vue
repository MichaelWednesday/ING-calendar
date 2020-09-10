<template>
  <div class="Home">
    <div class="Today">Today's Meetings</div>

    <div class="todaysMeetings">
      <div v-if="this.meet == 'No meetings today'">No meetings today</div>
      <div v-else>
        <ul>
          <li v-for="meeting in meet" :key="meeting.meeting">{{ meeting.meeting }}</li>
        </ul>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" />
        </div>
        <div class="input">
          <label for="meetingName">Meeting Name</label>
          <input type="text" id="meetingName" v-model.number="meetingName" />
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

    <div class="calendar">
      <app-calendar></app-calendar>
    </div>
  </div>
</template>
<style>
.todaysMeetings {
  width: 500px;
  float: left;
}
</style>

<script>
import MonthlyCalendar from "./MonthlyCalendar.vue";

export default {
  async mounted() {
    await this.$nextTick();
    this.Today();
  },
  components: {
    appCalendar: MonthlyCalendar,
  },
  data: () => {
    return {
      meet: this.meeting,
      date: this.date,
      meetingName: this.meeting,
    };
  },
  methods: {
    async Today() {
      await axios
        .get("http://localhost:3001/today.json")
        .then((response) => (this.meet = response.data))
        .catch((err) => (this.meet = "No meetings today"));

      return this.meet;
    },

    onSubmit() {
      const todaysMeeting = {
        date: this.date,
        meetingName: this.meetingName,
        ///meetings
      };
      axios
        .post("http://localhost:3001/meetings", todaysMeeting)
        .then((res) => console.log(res));
    },
  },
};
</script>


<style>
.calendar {
  width: 500px;
}
</style>