import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-red-400">
                <h1 className="text-3xl font-bold">Oops! Something went wrong 😢</h1>
                {/* <p>Sorry, an unexpected error has occured</p> */}
                <h2 className="my-5 text-6xl">{error.status}</h2>
                <p className="text-lg">{error.statusText}</p>
                {error.data?.message && <p>error.data.message</p>}
            </div>
        );
    }
}
