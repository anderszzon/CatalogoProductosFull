using Microsoft.AspNetCore.Mvc;
using CatalogoProductosAPI.Entidades;
using Microsoft.EntityFrameworkCore;

namespace CatalogoProductosAPI.Controllers
{
    [Route("api/productos")]
    [ApiController]
    public class ProductoControllers: ControllerBase
    {

        private readonly ApplicationDbContext context;

        public ProductoControllers(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Producto>> Get()
        {
            return await context.Productos.ToListAsync();
        }

        [HttpGet("{id:int}", Name = "ObtenerProductoPorId")]
        public async Task<ActionResult<Producto>> Get(int Id) 
        { 
            var producto = await context.Productos.FirstOrDefaultAsync( x => x.Id == Id);

            if (producto == null) 
            { 
                return NotFound();
            }

            return producto;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Producto producto)
        {
            var Existe = await context.Productos.AnyAsync(x => x.nombre == producto.nombre);

            if (Existe)
            {
                var mensajeError = $"Ya exixte un producto con el nombre {producto.nombre}";
                ModelState.AddModelError(nameof(producto.nombre), mensajeError);
                return ValidationProblem(ModelState);
            }

            context.Add(producto);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerProductoPorId", new { id = producto.Id }, producto);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] Producto producto)
        {
            var existeProducto = await context.Productos.AnyAsync(x => x.Id == id);

            if (!existeProducto)
            {
                return NotFound();
            }

            var existeProductoNombreDuplicado = await context.Productos.AnyAsync(x => x.nombre == producto.nombre && x.Id != id);

            if (existeProductoNombreDuplicado)
            {
                var mensajeDeError = $"Ya existe un producto con el nombre {producto.nombre}";
                ModelState.AddModelError(nameof(producto.nombre), mensajeDeError);
                return ValidationProblem(ModelState);
            }

            producto.Id = id;
            context.Update(producto);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Productos.Where(x => x.Id == id).ExecuteDeleteAsync();

            if (filasBorradas == 0)
            {
                return NotFound();
            }

            return NoContent();
        }


    }
}
