export default function ComplePedidos(props){
    return(     
        <tbody>
            <tr>
                <td>{props.id_pedido}</td>
                <td>{props.nome}</td>
                <td>{props.email}</td>
                <td>{props.produto}</td>
            </tr>
        </tbody>
            
    );
}

