export const getFormattedCalendarEvents = (events) =>
    events.map(({ startDate, endDate, ...item }) => ({
        start: new Date(startDate),
        end: new Date(endDate),
        startDate,
        endDate,
        ...item,
    }));
