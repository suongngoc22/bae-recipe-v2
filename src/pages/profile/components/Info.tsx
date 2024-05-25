

const infoData = [
    {
        label: 'Recipe',
        title: '3'
    },
    {
        label: 'Videos',
        title: '13'
    },
    {
        label: 'Followers',
        title: '14K'
    },
    {
        label: 'Following',
        title: '120'
    }
]

interface InfoItemProps {
    label: string;
    title: string;
}

const InfoItem = ({ label, title }: InfoItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-0.5">
            <span className="smallText text-neutral40">
                {label}
            </span>
            <h5 className="h5Text font-semibold">
                {title}
            </h5>
        </div>
    );
}

const Info = () => {
    return (
        <div className="flex justify-between items-center py-0.5">
            {infoData.map((info, index) => (
                <InfoItem
                    key={index}
                    label={info.label}
                    title={info.title}
                />
            ))}
        </div>
    )
}

export default Info