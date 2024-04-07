import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const MarkdownComponent = (props) => {
    const [markdown, setMarkdown] = useState('')
    useEffect(()=>{
       fetch(props.file)
            .then(res => res.text())
            .then(res => setMarkdown(res))
        }, []);
    return (
        <ReactMarkdown children={markdown}/>
    )
}

export default MarkdownComponent;