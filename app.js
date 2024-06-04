function calculateDays() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (startDate === '' || endDate === '') {
        alert('Please select both dates.');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) {
        alert('End date must be after the start date.');
        return;
    }

    const timeDiff = end - start;
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    document.getElementById('result').innerText = `The difference is ${Math.ceil(daysDiff)} days.`;
}
