using Microsoft.EntityFrameworkCore;
using CatalogoProductosAPI.Entidades;

namespace CatalogoProductosAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Producto> Productos { get; set; }

    }
}
