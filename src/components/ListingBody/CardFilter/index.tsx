import { useState } from 'react';
import './styles.css';

type Props = {
    onFilter: Function;
}

type FormData = {
    min?: number;
    max?: number;
}

export default function Cardfilter({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({
        min: undefined,
        max: undefined
    })

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value});
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setFormData(formData);
        onFilter(formData.min, formData.max);
    }

    return (
        <section id="dsf-card-filter" className="dsf-card-container">
            <form onSubmit={handleSubmit}>
                <div className="dsf-input-min dsf-placeholder">
                    <input placeholder="Preço minimo"
                        name='min'
                        value={formData.min || ""}
                        type="text"
                        onChange={handleImputChange}
                    />
                </div>
                <div className="dsf-input-max dsf-mt20 dsf-placeholder">
                    <input placeholder="Preço máximo"
                        name='max'
                        value={formData.max || ""}
                        type="text"
                        onChange={handleImputChange}
                    />
                </div>
                <div className="dsf-bt-filter dsf-mt20">
                    <button type='submit'>Filtrar</button>
                </div>
            </form>
        </section>
    );
}