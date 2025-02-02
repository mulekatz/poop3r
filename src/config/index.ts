export const NETWORK = (import.meta.env.VITE_NETWORK ?? "main") as
  | "main"
  | "test";
export const NODE_URL =
  import.meta.env.VITE_NODE_URL ?? `https://node-${NETWORK}net.vechain.energy`;
export const WALLETS = "veworld";
