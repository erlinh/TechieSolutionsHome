using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using TechieHome.Interfaces;
using TechieHome.Model;
using TechieHome.Services;

namespace TechieHome.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        public readonly IContactService contactService;
        public APIController(IConfiguration configuration)
        {
            contactService = new ContactService(configuration);
        }

        /// <summary>
        /// Takes in contact information and sends an email
        /// </summary>
        /// <param name="contact"></param>
        /// <returns>Status code of action</returns>
        [HttpPost]
        public IActionResult Contact([FromBody] Contact contact)
        {
            // Validating the incoming data
            if (!ModelState.IsValid)
            {
                return StatusCode(500);
            }

            try
            {
                //Attempting to send as an email
                contactService.SendEmail(contact);
                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
