class MyHeader extends HTMLElement{
connectedCallback(){
this.innerHTML = `

<nav>
        <div class="navbar">
            <div class="toggle"><i style="color: rgb(0, 0, 0);"  class="fa-solid fa-bars fa-lg"></i></div>
            <div class="brand-logo"><a href="./index.html"><img src="./static/LOGO 2.png" alt="popup products" title="popup products"></a></div>
            <a class="call-now" href="https://wa.link/zigbtf" target="_blank">+263 77547 0984</a>
            <a class="call-now" href="tel:+263787540789">+263 78754 0789</a>

            
        </div>
        <div class="nav-items">
            <div class="toggle"><i class="fa-solid fa-close fa-lg"></i></div>
            <ul>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./products.html">PRODUCTS</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="./about.html">ABOUT US</a></li>
                <li><a href="#contact">CONTACT US</a></li>
                
            </ul>
        </div>
    </nav>

`
}
}

customElements.define('my-header',MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback(){
    this.innerHTML = `
    <footer id="contact" class="footer-container">
        <div class="footer-one">
             
            <div class="footer-box box-2">
                <h3 style="margin-right: 5rem;" >Contact Details</h3>
                <ul>
                      <li><i class="fa-solid fa-phone"></i> +263 775 470 984</li>
                    <li><i class="fa-solid fa-phone"></i> +263 780 431 518</li>
                    <li><i class="fa-solid fa-phone"></i> +263 787 540 789</li>
                    <li><i class="fa-solid fa-envelope"></i> popupproducts@gmail.com</li>
                    <li><a href="https://wa.link/zigbtf" target="_blank"><i class="fa-brands fa-whatsapp" style="color:rgb(137, 196, 76) ;"></i><span style="color: rgb(137, 196, 76);" >+263 775 470 984</span> </a></li>
                </ul>
            </div>
            <div class="footer-box box-2">
                <h3 style="margin-right: 23rem;" >Address</h3>
                <ul>
                    
                    <h3 >Main Branch</h3> 
                    <li><i class="fa-solid fa-location-dot"></i>29 Harvey Brown Road, Milton 
                        Park, Harare</li>
                        <h3>CBD</h3>
                    <li><i class="fa-solid fa-location-dot"></i> Silundika House, Cnr 1st and George 
                        Silundika, Harare</li>
                  </li>
                </ul>
            </div>
            <div class="footer-box box-2">
                <div class="about-logo">
                    <img src="./static/logo 1.png" alt="Pop Up Products" title="Pop Up Products" width="354" height="168">
                </div>
            </div>
        </div>
        <div class="footer-two">
            <div class="footer-social-icons">
                <i class="fa-brands fa-instagram"></i>
                <a href="https://m.facebook.com/people/Popups-products/100076021727053/#_=_" target="_blank"><i class="fa-brands fa-facebook" ></i></a>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="footer-credit">
                <p>© Copyright 2023 | Designed by <a target="_blank" href="https://www.instagram.com/popupproducts/">Pop Up Products</a></p>
              </div>
        </div>
    </footer>

    `
    }
    }

    customElements.define('my-footer',MyFooter)

//navbar
const toggleButton = document.getElementsByClassName("toggle")
const navItems = document.getElementsByClassName('nav-items')[0]

for (let i = 0; i < toggleButton.length; i++) {
    toggleButton[i].addEventListener("click",()=>{
        navItems.classList.toggle("active")
    })
  }



// faq
const faqs = document.querySelectorAll(".faq")

function handleOpen(num) {
    const number = num.toString()
    const n = document.getElementById(number)
    faqs.forEach((faq,idx)=>{
        if(idx+1===num){
            n.classList.toggle("open")
        }else{
            faq.classList.remove("open")
        }
       
    })
}