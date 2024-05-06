
interface LoaderProps {
    loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
    return (
        loading &&
        <div className="absolute inset-0 bg-gray-800 z-[999]">
            Loading...
        </div>
    )
}

export default Loader