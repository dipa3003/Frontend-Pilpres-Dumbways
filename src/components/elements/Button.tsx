type TButton = {
    classCustom?: string;
    children: string;
};
export default function Button({ classCustom, children }: TButton) {
    return (
        <button type="submit" className={`h-10 px-6  font-semibold rouded-md ${classCustom}`}>
            {children}
        </button>
    );
}
