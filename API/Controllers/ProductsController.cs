using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[Controller]")]
public class ProductsController : ControllerBase
{
   private readonly StoreContext _context;

   public ProductsController(StoreContext context)
   {
      _context = context;
   }
   // Synchronous methods to call data that is scalable for small application.
   // [HttpGet]
   // public ActionResult<List<Product>> GetProducts()
   // {
   //    return context.Products.ToList();
   // }
   
   //Asynchronous Methods to call data that can handle multiple request at the same time.
   [HttpGet]
   public async Task<ActionResult<List<Product>>> GetProducts()
   {
      return await _context.Products.ToListAsync();
   }
   [HttpGet("{id}")]
   public async Task<ActionResult<Product>> GetProducts(int id)
   {
      return await _context.Products.FindAsync(id);
   }
}