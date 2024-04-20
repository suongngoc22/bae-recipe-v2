
const TitleSkeleton = () => {
    return (
        <div className="h-4 bg-gray-200 max-w-[180px] mb-6 "></div>
    )
}

const SubTitleSkeleton = () => {
    return (
        <div className="h-3 bg-gray-200 max-w-[120px] mb-4"></div>
    )
}

const ContentSkeleton = () => {
    return (
        <div>
            <div className="h-1.5 bg-gray-200 max-w-[360px] mb-3"></div>
            <div className="h-1.5 bg-gray-200 max-w-[360px] mb-3"></div>
            <div className="h-1.5 bg-gray-200 max-w-[360px] mb-3"></div>
        </div>
    )
}

const MealSkeleton = () => {
    return (
        <div className="w-full h-screen animate-pulse">
            <div className="relative w-full h-52 bg-gray-200 animate-none"></div>

            <div className="px-8 py-5">
                <TitleSkeleton />
                <div className="flex flex-col gap-3">
                    <div>
                        <SubTitleSkeleton />
                        <ContentSkeleton />
                    </div>
                    <div>
                        <SubTitleSkeleton />
                        <ContentSkeleton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealSkeleton