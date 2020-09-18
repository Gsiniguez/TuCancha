import Container from "../components/Container"


export default function Login() {

    return(
        <Container>
            <div className="flex flex-col p-2 text-center">
                <input className="m-2 text-center" placeholder="Usuario"></input>
                <input className="m-2 text-center" placeholder="Contraseña"></input>
                <button className="btn"> Ingresar </button>
            </div>
        </Container>
    )
}