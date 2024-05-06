import Logo from '/bae-recipe-logo.png'
interface LoaderProps {
    loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
    return (
        loading &&
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[999] flex flex-col items-center justify-center gap-2">
            <img src={Logo} className='animate-bounce w-16' />
            <span className='text-primary text-xl font-semibold'>Please waiting...</span>
        </div>
    )
}

export default Loader