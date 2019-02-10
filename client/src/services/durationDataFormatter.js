/**
 *
 * @param duration
 * @returns {string}
 */
export const getDuration = duration => {
    const resultDuration = duration / 60;

    if (resultDuration > 60) {
        const hourDuration = resultDuration / 60;
        return `${hourDuration} h`;
    }

    return `${resultDuration} min`
};
