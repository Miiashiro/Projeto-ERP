import React from "react";
import { IMaskInput } from 'react-imask';

//Estilo dos modais
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//Mascara de telefone
const TextMaskTel = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(00)0000-0000"
            /*definitions={{
              '#': /[1-9]/,
            }}*/
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

//Mascara de cnpj
const TextMaskCnpj = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="00.000.000/0000-00"
            /*definitions={{
              '#': /[1-9]/,
            }}*/
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

//mascara de cep
const TextMaskCep = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="00000-000"
            /*definitions={{
              '#': /[1-9]/,
            }}*/
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

export default { style, TextMaskTel, TextMaskCnpj, TextMaskCep}