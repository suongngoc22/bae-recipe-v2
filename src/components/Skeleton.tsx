
interface SkeletonProps {
    paragraph?: {
        rows?: number,
        styles?: string
    };
    image?: {
        styles?: string
    };
    active?: boolean;
}

const Skeleton = ({ paragraph, image, active }: SkeletonProps) => {
    return (
        <div className={`w-full h-full ${active && 'animate-pulse'}`}>
            {image && <div className={`relative bg-gray-200 ${image.styles}`}></div>}

            {paragraph && <div className={paragraph.styles}>
                {Array(paragraph?.rows).fill(0).map((index) => (
                    <div key={index} className="h-4 bg-gray-200 w-full rounded-md mb-3 first:mb-5 first:w-[180px]"></div>
                ))}
            </div>
            }
        </div>
    )
}

export default Skeleton