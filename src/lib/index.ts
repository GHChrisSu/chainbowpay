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
  memo?: string; // memo for receiver
}

class ChainBowPay {
  private vueEventHub?: EventHub;

  constructor() {
    this.vueEventHub = window.parent.eventHub;
  }

  isChainBowPlatform() {
    return typeof this.vueEventHub !== "undefined";
  }

  connect(metadata: AppMetadata): Promise<Account> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("connect", metadata);
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once("connected", (accountCompose: String) => {
        const accountResolve = accountCompose.split("||");
        const account = <Account>{
          name: accountResolve[0],
          address: accountResolve[1],
        };
        resolve(account);
      });
    });
  }

  disconnect() {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("disconnect");
  }

  getBalance(): Promise<AccountBalances> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("getBalance");
    return new Promise((resolve, reject) => {
      this.vueEventHub.$once("getBalanceDone", (balances: AccountBalances) => {
        resolve(balances);
      });
    });
  }

  payment(payments: Payment[] = [], onChainData: string[] = []) {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    if (payments.length === 0 && onChainData.length === 0) throw new Error("No content to sign the transaction");
    this.vueEventHub.$emit("payment", payments, onChainData);
  }
}

export default ChainBowPay;
