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

class ChainBowPay {
  vueEventHub: EventHub;

  constructor() {
    this.vueEventHub = window.parent.eventHub;
  }

  connect(metadata: AppMetadata) {
    this.vueEventHub.$emit("connect", metadata);
  }
}

export default ChainBowPay;
