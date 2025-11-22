


function Result({value}) {

    if (value == null) {
        return null;
    }

    return <div className="Result">Výsledok je: {value}</div>
}

export default Result;