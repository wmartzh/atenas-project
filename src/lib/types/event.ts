<<<<<<< HEAD
    export type Event = {
=======

  // Create the event type with status as an enum
  export type Event = {
>>>>>>> main
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
  
<<<<<<< HEAD
=======
  // Define the weekDays enum
>>>>>>> main
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