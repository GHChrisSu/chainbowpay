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
    memo?: string;
}
declare class ChainBowPay {
    private vueEventHub?;
    constructor();
    isChainBowPlatform(): boolean;
    connect(metadata: AppMetadata): Promise<Account>;
    disconnect(): void;
    getBalance(): Promise<AccountBalances>;
    payment(payments: Payment[], onChainData: string): void;
}
export default ChainBowPay;
