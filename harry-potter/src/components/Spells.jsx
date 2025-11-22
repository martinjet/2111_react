import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

function Spells() {
    const [spells, setSpells] = useState(null);

    useEffect(() => {
        async function fetchSpells() {
            const data = await apiGet();
            setSpells(data);
        }
        fetchSpells();
        }, []);

    if (!spells)
        return <p>Načítám...</p>;

    return (
        <div>
            <h1>Kouzla</h1>
            {spells.map((spell, index) => (
                <div key={index}>
                    <h2>{spell.name}</h2>
                    <p>Popis: {spell.description}</p>
                </div>
            ))}
        </div>
    );
}
export default Spells;