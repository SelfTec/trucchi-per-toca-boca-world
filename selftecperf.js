/**
 * SelftecPerf - Simple Performance Timer
 * Author: Selftec
 * License: Custom
 */

const SelftecPerf = {
    /**
     * Starts a high-resolution timer.
     * @returns {number} - The current timestamp in milliseconds.
     */
    start() {
        return performance.now();
    },

    /**
     * Calculates the elapsed time since the provided start timestamp.
     * @param {number} startTime - The start timestamp in milliseconds.
     * @returns {string} - Formatted elapsed time.
     */
    end(startTime) {
        if (typeof startTime !== 'number') {
            console.error('[SelftecPerf] Invalid start time.');
            return '';
        }
        const elapsed = performance.now() - startTime;
        return `${elapsed.toFixed(2)} ms`;
    }
};

// Example usage:
// const start = SelftecPerf.start();
// // Some operation...
// console.log('Elapsed:', SelftecPerf.end(start));

module.exports = SelftecPerf;
