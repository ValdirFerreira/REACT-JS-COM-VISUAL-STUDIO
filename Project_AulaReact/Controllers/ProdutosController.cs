using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Project_AulaReact.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class ProdutosController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Produto> Get()
        {
            var produtosRetorno = new List<Produto>();

            for (int i = 0; i < 6; i++)
            {
                produtosRetorno.Add(new Produto { Id = i, Nome = "Produto " + i.ToString() });
            }

            return produtosRetorno;
        }


    }

    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }



}
