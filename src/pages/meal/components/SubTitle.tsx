
interface SubTitleProps {
    name: string;
}

const SubTitle = ({ name }: SubTitleProps) => {
    return (
        <h2 className="text-[20px] font-medium"> {name} </h2>
    )
}

export default SubTitle