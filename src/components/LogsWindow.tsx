import { EventMessage } from "../web3/types.ts"


type LogsWindowProps = {
	logs: EventMessage[]
}

export function LogsWindow({ logs }: LogsWindowProps) {
	const displayLog = (log: EventMessage) => {
		const date = new Date(1970, 0, 1)
		date.setHours(4)
		date.setSeconds(log.timestamp)
		
		return (
			<div className={"log"} key={log.id}>
				<p className={"log__time"}>[{date.toLocaleDateString()} {date.toLocaleTimeString()}]</p>
				<h4 className={"log__name"}>{log.name}</h4>
				<p className={"log__data"}>{JSON.stringify(log.data)}</p>
			</div>
		)
	}
	
	return (<div className={"logs"}>
		<h2>Logs</h2>
		<div className={"logs-window"}>
			{logs.slice(-100).map(displayLog).reverse()}
		</div>
	</div>)
}