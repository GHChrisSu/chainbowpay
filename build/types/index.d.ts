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
    to: string;
    currencyCode: string;
    amount: number;
}
export interface Attachment {
    format: string;
    value: any;
}
export interface PaymentParameters {
    payments: Payment[];
    description?: string;
    appAction?: string;
    attachment?: Attachment;
}
export interface PaymentResult {
    transactionId: string;
    satoshiFees: number;
    satoshiAmount: number;
    note?: string;
    type?: string;
    time?: number;
    fiatExchangeRate?: number;
    fiatCurrencyCode?: string;
    participants?: any[];
    attachments?: any;
    appAction?: string;
}
declare class ChainBowPay {
    private vueEventHub?;
    constructor();
    isChainBowPlatform(): boolean;
    connect(metadata: AppMetadata): Promise<Account>;
    disconnect(): void;
    getBalance(): Promise<AccountBalances>;
    payment(paymentParameters: PaymentParameters): Promise<PaymentResult>;
}
export default ChainBowPay;
