import { useEffect, useState } from "react"
import { NFT, NFTEventMessage } from "../web3/types.ts"
import { useActiveAccount } from "thirdweb/react"


const backendHost = import.meta.env._BACKEND_HOST || "localhost:4000"

type NFTListProps = {
	nftMintedLogs: NFTEventMessage[]
	clearNFTMintedLogs: () => void
}

export function NFTList({ nftMintedLogs, clearNFTMintedLogs }: NFTListProps) {
	const [unhandledUris, setUnhandledUris] = useState<string[]>([])
	const [handledUris, setHandledUris] = useState<string[]>([])
	const [nfts, setNfts] = useState<NFT[]>([])
	
	const account = useActiveAccount()
	
	useEffect(() => {
		if (!account) return
		
		const fetchExistingNFTEvents = async () => {
			const response = await fetch(`http://${backendHost}/nfts/${account.address}`)
			const nfts = await response.json() as NFTEventMessage[]
			setUnhandledUris(nfts.map((nft) => nft.data.uri))
		}
		
		fetchExistingNFTEvents()
	}, [account])
	
	useEffect(() => {
		if (!nftMintedLogs.length) return
		
		const newUris = nftMintedLogs.map((nftEventMessage) => nftEventMessage.data.uri)
			.filter((uri) => !handledUris.includes(uri))
		setUnhandledUris(newUris)
		setHandledUris((uris) => [...uris, ...newUris])
		clearNFTMintedLogs()
	}, [clearNFTMintedLogs, handledUris, nftMintedLogs])
	
	useEffect(() => {
		if (!unhandledUris.length) return
		
		const fetchNFTs = async () => {
			const newNfts = await Promise.all(unhandledUris.map(async (uri) => {
				const preparedUri = uri.replace("ipfs://", "https://ipfs.io/ipfs/")
				const response = await fetch(preparedUri)
				return response.json()
			}))
			setNfts((nfts) => [...nfts, ...newNfts])
			setUnhandledUris([])
		}
		
		fetchNFTs()
	}, [unhandledUris])
	
	
	const prepareNFTImage = (image: string) => image.replace("ipfs://", "https://ipfs.io/ipfs/")
	
	const displayNFT = (nft: NFT, i: number) => {
		return (
			<div className={`nft ${nft.attributes?.[0].value}`} key={i}>
				<h4 className={"nft__name"}>{nft.name}</h4>
				<img className={"nft__image"} src={prepareNFTImage(nft.image)} alt={nft.name}/>
			</div>
		)
	}
	
	return (
		<div className={"nfts"}>
			<h2>Your Mak NFTs</h2>
			<div className={"nft-list"}>
				{nfts.map(displayNFT)}
			</div>
		</div>
	)
}