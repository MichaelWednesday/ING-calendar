<template>
  <div class="MonthlyCalendar">
    <div class="monthButtons">
      <div class="right">
        <button type="button" class="btn btn-dark" v-on:click="test">Previous</button>
      </div>
      <div class="middle">
        <h4>{{ this.Month }}</h4>
      </div>

      <div class="left">
        <button type="button" class="btn btn-dark">Next</button>
      </div>
    </div>

    <table>
      <tr>
        <th id="Sun">Sun</th>
        <th id="Mon">Mon</th>
        <th id="Tue">Tue</th>
        <th id="Wed">Wed</th>
        <th id="Thu">Thu</th>
        <th id="Fri">Fri</th>
        <th id="Sat">Sat</th>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 1 SUN -->
          <div id="tableTop1-0" class="tableTop"></div>
          <div id="tableMiddle1-0" class="tableMiddle"></div>
          <div id="tableButtom1-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 MON -->
          <div id="tableTop1-1" class="tableTop"></div>
          <div id="tableMiddle1-1" class="tableMiddle"></div>
          <div id="tableButtom1-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 TUE -->
          <div id="tableTop1-2" class="tableTop"></div>
          <div id="tableMiddle1-2" class="tableMiddle"></div>
          <div id="tableButtom1-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 WED -->
          <div id="tableTop1-3" class="tableTop"></div>
          <div id="tableMiddle1-3" class="tableMiddle"></div>
          <div id="tableButtom1-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 THU -->
          <div id="tableTop1-4" class="tableTop"></div>
          <div id="tableMiddle1-4" class="tableMiddle"></div>
          <div id="tableButtom1-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 FRI -->
          <div id="tableTop1-5" class="tableTop"></div>
          <div id="tableMiddle1-5" class="tableMiddle"></div>
          <div id="tableButtom1-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 SAT -->
          <div id="tableTop1-6" class="tableTop"></div>
          <div id="tableMiddle1-6" class="tableMiddle"></div>
          <div id="tableButtom1-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 2 SUN -->
          <div id="tableTop2-0" class="tableTop"></div>
          <div id="tableMiddle2-0" class="tableMiddle"></div>
          <div id="tableButtom2-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 MON -->
          <div id="tableTop2-1" class="tableTop"></div>
          <div id="tableMiddle2-1" class="tableMiddle"></div>
          <div id="tableButtom2-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 TUES -->
          <div id="tableTop2-2" class="tableTop"></div>
          <div id="tableMiddle2-2" class="tableMiddle"></div>
          <div id="tableButtom2-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 WED -->
          <div id="tableTop2-3" class="tableTop"></div>
          <div id="tableMiddle2-3" class="tableMiddle"></div>
          <div id="tableButtom2-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 THU -->
          <div id="tableTop2-4" class="tableTop"></div>
          <div id="tableMiddle2-4" class="tableMiddle"></div>
          <div id="tableButtom2-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 FRI -->
          <div id="tableTop2-5" class="tableTop"></div>
          <div id="tableMiddle2-5" class="tableMiddle"></div>
          <div id="tableButtom2-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 SAT -->
          <div id="tableTop2-6" class="tableTop"></div>
          <div id="tableMiddle2-6" class="tableMiddle"></div>
          <div id="tableButtom2-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 3 SUN -->
          <div id="tableTop3-0" class="tableTop"></div>
          <div id="tableMiddle3-0" class="tableMiddle"></div>
          <div id="tableButtom3-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 MON -->
          <div id="tableTop3-1" class="tableTop"></div>
          <div id="tableMiddle3-1" class="tableMiddle"></div>
          <div id="tableButtom3-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 TUES -->
          <div id="tableTop3-2" class="tableTop"></div>
          <div id="tableMiddle3-2" class="tableMiddle"></div>
          <div id="tableButtom3-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 WED -->
          <div id="tableTop3-3" class="tableTop"></div>
          <div id="tableMiddle3-3" class="tableMiddle"></div>
          <div id="tableButtom3-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 THU -->
          <div id="tableTop3-4" class="tableTop"></div>
          <div id="tableMiddle3-4" class="tableMiddle"></div>
          <div id="tableButtom3-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 FRI -->
          <div id="tableTop3-5" class="tableTop"></div>
          <div id="tableMiddle3-5" class="tableMiddle"></div>
          <div id="tableButtom3-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 SAT -->
          <div id="tableTop3-6" class="tableTop"></div>
          <div id="tableMiddle3-6" class="tableMiddle"></div>
          <div id="tableButtom3-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 4 SUN -->
          <div id="tableTop4-0" class="tableTop"></div>
          <div id="tableMiddle4-0" class="tableMiddle"></div>
          <div id="tableButtom4-0" class="tableButtom"></div>
        </td>
        <td id="4Mon">
          <!-- week 4 MON -->
          <div id="tableTop4-1" class="tableTop"></div>
          <div id="tableMiddle4-1" class="tableMiddle"></div>
          <div id="tableButtom4-1" class="tableButtom"></div>
        </td>
        <td id="4Tue">
          <!-- week 4 TUE -->
          <div id="tableTop4-2" class="tableTop"></div>
          <div id="tableMiddle4-2" class="tableMiddle"></div>
          <div id="tableButtom4-2" class="tableButtom"></div>
        </td>
        <td id="4Wed">
          <!-- week 4 WED -->
          <div id="tableTop4-3" class="tableTop"></div>
          <div id="tableMiddle4-3" class="tableMiddle"></div>
          <div id="tableButtom4-3" class="tableButtom"></div>
        </td>
        <td id="4Thu">
          <!-- week 4 THU -->
          <div id="tableTop4-4" class="tableTop"></div>
          <div id="tableMiddle4-4" class="tableMiddle"></div>
          <div id="tableButtom4-4" class="tableButtom"></div>
        </td>
        <td id="Fri">
          <!-- week 4 FRI -->
          <div id="tableTop4-5" class="tableTop"></div>
          <div id="tableMiddle4-5" class="tableMiddle"></div>
          <div id="tableButtom4-5" class="tableButtom"></div>
        </td>
        <td id="4Sat">
          <!-- week 4 SAT -->
          <div id="tableTop4-6" class="tableTop"></div>
          <div id="tableMiddle4-6" class="tableMiddle"></div>
          <div id="tableButtom4-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 5 SUN -->
          <div id="tableTop5-0" class="tableTop"></div>
          <div id="tableMiddle5-0" class="tableMiddle"></div>
          <div id="tableButtom5-0" class="tableButtom"></div>
        </td>
        <td id="5Mon">
          <!-- week 5 Mon -->
          <div id="tableTop5-1" class="tableTop"></div>
          <div id="tableMiddle5-1" class="tableMiddle"></div>
          <div id="tableButtom5-1" class="tableButtom"></div>
        </td>
        <td id="5Tue">
          <!-- week 5 TUE -->
          <div id="tableTop5-2" class="tableTop"></div>
          <div id="tableMiddle5-2" class="tableMiddle"></div>
          <div id="tableButtom5-2" class="tableButtom"></div>
        </td>
        <td id="5Wed">
          <!-- week 5 WED -->
          <div id="tableTop5-3" class="tableTop"></div>
          <div id="tableMiddle5-3" class="tableMiddle"></div>
          <div id="tableButtom5-3" class="tableButtom"></div>
        </td>
        <td id="5Thu">
          <!-- week 5 THU -->
          <div id="tableTop5-4" class="tableTop"></div>
          <div id="tableMiddle5-4" class="tableMiddle"></div>
          <div id="tableButtom5-4" class="tableButtom"></div>
        </td>
        <td id="5Fri">
          <!-- week 5 FRI -->
          <div id="tableTop5-5" class="tableTop"></div>
          <div id="tableMiddle5-5" class="tableMiddle"></div>
          <div id="tableButtom5-5" class="tableButtom"></div>
        </td>
        <td id="5Sat">
          <!-- week 5 SAT -->
          <div id="tableTop5-6" class="tableTop"></div>
          <div id="tableMiddle5-6" class="tableMiddle"></div>
          <div id="tableButtom5-6" class="tableButtom"></div>
        </td>
      </tr>
      <td id="Sunday">
        <!-- week 6 SUN -->
        <div id="tableTop6-0" class="tableTop"></div>
        <div id="tableMiddle6-0" class="tableMiddle"></div>
        <div id="tableButtom6-0" class="tableButtom"></div>
      </td>
      <td id="5Mon">
        <!-- week 6 Mon -->
        <div id="tableTop6-1" class="tableTop"></div>
        <div id="tableMiddle6-1" class="tableMiddle"></div>
        <div id="tableButtom6-1" class="tableButtom"></div>
      </td>
      <td id="5Tue">
        <!-- week 6 TUE -->
        <div id="tableTop6-2" class="tableTop"></div>
        <div id="tableMiddle6-2" class="tableMiddle"></div>
        <div id="tableButtom6-2" class="tableButtom"></div>
      </td>
      <td id="5Wed">
        <!-- week 6 WED -->
        <div id="tableTop6-3" class="tableTop"></div>
        <div id="tableMiddle6-3" class="tableMiddle"></div>
        <div id="tableButtom6-3" class="tableButtom"></div>
      </td>
      <td id="5Thu">
        <!-- week 6 THU -->
        <div id="tableTop6-4" class="tableTop"></div>
        <div id="tableMiddle6-4" class="tableMiddle"></div>
        <div id="tableButtom6-4" class="tableButtom"></div>
      </td>
      <td id="5Fri">
        <!-- week 6 FRI -->
        <div id="tableTop6-5" class="tableTop"></div>
        <div id="tableMiddle6-5" class="tableMiddle"></div>
        <div id="tableButtom6-5" class="tableButtom"></div>
      </td>
      <td id="5Sat">
        <!-- week 6 SAT -->
        <div id="tableTop6-6" class="tableTop"></div>
        <div id="tableMiddle6-6" class="tableMiddle"></div>
        <div id="tableButtom6-6" class="tableButtom"></div>
      </td>
    </table>
  </div>
</template>

<script>
let CurrentDate = new Date();
export default {
  mounted: function () {
    this.testo1();
  },

  data: () => {
    return {
      meeting: this.meeting,
      Month: this.Month,
    };
  },
  methods: {
    test() {
      CurrentDate.setMonth(CurrentDate.getMonth() - 1);
      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });

      //console.log(CurrentDate.getMonth());
      return this.Month;
    },
    testo1() {
      CurrentDate.setMonth(CurrentDate.getMonth());
      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });

      //console.log(CurrentDate.getMonth());
      return this.Month;
    },
  },
  computed: {},
  props: {},
};
</script>
<style>
.right {
  float: left;
  height: 45px;
}

.left {
  float: left;
  height: 45px;
}
.middle {
  float: left;
  height: 45px;
}
.monthButtons {
  width: 400px;
  height: 45px;
  border: 2px solid red;
}
</style>
