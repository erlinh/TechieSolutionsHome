using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechieHome.Model;

namespace TechieHome.Interfaces
{
    public interface IContactService
    {
        public Boolean SendEmail(Contact contact);
    }
}
