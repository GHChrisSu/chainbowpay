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

// attachment: { format: 'base64', value: 'ABEiM0RVZneImQCqu8zd7v8=' }
// attachment: { format: 'hex', value: '0011223344556677889900AABBCCDDEEFF' }
// attachment: { format: 'json', value: {"param1": "value1", "param2": "value2"} }
export interface Attachment {
  format: string;
  value: any;
}

export interface PaymentParameters {
  payments: Payment[];
  description?: string; // memo for receiver
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

class ChainBowPay {
  private vueEventHub?: EventHub;

  constructor() {
    this.vueEventHub = window.parent.eventHub;
  }

  isChainBowPlatform() {
    return typeof this.vueEventHub !== "undefined";
  }

  connect(): Promise<string> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("connect");
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once("connected", (userName: string) => {
        resolve(userName);
      });
    });
  }

  getBalance(): Promise<AccountBalances> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("getBalance");
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once(
        "getBalanceDone",
        (e: any, balances: AccountBalances) => {
          if (e) {
            reject(e);
          } else {
            resolve(balances);
          }
        }
      );
    });
  }

  sign(message: string): Promise<any> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("sign", message);
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once("signDone", (e: any, signResult: any) => {
        if (e) {
          reject(e);
        } else {
          resolve(signResult);
        }
      });
    });
  }

  payment(paymentParameters: PaymentParameters): Promise<PaymentResult> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    if (paymentParameters.payments.length === 0)
      throw new Error("No content to sign the transaction");
    this.vueEventHub.$emit("payment", paymentParameters);
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once("paymentDone", (e: any, result: PaymentResult) => {
        if (e) {
          reject(e);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default ChainBowPay;
