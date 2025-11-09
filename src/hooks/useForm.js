import { useState } from "react";

export function useForm(initialValues) {
    const [form, setForm] = useState(initialValues);

    const handleForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return { form, handleForm };
}