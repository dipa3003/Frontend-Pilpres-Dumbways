export type TInput = {
    type: string;
    placeholder: string;
    name: string;
    id: string;
};
export default function Input({ type, placeholder, name, id }: TInput) {
    return <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700" placeholder={placeholder} name={name} id={id} />;
}
