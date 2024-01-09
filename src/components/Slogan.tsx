type TSlogan = {
    slogan: string;
};

export default function Slogan({ slogan }: TSlogan) {
    return (
        <div className="">
            <p className="text-2xl font-bold mx-36 text-center py-20 italic">{slogan}</p>
        </div>
    );
}
