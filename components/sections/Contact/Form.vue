<template>
	<!--Contact Details Start-->
	<section class="contact-details">
		<div class="container">
			<div class="row">
				<div class="col-xl-5 col-lg-6">
					<div class="contact-details__right">
						<div class="sec-title">
							<span class="sub-title">Need any help?</span>
							<h2>Get in touch with us</h2>
							<div class="text">You can contact us for any kind of query or request, you can get information regarding any business you want to do with us and you can also demand any offer you wish to avail from ourservices. We value your feedback on the services we provide at M3LOGI, share your thoughts with us.</div>
						</div>
						<ul class="list-unstyled contact-details__info">
							<li>
								<div class="icon">
									<span class="lnr-icon-phone-plus"></span>
								</div>
								<div class="text">
									<h6>Have any question?</h6>
									<NuxtLink to="tel:980089850"><span>Free</span> +81-3-6262-8600</NuxtLink>
								</div>
							</li>
							<li>
								<div class="icon">
									<span class="lnr-icon-envelope1"></span>
								</div>
								<div class="text">
									<h6>Write email</h6>
									<NuxtLink to="mailto:sales@m3logi.com ">sales@m3logi.com </NuxtLink>
								</div>
							</li>
							<li>
								<div class="icon">
									<span class="lnr-icon-location"></span>
								</div>
								<div class="text">
									<h6>Visit anytime</h6>
									<span>AKS Hatchobori Bldg 5F,Tokyo-to 104-0032</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-xl-7 col-lg-6">
					<div class="sec-title">
						<span class="sub-title">Send us email</span>
						<h2>Feel free to write</h2>
					</div>
					<!-- Contact Form -->
					<form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post">
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<label>Name <small>*</small></label>
									<input name="form_name" class="form-control" type="text" placeholder="Enter Name" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<label>Email <small>*</small></label>
									<input name="form_email" class="form-control required email" type="email" placeholder="Enter Email" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<label>Subject <small>*</small></label>
									<input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<label>Phone</label>
									<input name="form_phone" class="form-control" type="text" placeholder="Enter Phone" />
								</div>
							</div>
						</div>
						<div class="mb-3">
							<label>Message</label>
							<textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea>
						</div>
						<div class="mb-3">
							<input name="form_botcheck" class="form-control" type="hidden" value="" />
							<button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
							<button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button>
						</div>
					</form>
					<!-- Contact Form Validation-->
				</div>
			</div>
		</div>

		<div class="careers-sec1">
		 <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="absdv">
            <h2 class="head-loc3">Office Locations</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Durban Office -->
        <div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc">
          <div class="loc-images img-trans">
            <img src="/images/durban-of.png" alt="Durban Office">
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 cntc">
          <p class="jpn-lochd">DURBAN OFFICE</p>
          <p class="jpnparag">M3LOGI 1 (PTY) LTD OFFICE: 403, 4TH FLOOR CORPORATE PLACE, 9 DOROTHY NYEMBE STREET, DURBAN, 4001 SOUTH AFRICA</p>
          <a href="tel:+0027313010504" class="locphn">
            <i class="icon-phone-icon"></i>
            <span>+0027 31 3010504</span>
          </a>
          <a href="mailto:sales@m3logi.com" class="locemail">
            <i class="icon-info-icon"></i>
            <span class="eml">sales@m3logi.com</span>
          </a>
        </div>

        <!-- Chile Office -->
        <div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc">
          <div class="loc-images img-trans">
            <img src="/images/chile-of.png" alt="Chile Office">
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 cntc">
          <p class="jpn-lochd">CHILE OFFICE</p>
          <p class="jpnparag">M3LOGI SHIPPING CHILE LTD. OFICINA 1101, AV. BOLÍVAR 202, EDIFICIO FINANZAS, IQUIQUE, CHILE</p>
          <a href="tel:coming-soon" class="locphn">
            <i class="icon-phone-icon"></i>
            <span>Coming Soon</span>
          </a>
          <a href="mailto:chile@m3logi.com" class="locemail">
            <i class="icon-info-icon"></i>
            <span class="eml">chile@m3logi.com</span>
          </a>
        </div>
      </div>

      <div class="row">
        <!-- Mozambique Office -->
        <div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc">
          <div class="loc-images img-trans">
            <img src="/images/mozambique-of.jpg" alt="Mozambique Office">
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 cntc">
          <p class="jpn-lochd">MOZAMBIQUE OFFICE</p>
          <p class="jpnparag">M3LOGI SHIPPING MOZAMBIQUE AFRICA PARK AVENIDA ACORDOS DE LUSAKA NO 95 MAPUTO MOZAMBIQUE</p>
          <a href="tel:coming-soon" class="locphn">
            <i class="icon-phone-icon"></i>
            <span>Coming Soon</span>
          </a>
          <a href="mailto:mozambique@m3logi.com" class="locemail">
            <i class="icon-info-icon"></i>
            <span class="eml">mozambique@m3logi.com</span>
          </a>
        </div>

        <!-- Pakistan Office -->
        <div class="col-lg-3 col-md-6 col-sm-6 nopad-right cntc pad-mmb">
          <div class="loc-images img-trans">
            <img src="/images/pakistan-of.png" alt="Pakistan Office">
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 cntc pad-mmb">
          <p class="jpn-lochd">PAKISTAN OFFICE</p>
          <p class="jpnparag">M3LOGI SHIPPING PAKISTAN ROOM#204&205, 2ND FLOOR, SKY CENTER, AGHA KAMAL HAIDER ROAD, SIALKOT CANTT 51310 PAKISTAN</p>
          <a href="tel:coming-soon" class="locphn">
            <i class="icon-phone-icon"></i>
            <span>Coming Soon</span>
          </a>
          <a href="mailto:pakistan@m3logi.com" class="locemail">
            <i class="icon-info-icon"></i>
            <span class="eml">pakistan@m3logi.com</span>
          </a>
        </div>
      </div>
    </div>
	</div>div>
		
	</section>
	<!--Contact Details End-->

	<!-- Divider: Google Map -->
	<section>
		<div class="container-fluid p-0">
			<div class="row">
				<!-- Google Map HTML Codes -->
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0776758261786!2d139.77559331474592!3d35.67508933791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601896eb159fc48d%3A0x447a25745837bed8!2sM3LOGI!5e0!3m2!1sen!2s!4v1539855483649"
					data-tm-width="100%"
					height="500"
					frameborder="0"
					allowfullscreen=""
				></iframe>
			</div>
		</div>
		
	</section>

	
</template>