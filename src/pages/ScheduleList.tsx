import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale'; // Import locale directly
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Cấu hình localizer cho `date-fns`
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date()),
  getDay,
  locales: {
    'en-US': enUS, // Use imported locale
  },
});

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const initialEvents: Event[] = [
  { title: 'Doctor A - Morning Shift', start: new Date('2024-09-15T09:00:00'), end: new Date('2024-09-15T12:00:00') },
  { title: 'Doctor B - Evening Shift', start: new Date('2024-09-16T15:00:00'), end: new Date('2024-09-16T18:00:00') },
  // Thêm các sự kiện khác nếu cần
];

const ScheduleList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  // Hàm xử lý khi sự kiện được chọn
  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt('Enter event title');
    if (title) {
      setEvents([...events, { title, start, end }]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lịch Trực</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 600 }}
        views={['month', 'week', 'day']}
      />
    </div>
  );
};

export default ScheduleList;
