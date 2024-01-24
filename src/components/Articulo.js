

function Articulo({ children, articulo }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{articulo.nombre}</strong></p>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            <img src={articulo.imagen}></img>
            {children}
        </div>
    )
}

export default Articulo