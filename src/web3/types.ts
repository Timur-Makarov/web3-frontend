export type EventMessage = {
	id: number
	type: string
	name: string
	timestamp: number
	data: object
}

export type NFTEventMessage = EventMessage & {
	"data": {
		"minter": "0x87516bfAe76dA685c5e3467B2b1B39E97639f11A",
		"tokenId": "1",
		"uri": "ipfs://QmWimZ8W7npxqQFFu5PP1nG4LPL2u5AQ8dQLfDWjSif5ty/0.json"
	}
}

export type NFT = {
	"description": string,
	"external_url": string,
	"image": string,
	"weight": number,
	"name": string,
	"attributes": {
		"trait_type": string,
		"value": string
	}[]
}