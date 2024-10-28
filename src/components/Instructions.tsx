import { TypeAnimation } from "react-type-animation"


export function Instructions() {
	return (
		<div className={"instructions"}>
			<TypeAnimation
				cursor={false}
				sequence={[2000, "How to mint Mak StableCoin and buy Mak NFT with it", 1150]}
				speed={75}
				className={"instructions-title"}
			/>
			
			<TypeAnimation
				cursor={false}
				style={{ whiteSpace: "pre-line" }}
				sequence={[3850,
					"1. Connect your wallet \n" +
					"2. Go to this faucet and get some LINK and ETH: https://faucets.chain.link/sepolia \n" +
					"3. Click on the \"Approve LINK\" button and approve 5(hardcoded) LINK\n" +
					"4. Click on the \"Deposit and Mint\" button to deposit collateral and get 5(hardcoded) MSC tokens\n" +
					"5. Click on the \"Approve MSC\" to approve your freshly minted Mak Stablecoins\n" +
					"6. Click on the \"Request NFT\" button to request NFT. Wait for events NFTRequested and NFTMinted\n",
					2000]}
				speed={90}
				className={"instructions-text"}
			/>
		</div>
	)
}