const productosSeller = [{id: 1, nombre: 'Los vencejos', urlimg:"https://planetadelibrosar1.cdnstatics.com/usuaris/libros/fotos/341/m_libros/340659_portada_los-vencejos_fernando-aramburu_202106101045.jpg" },
                         {id: 2, nombre: 'El Club del Crimen de los Jueves', urlimg: "https://planetadelibrosar6.cdnstatics.com/usuaris/libros/fotos/326/m_libros/portada_el-club-del-crimen-de-los-jueves_richard-osman_202011131849.jpg" },
                         {id: 3, nombre: 'Lo bueno de tener un mal día', urlimg: "https://planetadelibrosar4.cdnstatics.com/usuaris/libros/fotos/324/m_libros/323546_portada_lo-bueno-de-tener-un-mal-dia_anabel-gonzalez_201911280911.jpg"},
                         {id: 4, nombre: 'Liberación', urlimg: "https://planetadelibrosar7.cdnstatics.com/usuaris/libros/fotos/317/m_libros/316924_portada_liberacion_imogen-kealey_202002251556.jpg"},
                        ];

    /*listarProductos (padre, data, callback)*/
    for (const producto of productosSeller) {

        $('#producto_Book').append(`
            <div class="productoBook">
              <input value="${producto.id}" type="hidden" >
              <img class="imageStyle item-image" src=${producto.urlimg}>
              <h3 class="paddingProducto titleBook item-title"> ${producto.nombre} </h3>
              
            </div>
            `);
        };