 

function Curso() {


    interface Curso{
        titulo: string;
        formato: string;
        bloques: string[];
        inscribir: () => void;
    }
    
    const curso:Curso ={
        titulo: "curso profesional de JS",
        formato:"video",
        bloques: ['objectos',"json","functions"],
        inscribir: () => {
            console.log('Inscripcion realizada con exito')
        }
    }
    
    { console.log(curso)}

    return (

        <div>
            <h1>{curso.titulo}</h1>
            <p>Formato: {curso.formato}</p>
            <ul>
                {curso.bloques.map(bloque => <li key={bloque}>{bloque}</li>)}
            </ul>
        </div>
    )
}


export default  Curso

