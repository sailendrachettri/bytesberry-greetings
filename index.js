export default function getGreeting() {

    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return "Good Morning,";
    } else if (currentHour === 12) {
        return "Good Noon,";
    } else if (currentHour > 12 && currentHour < 18) {
        return "Good Afternoon,";
    } else {
        return "Good Evening,";
    }
};
