import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Products() {
  return (
    // <!-- start pricing area -->
    <div id="pricing" class="pricing-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>Our Packages Table</h2>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="pri_table_list">
              <h3>All Package <br/> <span>3.000 K / Month</span></h3>
              <ol>
                <li class="check">Social Media Analysis</li>
                <li class="check cross">Copy Writing</li>
                <li class="check">Script Writing</li>
                <li class="check">Video (2 for feed & 2 for stories)</li>
                <li class="check cross">Photo (Unlimited Photo)</li>
                <li class="check cross">Graphic Design</li>
                {/* <li class="check">Payment online</li>
                <li class="check cross">Cash back</li> */}
              </ol>
              <button>sign up now</button>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="pri_table_list active">
              <span class="saleon">top sale</span>
              <h3>Ala Carte <br/></h3>
              <h3>Video (2 for feed & 2 for stories) <br/> <span>1500 K / Month</span></h3>
              <h3>Photo (Unlimited Photo)<br/> <span>1000 K / Month</span></h3>
              <h3>Graphic Design<br/> <span>3000 K / Month</span></h3>
              {/* <ol>
                <li class="check">Online system</li>
                <li class="check">Full access</li>
                <li class="check">Free apps</li>
                <li class="check">Multiple slider</li>
                <li class="check cross">Free domin</li>
                <li class="check">Support unlimited</li>
                <li class="check">Payment online</li>
                <li class="check cross">Cash back</li>
              </ol> */}
              <button>sign up now</button>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="pri_table_list">
              <h3>Logo Package<br/> <span>3.500 K</span></h3>
              <ol>
                <li class="check">Brand Logo (Original Guaranted)</li>
                <li class="check">Merch Design (T-Shirt, Name Card)</li>
                <li class="check">Packaging</li>
                <li class="check">Colour Pallete</li>
                <li class="check">Neon Box</li>
                <li class="check">Font Recomendation</li>
                {/* <li class="check">Payment online</li>
                <li class="check">Cash back</li> */}
              </ol>
              <button>sign up now</button>
            </div>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="pri_table_list">
              <h3>Web Series<br/> <span>5.000 K / Month</span></h3>
              <ol>
                <li class="check">1 Introduce Episode, 1 Episode</li>
                {/* <li class="check">Full access</li>
                <li class="check">Free apps</li>
                <li class="check">Multiple slider</li>
                <li class="check">Free domin</li>
                <li class="check">Support unlimited</li>
                <li class="check">Payment online</li>
                <li class="check">Cash back</li> */}
              </ol>
              <button>sign up now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  // <!-- End pricing table area -->
  )
}