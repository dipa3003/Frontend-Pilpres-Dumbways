import Input, { TInput } from "./Input";
import Label, { TLabel } from "./Label";

type TInputForm = TLabel & TInput;
export default function InputForm({ label, type, name, placeholder, id }: TInputForm) {
    return (
        <div className="mb-6">
            <Label htmlFor={name} label={label}></Label>
            <Input type={type} placeholder={placeholder} name={name} id={id} />
        </div>
    );
}
