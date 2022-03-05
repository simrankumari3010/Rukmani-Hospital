class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
           
        <div class="menu">
		
		<div class="brand-name">
			<a href="index.html">
				
				<i class="fa fa-hospital"></i>&nbsp;
				RUKMANI HOSPITAL</h2>
			</a>
		</div>
		
         <nav>
         	<ul>
         		<li><a href="../index.html">Home</a></li>
         		<li><a href="gallery.html">Gallery</a></li>
         		<li><a href="register.html">Register</a></li>
         		<li><a href="login.html">Login</a></li>
         		<li><a class="current" style="color: brown;"href="contact.html">Contact Us</a></li>
         	</ul>
         </nav>
		<!-- End Nav coding & menu coding -->
	</div>`
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-dark">
        <br><br> 
        <h3 class="text-danger">@Copyright 
        "Learning Site"<h1> <br><br> 
        </nav>  `
    }
}
customElements.define('my-footer',MyFooter)