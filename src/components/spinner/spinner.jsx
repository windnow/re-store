import { useState } from 'react';
import './spinner.css'

const Spinner = () => {
    const [value, setValue] = useState(0);
    return (
        <div className="spinner" onClick={() => setValue(v => v+1)}>loading data... {value}</div>
    )
}
export default Spinner;