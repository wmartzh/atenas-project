    export type Event = {
    id: number;
    title: string;
    start: string;
    end: string;
    Status: 'Pending' | 'Confirmed' | 'Canceled';
    WeekDay: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    scheduleDate: string;
    createdAt: string;
    updatedAt: string;
  };
  
  // enum weekDays {
  //   Monday,
  //   Tuesday,
  //   Wednesday,
  //   Thursday,
  //   Friday,
  //   Saturday,
  //   Sunday
  // }
  
// enum EventStatus {
//     Pending,
//     Confirmed,
//     Canceled
//   }