import { FormInputLabel, Input, Group } from "./form-input.stlyes"

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
         <Input {...otherProps} />
    {label && (
        <FormInputLabel 
        shrink={otherProps.value.length}>
         {label}
        </FormInputLabel>
    )}
    </Group>
    )
}

export default FormInput