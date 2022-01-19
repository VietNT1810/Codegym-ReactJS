import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [state, setState] = useState({
        description: 'The content of a textarea goes in the value attribute'
    })

    return (
        <form>
            <textarea placeholder={state.description} onChange={(e) => { setState({ description: e.target.value }) }} />
        </form>
    )
}

export default MyForm;