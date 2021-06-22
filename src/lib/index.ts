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
      this.vueEventHub.$once("connected", (account: Account) => {
        resolve(account);
      });
    });
  }

  disconnect() {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("disconnect");
  }

  /**
   * connect status cached in local storage
   */
  listenOnConnected(cb: (account: Account) => void) {
    this.vueEventHub.$on("connected", (account: Account) => {
      cb(account);
    });
  }

  stopListenOnConnected() {
    this.vueEventHub.$off("connected");
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

  payment(payments: Payment[]) {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("payment", payments);
  }
}

export default ChainBowPay;
