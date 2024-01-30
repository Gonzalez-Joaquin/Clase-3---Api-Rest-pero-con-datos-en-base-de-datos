# ECommerce API Rest

### Todos:

> [NOTE]
> El `-` significa que tiene partes hechas.
> El `+` significa que tiene todo hecho.
> El `x` significa que no tiene nada hecho.

-   [ + ] Catálogo de productos: Permite mostrar los productos o servicios que ofrece el negocio, con descripciones, imágenes y precios.

-   [ + ] Carrito de compras: Permite a los usuarios seleccionar productos y gestionar sus compras antes de realizar el pago.

-   [ X ] Gestión de inventario: Ayuda a llevar un control de los niveles de existencias de los productos y a actualizar automáticamente cuando se realizan ventas.

-   [ X ] Sistema de gestión de pedidos: Facilita el seguimiento y la gestión de los pedidos desde la compra hasta la entrega.

-   [ X ] Seguridad: Implementa medidas de seguridad para proteger la información sensible de los clientes, como datos de tarjetas de crédito.

-   [ X ] Personalización: Permite personalizar la experiencia de compra para los usuarios, como recomendaciones de productos basadas en sus preferencias.

-   [ X ] Análisis y reporting: Proporciona herramientas para analizar el rendimiento del negocio, como ventas, inventario y comportamiento del cliente.

-   [ X ] Integración con redes sociales: Facilita la promoción de productos a través de redes sociales y permite a los clientes compartir sus compras en línea.

-   [ X ] Opciones de envío y seguimiento: Ofrece diferentes métodos de envío y proporciona a los clientes la posibilidad de rastrear sus pedidos.

-   [ X ] Soporte al cliente: Brinda opciones para que los clientes se pongan en contacto con el negocio en caso de preguntas o problemas.

## Actividad 3

### Todos:

-   Modificar productos para saber si son un Producto o un Servicio. [X]
-   Modificar productos para saber si tienen o no stock. [X]
-   Carrito de Compras. [X]
    -   Vas a crear un controlador donde reciba en el `req.body` un campo que sea id de producto y otro que sea cantidad `(Que sea o un arreglo o un objeto solo)` . Hacer consultas mysql `Crear procedimiento` o replicar el funcionamiento del util de inicio de sesión. En caso de que exista el stock disponible de todos los productos devolver una respuesta que tiene el precio que le va a salir. En caso contrario devolver que producto tiene stock insuficiente.

```ts
const noArreglo = ''
const Arreglo = []
Array.isArray(Arreglo) // true
Array.isArray(noArreglo) // false
```

# Real Time Updating

## HTTP Polling - Server Sent Events - WebSocket

### Http Polling

Es el caso en el que el cliente realiza solicitudes periódicas al servidor.

`Cliente -> Servidor`

### SSE ( Server Sent Events )

Permite al servidor que envíe datos al cliente de manera asincrónica

`Servidor -> Cliente`

### Web Socket ( En mi caso socket.io )

Permite una comunicación en tiempo real tanto del cliente al servidor como del servidor al cliente.

`Servidor -> Cliente`
`Cliente -> Servidor`

### Actividad 3

### Como actividad 3 te agrego dificultad para que no te aburras.

-   Gestión de inventario: Ayuda a llevar un control de los niveles de existencias de los productos y a actualizar automáticamente cuando se realizan ventas.

    -   ¿Qué mierda queres que haga?
        Quiero que cuando vos realizas un carrito puedas mandar un post donde envio un true or false, en caso de ser true la compra vas a eliminar los productos comprados de la base de datos de productos ( No elimines el producto, si no el stock comprado )

-   Aprender como utilizar headers en una petición al servidor. Despues que aprendas esto implementar lo siguiente: A la hora de iniciar sesión en el controlador users devolver un token para identificar al usuario.

Tutorial Token: `https://www.youtube.com/watch?v=btW1SefZf9M&pp=ygUYdG9ja2VuIGRlbCBsYWRvIHNlcnZpZG9y`

-   Aprender socket.io y comunicar a los clientes cuando se crea un nuevo producto.

Tutorial Web Socket: `https://www.youtube.com/watch?v=KE8Hy6YNWYY&t=2273s`
