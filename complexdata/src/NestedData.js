const NestedData = ({data}) => {
    const renderData = (item,index) => {
        if(Array.isArray(item)){
            return(
                <ul key={index}>
                    {item.map((arrayItem, arrayIndex) => (
                        <li key={arrayIndex}>{renderData(arrayItem, arrayIndex)}</li>
                    ))}
                </ul>
            )
        } else if (typeof item === 'object'){
            return (
                <ul key={index}>
                    {Object.keys(item).map((key, objIndex) => (
                        <li>
                            <strong>{key}:</strong>{renderData(item[key],objIndex)}
                        </li>
                    ))}
                </ul>
            )
        } else {
            return <span key={index}>{item}</span>
        }
    }
    return(
        <>
            {renderData(data)}
        </>
    )
}

export default NestedData;