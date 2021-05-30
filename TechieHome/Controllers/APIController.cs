using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using TechieHome.Model;
using TechieHome.Services;

namespace TechieHome.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly IConfiguration Configuration;
        public APIController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpPost]
        public IActionResult Contact([FromBody] Contact contact)
        {
            ContactService contactService = new ContactService(Configuration);
            bool mailSent = contactService.SendEmail(contact);

            if (!mailSent || !ModelState.IsValid)
            {
                return StatusCode(500);
            }
            return Ok(contact);
        }
    }
}
