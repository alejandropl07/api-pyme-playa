import Cliente from "./cliente.js"
import ClasePedido from "./clasePedido.js"
import Destino from "./destino.js"
import Division from "./division.js"
import Embarque from "./embarque.js"
import Moneda from "./moneda.js"
import Proveedor from "./proveedor.js"
import Sucursal from "./sucursal.js"
import TipoProducto from "./tipoProducto.js"
import Solicitud from "./solicitud.js"
import Usuario from "./usuario.js"

Solicitud.belongsTo(Division, {foreignKey: "id_division"});
Division.hasMany(Solicitud, {foreignKey: "id_division"});

Solicitud.belongsTo(Sucursal, {foreignKey: "id_sucursal"});
Sucursal.hasMany(Solicitud, {foreignKey: "id_sucursal"});

Solicitud.belongsTo(Proveedor, {foreignKey: "id_proveedor"});
Proveedor.hasMany(Solicitud, {foreignKey: "id_proveedor"});

Solicitud.belongsTo(ClasePedido, {foreignKey: "id_clase_pedido"});
ClasePedido.hasMany(Solicitud, {foreignKey: "id_clase_pedido"});

Solicitud.belongsTo(Embarque, {foreignKey: "id_embarque"});
Embarque.hasMany(Solicitud, {foreignKey: "id_embarque"});

Solicitud.belongsTo(Cliente, {foreignKey: "id_cliente"});
Cliente.hasMany(Solicitud, {foreignKey: "id_cliente"});

Solicitud.belongsTo(Destino, {foreignKey: "id_destino"});
Destino.hasMany(Solicitud, {foreignKey: "id_destino"});

Solicitud.belongsTo(TipoProducto, {foreignKey: "id_tipo_producto"});
TipoProducto.hasMany(Solicitud, {foreignKey: "id_tipo_producto"});

Solicitud.belongsTo(Moneda, {foreignKey: "id_moneda"});
Moneda.hasMany(Solicitud, {foreignKey: "id_moneda"});

Solicitud.belongsTo(Usuario, {foreignKey: "id_comercial"});
Usuario.hasMany(Solicitud, {foreignKey: "id_comercial"});


const Models = {
    Cliente,
    ClasePedido,
    Destino,
    Division,
    Embarque,
    Moneda,
    Proveedor,
    Sucursal,
    TipoProducto,
    Solicitud,
    Usuario
}

export default Models;



   