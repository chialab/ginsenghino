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

/**
 * Wait the target fires an event.
 * @param target The event target.
 * @param eventName The event name.
 * @returns A promise that resolves when target fires requested event.
 */
export function waitEvent(target: EventTarget, eventName: string) {
    return new Promise<Event>((resolve) => {
        const listener = (event: Event) => {
            resolve(event);
            target.removeEventListener(eventName, listener);
        };

        target.addEventListener(eventName, listener);
    });
}
