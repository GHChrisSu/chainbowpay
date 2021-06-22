declare global {
    interface Window {
        eventHub: EventHub;
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
export interface Account {
    name: string;
    address: string;
}
declare class ChainBowPay {
    vueEventHub?: EventHub;
    constructor();
    connect(metadata: AppMetadata): Promise<Account>;
}
export default ChainBowPay;
