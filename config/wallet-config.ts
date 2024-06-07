import { getDefaultConfig } from '@rainbow-me/rainbowkit';


import { lineaSepolia, linea } from 'wagmi/chains';

export const config = getDefaultConfig({
	appName: 'RainbowKit App',
	projectId: 'YOUR_PROJECT_ID',
	chains: [lineaSepolia],
  ssr: true
});