import config from './config';

export function add(a: number, b: number): number {
    if (config.debug) {
        console.debug(`Calling add function with arguments: ${a}, ${b}`);
    }

    return a + b;
}
