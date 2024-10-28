/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly _MSC_ADDRESS: string
	readonly _MSC_ENGINE_ADDRESS: string
	readonly _MAK_NFT_ADDRESS: string
	readonly _LINK_ADDRESS: string
	
	readonly _BACKEND_HOST: string
	
	readonly _THIRDWEB_SECRET_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}