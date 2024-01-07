export type TLabel = {
    htmlFor?: string;
    label: string;
};
export default function Label({ htmlFor, label }: TLabel) {
    return (
        <label htmlFor={htmlFor} className="block text-black text-sm font-bold mb-2">
            {label}
        </label>
    );
}
