import styles from './formField.module.scss';
import Label from "@/UI/atoms/label/Label";
import Input, { InputProps } from "@/UI/atoms/input/Input";


interface FormField extends InputProps {
    label: string;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const FormField: React.FC<FormField> = ({
    label,
    labelProps,
    id,
    ...inputProps
}) => {
    return (
        <div className={styles.formField}>
            <Label htmlFor={id} {...labelProps} className={styles.label}>
                {label}
            </Label>
            <Input id={id} {...inputProps} className={styles.input} />
        </div>
    );
};

export default FormField;
