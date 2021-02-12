import {useEffect, useState} from 'react';
import ComplePedidos from './ComplePedidos';
import './Pedidos.css';

export default function Pedidos(){
    const [pedidos, setPedidos] = useState([]);
    const [form, setForm] = useState({
        nome: "",
        email: "",
        produto: ""
    })

    const [response, setResponse] = useState(null)

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
        console.log({[id]:value});
    }

    function handleSubmit(event){
        fetch('http://localhost:3333/usuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) =>{
            setResponse(res);
        })
    }

    {/*const envioPedido = async (evento) => {
        const url = "http://localhost/PHP/connect/insert_pedidos.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
        
    }*/}

    useEffect(() => {
        async function atualizarPedido(){
            const url = "http://localhost:3333/usuarios";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }

        atualizarPedido();
    }, [])
    
    return(
        <div className="container formulario mb-5">
            <h3 className="text-center display-4">Cadastre seu produto</h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label for="text">Nome</label>
                    <input type="text" className="form-control" name="nome" id="nome" value={form.nome} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label for="text">Email</label>
                    <input type="text" className="form-control" name="email" id="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label for="text">Nome Produto</label>
                    <input type="text" className="form-control" name="produto" id="produto" value={form.produto} onChange={handleChange}></input>
                </div>
                
                <input className="btn btn-primary" type="submit" name="enviar" value="Enviar" />
            </form>

            <div className="row">
                <table className="table table-striped mt-4 text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Produto</th>
                    </tr>
                </thead>
                    {pedidos && pedidos.map(pedido => <ComplePedidos key={pedido.id_pedido} id_pedido={pedido.id_pedido} nome={pedido.nome} email={pedido.email} produto={pedido.produto} />)} 
                </table>
            </div>
            {response && response.ok && <p>Formulário enviado</p>}
        </div>
        
    );
}