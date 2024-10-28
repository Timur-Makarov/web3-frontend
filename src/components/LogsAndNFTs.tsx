import { LogsWindow } from "./LogsWindow"
import { NFTList } from "./NFTList.tsx"
import { useCallback, useEffect, useRef, useState } from 'react'
import { EventMessage, NFTEventMessage } from "../web3/types.ts"


const backendHost = import.meta.env._BACKEND_HOST

export function LogsAndNFTs() {
	const [logs, setLogs] = useState<EventMessage[]>([])
	const [nftMintedLogs, setNftMintedLogs] = useState<NFTEventMessage[]>([])
	const socket = useRef<WebSocket>()
	
	const clearNFTMintedLogs = useCallback(() => {setNftMintedLogs([])}, [])
	
	useEffect(() => {
		socket.current = new WebSocket(`ws://${backendHost}/ws`)
		
		socket.current.onmessage = ({ data }) => {
			const event = JSON.parse(data) as EventMessage
			
			if (event.name === 'NFTMinted') {
				setNftMintedLogs((logs) => [...logs, event as NFTEventMessage])
			}
			
			setLogs((logs) => [...logs, event])
		}
	}, [])
	
	
	return (
		<div className={"logs-and-nfts"}>
			<NFTList nftMintedLogs={nftMintedLogs} clearNFTMintedLogs={clearNFTMintedLogs}/>
			<LogsWindow logs={logs}/>
		</div>
	)
}