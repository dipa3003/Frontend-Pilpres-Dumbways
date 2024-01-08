type TButton = {
    classCustom?: string;
    children: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
};
export default function Button(Props: TButton) {
    const { classCustom, children, onClick = () => {}, type = "button" } = Props;
    return (
        <button type={type} className={`h-10 px-6  font-semibold rouded-md ${classCustom}`} onClick={() => onClick()}>
            {children}
        </button>
    );
}
