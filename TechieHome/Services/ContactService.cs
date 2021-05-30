using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using TechieHome.Interfaces;
using TechieHome.Model;

namespace TechieHome.Services
{
    public class ContactService : IContactService
    {
        private readonly IConfiguration Configuration;
        public ContactService(IConfiguration configuration)
        {
            Configuration = configuration;

        }
        public Boolean SendEmail(Contact contact)
        {
            using (var message = new MailMessage())
            {
                string FromEmail = Configuration["MailConfig:FromEmail"];
                string FromName = Configuration["MailConfig:FromName"];
                string ToEmail = Configuration["MailConfig:ToEmail"];
                string ToName = Configuration["MailConfig:ToName"];
                string Smtp = Configuration["MailConfig:Smtp"];
                int Port = Int16.Parse(Configuration["MailConfig:Port"]);
                string Username = Configuration["MailConfig:Username"];
                string Password = Configuration["MailConfig:Password"];

                message.To.Add(new MailAddress(ToEmail, ToName));
                message.From = new MailAddress(FromEmail, FromName);
                message.Subject = $"Message from: {contact.email}";
                message.Body = contact.message;
                message.IsBodyHtml = true;

                try
                {
                    using (var client = new SmtpClient(Smtp))
                    {
                        client.Port = Port;
                        client.EnableSsl = true;
                        client.Credentials = new NetworkCredential(Username, Password);
                        client.EnableSsl = true;
                        client.Send(message);
                    }

                    return true;
                } catch
                {
                    return false;
                }

            }
        }
    }
}
