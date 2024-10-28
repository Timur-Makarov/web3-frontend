import { prepareContractCall, resolveMethod } from "thirdweb"
import { linkContract, makNFTContract, mscContract, mscEngineContract } from "./helpers"


export const approveLink = prepareContractCall({
	contract: linkContract,
	method: resolveMethod("approve"),
	params: [mscEngineContract.address, 5n * 10n ** 18n],
})

export const approveMSC = prepareContractCall({
	contract: mscContract,
	method: resolveMethod("approve"),
	params: [makNFTContract.address, 5n * 10n ** 18n],
})

export const depositAndMint = prepareContractCall({
	contract: mscEngineContract,
	method: resolveMethod("depositAndMint"),
	params: [linkContract.address, 5n * 10n ** 18n, 5n * 10n ** 18n],
})

export const requestNFT = prepareContractCall({
	contract: makNFTContract,
	method: resolveMethod("requestNFT"),
	params: []
})
