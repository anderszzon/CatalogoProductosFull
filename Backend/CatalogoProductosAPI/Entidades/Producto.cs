using System.ComponentModel.DataAnnotations;

namespace CatalogoProductosAPI.Entidades
{
    public class Producto
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string nombre { get; set; }

        public string? descripcion { get; set; }

        public int precio { get; set; }

        public bool stock { get; set; }


    }
}
