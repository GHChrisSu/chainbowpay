declare global {
    interface Window {
        eventHub: any;
    }
}
export interface EventHub {
    $on: Function;
    $once: Function;
    $off: Function;
    $emit: Function;
}
export interface AppMetadata {
    name: string;
    description: string;
    url: string;
    icons: string[];
}
declare class ChainBowPay {
    vueEventHub: EventHub;
    constructor();
    connect(metadata: AppMetadata): void;
}
export default ChainBowPay;
