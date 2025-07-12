const ErrorFallback = ({ error, resetErrorBoundary }) => (
	<div className="flex flex-col items-center justify-center h-screen p-4 text-center">
		<h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
		<pre className="text-sm text-gray-600 mb-6">{error.message}</pre>
		<button
			onClick={resetErrorBoundary}
			className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
		>
			Try Again
		</button>
	</div>
);

export default ErrorFallback;