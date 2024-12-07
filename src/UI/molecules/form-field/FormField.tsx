import styles from './formField.module.scss';
import Input, { InputProps } from "@/UI/atoms/input/Input";
import Label, { LabelProps } from "@/UI/atoms/label/Label";

interface FormField extends InputProps {
    label: string;
    labelProps?: LabelProps;
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
