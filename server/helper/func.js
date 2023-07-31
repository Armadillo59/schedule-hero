
function commonAvailability(participants) {
    // declare an array of days
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    // Initialize an empty object to store the availability
    const availability = {};

    // For each day, initialize the start time as the earliest and end time as the latest
    for (let day of days) {
        availability[day] = { start: '00:00:00', end: '23:59:59' };
    }

    // For each participant, update the start and end time for each day
    for (let participant of participants) {
        for (let day of days) {
            // If the participant has availability for the current day
            if (participant.availability[day] !== null) {
                // Get the participant's start and end times
                const start = participant.availability[day].start;
                const end = participant.availability[day].end;

                // Update the start time if the participant's start time is later
                availability[day].start = start > availability[day].start ? start : availability[day].start;
                
                // Update the end time if the participant's end time is earlier
                availability[day].end = end < availability[day].end ? end : availability[day].end;
            }
        }
    }

    // For each day, if the start time is not earlier than the end time, set both to null
    for (let day of days) {
        if (availability[day].start >= availability[day].end) {
            availability[day].start = null;
            availability[day].end = null;
        }
    }

    // Return the final availability object
    return availability;
}
//Example 
const participants = [
    {
        'username': 'user1',
        'availability': {
            'monday': {'start': '09:00:00', 'end': '17:00:00'},
            'tuesday': {'start': '09:00:00', 'end': '17:00:00'},
            'wednesday': {'start': '09:00:00', 'end': '17:00:00'},
            'thursday': {'start': '09:00:00', 'end': '17:00:00'},
            'friday': {'start': '09:00:00', 'end': '17:00:00'},
            'saturday': null,
            'sunday': null
        }
    },
    {
        'username': 'user2',
        'availability': {
            'monday': {'start': '10:00:00', 'end': '15:00:00'},
            'tuesday': {'start': '10:00:00', 'end': '15:00:00'},
            'wednesday': {'start': '10:00:00', 'end': '15:00:00'},
            'thursday': {'start': '10:00:00', 'end': '15:00:00'},
            'friday': {'start': '10:00:00', 'end': '15:00:00'},
            'saturday': null,
            'sunday': null
        }
    }
];

console.log(commonAvailability(participants));


// module.exports = commonAvailability