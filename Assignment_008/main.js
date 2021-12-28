// Assignment_001
let day = "    friday   ";
    day = `${day.trim()[0].toUpperCase()}${day.trim().slice(1)}`;

switch (day) {
  case day = 'Friday':
  case day = 'Saturday':
  case day = 'Sunday':
    console.log('No Appointments Available');
    break;
  case day = 'Monday':
  case day = 'Thursday':
    console.log('Form 10:00 AM To 5:00 PM');
    break;
  case day = 'Tuesday':
    console.log('From 10:00 AM To 6:00 PM');
    break;
  case day = 'Wednesday':
    console.log('From 10: AM To 7:00 PM');
    break;
  default:
    console.log('Its Not A Valid Day');
    break;
}