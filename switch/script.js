const dayform = document.getElementById('day-form');
const day = document.getElementById('Day');
dayform.addEventListener('submit', (e) => {
    switch (day.value) {
        case 'Monday':
            alert('Monday');
            console.log('start of the week');
            break;
        case 'Tuesday':
            alert('Tuesday');
            console.log('some where in middle the week');

            break;
        case 'Wednesday':
            alert('Wednesday');
            console.log('weekends not there yet');

            break;
        case 'Thursday':
            alert('Thursday');
            console.log('reaching the end of the week');

            break;
        case 'Friday':
            alert('Friday');
            console.log('lets go party tonight');

            break;
        case 'Saturday':
            alert('Saturday');
            console.log('yes sirrr!!!');
            break;

        case 'Sunday':
            alert('Sunday');
            console.log('sleeping today!!');

            break;
        default:
            alert('Invalid day');
            break;
    }
})