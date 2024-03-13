    export type Event = {
    id: string;
    title: string;
    start: string;
    end: string;
    status: EventStatus;
    weekDay: weekDays;
    scheduleDate: string;
    createdAt: string;
    updatedAt: string;
  };
  
  enum weekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
enum EventStatus {
    Pending,
    Confirmed,
    Canceled
  }