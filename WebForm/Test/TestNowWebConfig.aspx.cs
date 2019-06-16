using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebForm.Test
{
    public partial class TestNowWebConfig : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Label1.Text = "目前的組態是：" + ConfigurationManager.AppSettings["ConfigMode"];
        }
    }
}