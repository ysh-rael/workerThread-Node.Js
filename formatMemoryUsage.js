function formatMemoryUsage(memoryUsage, returnObject) {
    const KB = 1024;
    const MB = KB * 1024;

    const formattedMemoryUsage = {};

    for (let key in memoryUsage) {
        const value = memoryUsage[key];
        let formattedValue;
        let unit;

        if (value >= MB) {
            formattedValue = (value / MB).toFixed(2);
            unit = 'MB';
        } else if (value >= KB) {
            formattedValue = (value / KB).toFixed(2);
            unit = 'KB';
        } else {
            formattedValue = value;
            unit = 'bytes';
        }

        formattedMemoryUsage[key] = returnObject ? { value: formattedValue, unit } : `${formattedValue} ${unit}`;
    }

    return formattedMemoryUsage;
}

module.exports = formatMemoryUsage