import Editor from './Editor';



export default function Reded () {

	return (
		<div className="Reded">
			<header className="min-h-screen bg-red-500 text-white px-4 py-4">
				<h2 className="m-auto text-xl font-bold py-4">Reded</h2>
				<Editor />
			</header>
			<footer className="flex bg-slate-700 py-10 px-4">
				<div className="text-white text-center">
					<h2 className="text-base font-bold"><a href="https://github.com/iaseth/reded" target="_blank" rel="noreferrer">Reded</a> by Ankur Seth.</h2>
				</div>
			</footer>
		</div>
	);
}
