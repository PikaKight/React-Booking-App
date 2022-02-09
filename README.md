# React-Booking-App
The goal of this project is to use React to create a booking system.

## Booking
Using inputs to take the Date, time and number of hours. 
The goal is to eventually use Google Calendar API to add the time to a calendar.

## Price
Using the given info that weekdays are $100/hour and weekends are $150/hour, the price can be estimated.
The booking infos are added to a JSON object called formData. Then creating a function call calcCost(), we can find the cost. 
The function takes the number of hours from the input. Also, it turns the date from a string to a Date object and using .getDay() it finds the day of the week, returns a number from 0-6. (Monday = 0 and Sunday = 6)
Finally, using conditionals, it checks it is a weekday or weekend (0-4 is weekday, 5-6 is weekend) and multiples the hours by the corresponding base cost. 