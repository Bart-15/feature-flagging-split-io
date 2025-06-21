import { SplitFactoryProvider } from '@splitsoftware/splitio-react';

import { getUserKey } from '@/utils/userKey';
// Create the config for the SDK factory.
const sdkConfig: SplitIO.IBrowserSettings = {
  core: {
    authorizationKey: import.meta.env.VITE_SPLIT_AUTH_KEY,
    key: getUserKey(),
  },
};

export const SplitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SplitFactoryProvider config={sdkConfig}>{children}</SplitFactoryProvider>
  );
};
