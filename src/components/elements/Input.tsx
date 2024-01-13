export type TInput = {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    value?: string;
};
export default function Input(Props: TInput) {
    const { type, placeholder, name, id, value } = Props;
    return <input value={value} type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700" placeholder={placeholder} name={name} id={id} />;
}
