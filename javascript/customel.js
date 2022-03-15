class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `  <nav class="navbar ">
        <div class="head">
        <i class="fa-solid fa-hospital" style="font-size:48px;color:rgb(192, 168, 168)">&nbsp;<span class="h1">Rukmani Hospital</span></i>
                </div>
                <div class="Items">
                <button class="btn"><a href="../index.html">HOME</a></button>
                <button class="btn "><a href="gallery.html">GALLERY</a></button>
                <button class="btn"><a href="Headoffice.html">OUR OFFICES</a></button>
                <button class="btn"><a href="health.html">HEALTH TIPS</a></button>
                <button class="btn"><a href="login.html">LOGIN</a></button>
                <button class="btn"><a href="register.html">REGISTER</a></button>

                </div>

                <div class="Items"> 
                <button class="btn btn-light"><a href="#" data-toggle="modal" data-target="#contact">Contact Us</a></button>
                </div>

                <div id = "contact"  class="modal fade" data-keyboard = 'false' data-backdrop = 'static' role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered ">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h4 class="modal-title float-left text-primary " id="myModalLabel">Contact Us</h4>
                            <button class="close text-white" data-dismiss = 'modal' aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label >Name</label>
                                    <input type="number" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label >Email</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label >Phone No.</label>
                                    <input type="number" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="message">Your message :</label>
                                <textarea class="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer bg-dark">
                            <button type="button" class="btn btn-danger mx-auto" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success mx-auto">
                                Save 
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </nav>
                        
                        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        
       

    <footer class="page-footer font-small blue pt-4 text-white bg-dark">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
  
      <!-- Grid row -->
      <div class="row">
  
        <!-- Grid column -->
        
          <!-- Content -->
          
  
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
    
            <!-- Links -->
            <h5 class="text-uppercase">Follow us</h5>
    
            <ul class="list-unstyled">
              <li>
                <a href="http://www.twitter.com/"><div class="logo-link"><img src="https://www.fraserhealth.ca:443/-/media/Project/FraserHealth/FraserHealth/Icons/Social-Media/twitter.png?h=40&amp;la=en&amp;w=40&amp;rev=7223be8db0f1469e82fb5e4cfcd9f859&amp;hash=4C93ED55951ED98A9D544294669713497951264B" alt="" width="40" height="40" data-variantitemid="{5D6A3279-71C8-4F79-89F5-84579B8E9596}" data-variantfieldname="Icon" style="margin: 0px 0px" /></a> Twitter</div>   
              </li>
              <li>
                   <a href="http://www.facebook.com/"><div class="logo-link "><img src="https://www.fraserhealth.ca:443/-/media/Project/FraserHealth/FraserHealth/Icons/Social-Media/facebook.png?h=40&amp;la=en&amp;w=40&amp;rev=cf4f151557694075af9114e7ea31d28d&amp;hash=49EA6A71D4D4DF226FABF34BAA1EB27874834274" alt="" width="40" height="40" data-variantitemid="{0EBB3880-55E3-4D9C-8F0B-8EA185A8BB4B}" data-variantfieldname="Icon" style="margin: 0px 0px " /></a>Facebook</div>
                
              </li>
              <li>
               <a href="https://www.youtube.com/user/"><div class="logo-link"><img src="https://www.fraserhealth.ca:443/-/media/Project/FraserHealth/FraserHealth/Icons/Social-Media/youtube.png?h=40&amp;la=en&amp;w=40&amp;rev=7e23cd3605f444189d45ccaaf58e91a8&amp;hash=D2A213DC0DF0884EE52FA33243FBE2B474C58A03" alt="" width="40" height="40" data-variantitemid="{04FF412E-F2B8-4DE4-B466-1E5E2577B32C}" data-variantfieldname="Icon" style="margin: 0px 0px" /></a>Youtube</div>
               </li>
            <li>
                <a href="https://www.linkedin.com/company/"><div class="logo-link"><img src="https://www.fraserhealth.ca:443/-/media/Project/FraserHealth/FraserHealth/Icons/Social-Media/linked-in.png?h=40&amp;la=en&amp;w=40&amp;rev=974da231f360498392f5fc47048c1212&amp;hash=BDC79352EF95DC8D9E72E73419851A54B7DCDEC4" alt="" width="40" height="40" data-variantitemid="{74FEFFC1-A4D0-4BDE-B8B5-58E3EE9F2BAB}" data-variantfieldname="Icon" style="margin: 0px 0px" /></a>Linkedin</div>

            </li>
            <li>
                
               <a href="https://www.instagram.com/"><div class="logo-link"><img src="https://www.fraserhealth.ca:443/-/media/Project/FraserHealth/FraserHealth/Icons/Social-Media/ig_png40-40.png?h=40&amp;la=en&amp;w=40&amp;rev=61120eaec84542179b7794b3db1b37f0&amp;hash=EEB8F09964DAFFC52A9EE822B43E555A98B5AD69" alt="" width="40" height="40" data-variantitemid="{2E67FB47-35C1-46CC-A2B4-6E8B3BE06817}" data-variantfieldname="Icon" style="margin: 0px 0px" /></a>Instagram</div>
              
            </li>
             
            </ul>
    
          </div>
        <!-- Grid column -->
  
        <hr class="clearfix w-100 d-md-none pb-3">
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text-uppercase">Official</h5>
  
          <ul class="list-unstyled text-white">
            <li>
                <a href="https://www.gmail.com/"  style="color:white;"><img src="../images/email.png" width="40" height="40" style="margin: 0px 0px;">rukmani@gmail.com</a><br><br>
                
            </li>
            <li>
                <a href="#" style="color:white;"><img src="../images/phone.png "width="40" height="40" style="margin: 0px 0px">1800-021-xxxx</a><br>
            </li>
           
          </ul>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text-uppercase">Branches</h5>
  
          <ul class="list-unstyled ">
            <li>
              <a href="rukmani.html" style="color:white;">Rukmani Clinic</a>
            </li>
            <li>
              <a href="sharda.html" style="color:white;">Sharda Hospital</a>
            </li>
          </ul>
  
        </div>
        <!-- Grid column -->
  
      </div>
      <!-- Grid row -->
  
    </div>
    <!-- Footer Links -->
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2022 Copyright:
      <a href="#"> Rukmani.com</a>
    </div>
    <!-- Copyright -->
  
  
               
        </div>
        </nav>
         `
    }
}
customElements.define('my-footer',MyFooter)