import React from 'react';
import ScheduleHeader from './ScheduleHeader';
import ScheduleDay from './ScheduleDay';
import ScheduleWeek from './ScheduleWeek';
import ScheduleMonth from './ScheduleMonth';

const Schedule = () => {
  return (
    <div className="schedule">
      <h3>Schedule</h3>
      <ScheduleHeader />
      <div className="schedule-content">
        <ScheduleDay />
        <ScheduleWeek />
        <ScheduleMonth />
      </div>
    </div>
  );
};

export default Schedule;
// a