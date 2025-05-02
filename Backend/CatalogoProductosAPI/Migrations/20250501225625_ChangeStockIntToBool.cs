using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CatalogoProductosAPI.Migrations
{
    /// <inheritdoc />
    public partial class ChangeStockIntToBool : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "stock",
                table: "Productos",
                type: "bit",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "stock",
                table: "Productos",
                type: "int",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }
    }
}
