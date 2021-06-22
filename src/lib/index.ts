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

class ChainBowPay {
  vueEventHub?: EventHub;

  constructor() {
    this.vueEventHub = window.parent.eventHub;
  }

  async connect(metadata: AppMetadata): Promise<Account> {
    if (!this.vueEventHub) throw new Error("Not in Chain Bow Platform");
    this.vueEventHub.$emit("connect", metadata);
    return new Promise((resolve, reject) => {
      this.vueEventHub.$on("connected", (account: Account) => {
        resolve(account);
      });
    });
  }
}

export default ChainBowPay;
