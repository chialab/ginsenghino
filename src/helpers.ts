/**
 * Timeout as promise.
 * @param time The time in milliseconds.
 * @returns A promise that resolves after the time has passed.
 */
export function wait(time: number = 1000) {
    return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), time);
    });
}
