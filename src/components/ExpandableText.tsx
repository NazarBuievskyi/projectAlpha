import React, {useState} from 'react';


interface Props {
    children: string
    maxChars?: number
}


function ExpandableText({children, maxChars = 100}: Props) {
    const [expand, setExpand] = useState(false)

    if (children.length <= maxChars) return <div>{children}</div>

    const text = expand ? children : children.substring(0, maxChars)

    return (
        <div>
            {text}...
            <button onClick={() => setExpand(!expand)}>{expand ? 'Less' : 'More'}</button>
        </div>
    )
}

export default ExpandableText;