<template>
  <div class='demo-app'>
    <div class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2>사용지침</h2>
        <ul>
          <li id="li2">원하는 날짜를 선택하면 새 이벤트를 생성할수 있습니다.</li>
          <li id="li2">일정을 드래그, 드롭하여 크기를 조정할수 있습니다.</li>
          <li id="li2">일정을 지우고 싶으면 일정을 클릭하면 됩니다.</li>
          <li id="li2">월/주/일 단위로 보기가 가능하며 주,일 단위 달력에서 시간 설정가능합니다.</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked='calendarOptions.weekends'
            @change='handleWeekendsToggle'
          />
          주말 포함
        </label>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2>모든 일정 ({{ currentEvents.length }})</h2>
        <ul>
          <li id="li2" v-for='event in currentEvents' :key='event.id'>
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { mapGetters, mapState,mapActions } from "vuex";

export default {
  components: {
    FullCalendar
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // 클릭해서 일정 추가 기능 플러그인
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
      },
      currentEvents: []
    }
  },
  methods: {
    ...mapActions(["Create_Schedule"]),
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    
    handleDateSelect(selectInfo) {
      let title = prompt('일정의 제목을 입력하세요')
      let calendarApi = selectInfo.view.calendar
      // calendarApi.unselect() // clear date selection
      if (title) {
        calendarApi.addEvent({
          
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
        const data ={
          workSchedule : title,
          date:selectInfo.startStr,
          companyId: this.$store.state.groupData,
          memberId: this.$store.state.loginData.Id
        }
        this.$store.dispatch('Create_Schedule',data);

      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`이 일정을 삭제하시겠습니까? '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    created() {
       this.$store.dispatch('Fetch_Schedule',); 
    },
    handleEvents(events) {
      this.currentEvents = events
    }
  },
  computed: {
    ...mapState(["userInfo"]),
    ...mapGetters(['']),
  },
  
}
</script>

<style lang='css'>
h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
#li2 {
  margin: 1.5em 0;
  padding: 0;
}
b { /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  margin-top: 40px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>