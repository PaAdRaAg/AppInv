var cantidad = document.querySelector("#cantPA")
var codigo = document.querySelector("#codPA")
var nombre = document.querySelector("#nomPA")
var costo = document.querySelector("#costPA")
var descripcion = document.querySelector("#descPA")
var btnAg = document.querySelector("#agregarBtn")
var tabla1 = document.querySelector("#tabla1")
var tabla2 = document.querySelector("#tabla2")
var tabla3 = document.querySelector("#tabla3")
var tabla4 = document.querySelector("#tabla4")
var codigoEl = document.querySelector("#codPE")
var btnEl = document.querySelector("#btnPE")
var codBu = document.querySelector("#codPB")
var btnBu = document.querySelector("#btnPB")
var btnListar = document.querySelector("#btnListar")
var btnListarInv = document.querySelector("#btnListarInv")
var btnAgPos = document.querySelector("#btnAgPos")
var vCantidad = new Array 
var vCodigo = new Array 
var vNombre = new Array 
var vCosto = new Array 
var vDescripcion = new Array 
var vInventario = new Array
var valorI = 0

class Producto{
    constructor(cantidad, codigo, nombre, costo, descripcion){
        this.cantidad = cantidad
        this.codigo = codigo
        this.nombre = nombre
        this.costo = costo 
        this.descripcion = descripcion
    }
    
    agProd(producto){
        if(cantidad.value == 0 || codigo.value == 0 || nombre.value == "" || costo.value == 0 || descripcion.value == ""){
            alert("Llene todos los campos")
            return -1;
        }else{
            vInventario.push(producto)
        }

    }
    elProd(){}

    busProd(){}  

    agProdPos(){}
}

btnAg.addEventListener('click', () => {
    let producto  = new Producto(Number(cantidad.value), Number(codigo.value), nombre.value, Number(costo.value), (descripcion.value))
    producto.agProd(producto)
    valorI = producto.costo * producto.cantidad
    tabla1.innerHTML = "$" + valorI
    console.log(vInventario)
})

btnEl.addEventListener('click', () => {})

btnBu.addEventListener('click', () => {})

btnListar.addEventListener('click', () => {
    tabla3.innerHTML=""
    for (let i = 0; i < vInventario.length; i++){
        let nuevo = document.createElement('li')
        nuevo.textContent = ("Cantidad: " + vInventario[i].cantidad + ", código: "+ vInventario[i].codigo + ", nombre: " + vInventario[i].nombre + ", costo: " + vInventario[i].costo + ", descripción: " + vInventario[i].descripcion)
        tabla3.appendChild(nuevo)
    }
})

btnListarInv.addEventListener('click', () => {
    tabla4.innerHTML=""
    for (let i = vInventario.length - 1; i >= 0; i--){
        let nuevo = document.createElement('li')
        nuevo.textContent = ("Cantidad: " + vInventario[i].cantidad + ", código: "+ vInventario[i].codigo + ", nombre: " + vInventario[i].nombre + ", costo: " + vInventario[i].costo + ", descripción: " + vInventario[i].descripcion)
        tabla4.appendChild(nuevo)
    }
})

btnAgPos.addEventListener('click', () => {})