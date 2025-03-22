interface props{
    header2: string;
    text_button: string;
}


export default function MyButton({header2, text_button}:props) {
    return (
        <>
            <h2>{header2}</h2>
            <button> {text_button} </button>
        </>
    )
}