import { PreparedTransaction } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { TransactionReceipt } from "thirdweb/transaction";
import { useCallback, useState } from "react";


type ActionButtonProps = {
	contractCall: PreparedTransaction
	onSent?: () => void
	onConfirmed?: (receipt: TransactionReceipt) => void
	onError?: (error: Error) => void
	title: string
}

export function ActionButton({ contractCall, onSent, onConfirmed, onError, title }: ActionButtonProps) {
	const [error, setError] = useState<Error | null>()
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [isPending, setIsPending] = useState<boolean>(false)
	
	const onTransactionSent = useCallback(() => {
		setIsPending(true)
		setError(null)
		setIsSuccess(false)
		onSent?.()
	}, [onSent])
	
	
	const onTransactionError = useCallback((error: Error) => {
		setError(error)
		setIsPending(false)
		onError?.(error)
	}, [onError])
	
	const onTransactionSuccess = useCallback((receipt: TransactionReceipt) => {
		setTimeout(() => { setIsSuccess(false) }, 5000)
		setIsSuccess(true)
		setIsPending(false)
		onConfirmed?.(receipt)
	}, [onConfirmed])
	
	return (
		<div className={"action-button"}>
			<TransactionButton
				transaction={() => contractCall}
				onTransactionSent={onTransactionSent}
				onTransactionConfirmed={onTransactionSuccess}
				onError={onTransactionError}
			>
				{title}
			</TransactionButton>
			
			{error && <p className={"action-button__error"}>{error.message}</p>}
			{isSuccess && <p className={"action-button__success"}>Success!</p>}
			{isPending && <p className={"action-button__pending"}>Confirming your transaction...</p>}
		</div>
	)
}