using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TechieHome.Model
{
    public class Contact
    {
        [DataType(DataType.Password)]
        [MinLength(5)]
        public string email { get; set; }
        [DataType(DataType.MultilineText)]
        [MinLength(10)]
        public string message { get; set; }
    }
}
