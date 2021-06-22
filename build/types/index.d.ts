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
export interface AccountBalances {
    [account: string]: AssetData[];
}
export interface AssetData {
    symbol: string;
    name: string;
    decimals: string;
    contractAddress: string;
    balance?: string;
}
export interface Payment {
    toAddress: string;
    amount: number;
}
declare class ChainBowPay {
    private vueEventHub?;
    constructor();
    isChainBowPlatform(): boolean;
    connect(metadata: AppMetadata): Promise<Account>;
    disconnect(): void;
    /**
     * connect status cached in local storage
     */
    listenOnConnected(cb: (account: Account) => void): void;
    stopListenOnConnected(): void;
    getBalance(): Promise<AccountBalances>;
    payment(payments: Payment[]): void;
}
export default ChainBowPay;
