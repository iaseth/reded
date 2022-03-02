import Editor from './Editor';



export default function Reded () {

	return (
		<div className="Reded">
			<header className="bg-red-600 text-white px-4 py-2">
				<div className="max-w-4xl mx-auto">
					<h2 className="m-auto text-base font-bold py-2">Reded</h2>
				</div>
			</header>
			<div className="min-h-screen bg-red-500 text-white px-4 py-8">
				<Editor />
			</div>
			<footer className="bg-slate-700 px-4 py-16">
				<div className="max-w-4xl mx-auto text-white text-center">
					<h2 className="text-base font-bold"><a href="https://github.com/iaseth/reded" target="_blank" rel="noreferrer">Reded</a> by Ankur Seth.</h2>
				</div>
			</footer>
		</div>
	);
}
