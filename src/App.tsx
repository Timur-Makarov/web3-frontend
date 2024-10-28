import './App.css'
import { ActionButton } from "./components/ActionButton.tsx"
import { approveLink, approveMSC, depositAndMint, requestNFT } from './web3/actions.ts'
import { Header } from "./components/Header.tsx"
import { Instructions } from "./components/Instructions.tsx"
import { LogsAndNFTs } from "./components/LogsAndNFTs.tsx"


function App() {
	
	return (
		<>
			<Header/>
			<Instructions/>
			
			<div className={"action-buttons"}>
				<ActionButton contractCall={approveLink} title="Approve LINK"/>
				<ActionButton contractCall={approveMSC} title="Approve MSC"/>
				<ActionButton contractCall={depositAndMint} title="Deposit and Mint"/>
				<ActionButton contractCall={requestNFT} title="Request NFT"/>
			</div>
			
			<LogsAndNFTs/>
		</>
	)
}

export default App


