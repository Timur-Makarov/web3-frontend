import { createThirdwebClient, getContract } from "thirdweb"
import { sepolia } from "thirdweb/chains"
import { createWallet } from "thirdweb/wallets"


const secretKey = import.meta.env._THIRDWEB_SECRET_KEY || "";

export const client = createThirdwebClient({ secretKey });

export const mscEngineContract = getContract({
	client,
	chain: sepolia,
	address: import.meta.env._MSC_ENGINE_ADDRESS,
});

export const mscContract = getContract({
	client,
	chain: sepolia,
	address: import.meta.env._MSC_ADDRESS,
});

export const makNFTContract = getContract({
	client,
	chain: sepolia,
	address: import.meta.env._MAK_NFT_ADDRESS,
});

export const linkContract = getContract({
	client,
	chain: sepolia,
	address: import.meta.env._LINK_ADDRESS,
});

export const wallets = [
	createWallet("io.metamask"),
];