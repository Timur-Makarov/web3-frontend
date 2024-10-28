import { ConnectButton } from "thirdweb/react"
import { client, wallets } from "../web3/helpers.ts"
import { sepolia } from "thirdweb/chains"
import { TypeAnimation } from "react-type-animation"


export function Header() {
	return (
		<header>
			<TypeAnimation
				cursor={false}
				sequence={["Blockchain Indexer", 2000]}
				speed={10}
				className={"header-title"}
			/>
			
			<div>
				<ConnectButton
					client={client}
					wallets={wallets}
					chain={sepolia}
					connectModal={{ size: "compact" }}
				/>
			</div>
		</header>
	)
}