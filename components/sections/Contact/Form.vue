<template>
	<!--Contact Details Start-->
	<section class="contact-details">
		<div class="container">
		<div class="row">
  <div class="col-xl-5 col-lg-6">
    <div class="contact-details__right">
      <div class="sec-title">
        <span class="sub-title">{{ $t('contact.needHelp.subTitle') }}</span>
        <h2>{{ $t('contact.needHelp.title') }}</h2>
        <div class="text">{{ $t('contact.needHelp.text') }}</div>
      </div>
      <ul class="list-unstyled contact-details__info">
        <li>
          <div class="icon">
            <span class="lnr-icon-phone-plus"></span>
          </div>
          <div class="text">
            <h6>{{ $t('contact.info.question') }}</h6>
            <NuxtLink to="tel:980089850"><span>Free</span> {{ $t('contact.address.phone') }}</NuxtLink>
          </div>
        </li>
        <li>
          <div class="icon">
            <span class="lnr-icon-envelope1"></span>
          </div>
          <div class="text">
            <h6>{{ $t('contact.info.email') }}</h6>
            <NuxtLink to="mailto:sales@m3Logi.com">sales@m3Logi.com</NuxtLink>
          </div>
        </li>
        <li>
          <div class="icon">
            <span class="lnr-icon-location"></span>
          </div>
          <div class="text">
            <h6>{{ $t('contact.info.visit') }}</h6>
            <span>{{ $t('contact.address.location') }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="col-xl-7 col-lg-6">
    <div class="sec-title">
      <span class="sub-title">{{ $t('contact.form.sendEmail') }}</span>
      <h2>{{ $t('contact.form.feelFree') }}</h2>
    </div>

    <form id="contact_form" name="contact_form" action="includes/sendmail.php" method="post">
      <div class="row">
        <div class="col-sm-6">
          <div class="mb-3">
            <label>{{ $t('contact.form.name') }} <small>*</small></label>
            <input name="form_name" class="form-control" type="text" placeholder="{{ $t('contact.form.name') }}" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mb-3">
            <label>{{ $t('contact.form.email') }} <small>*</small></label>
            <input name="form_email" class="form-control required email" type="email" placeholder="{{ $t('contact.form.email') }}" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="mb-3">
            <label>{{ $t('contact.form.subject') }} <small>*</small></label>
            <input name="form_subject" class="form-control required" type="text" placeholder="{{ $t('contact.form.subject') }}" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mb-3">
            <label>{{ $t('contact.form.phone') }}</label>
            <input name="form_phone" class="form-control" type="text" placeholder="{{ $t('contact.form.phone') }}" />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label>{{ $t('contact.form.message') }}</label>
        <textarea name="form_message" class="form-control required" rows="5" placeholder="{{ $t('contact.form.message') }}"></textarea>
      </div>

      <div class="mb-3">
        <input name="form_botcheck" class="form-control" type="hidden" value="" />
        <button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait...">
          <span class="btn-title">{{ $t('contact.form.sendBtn') }}</span>
        </button>
        <button type="reset" class="theme-btn btn-style-one">
          <span class="btn-title">{{ $t('contact.form.resetBtn') }}</span>
        </button>
      </div>
    </form>
  </div>
</div>

		</div>

		
	</section>
	<!--Contact Details End-->

	<!-- Divider: Google Map -->
	<section>
		<div class="container-fluid p-0">
			<div class="row">
				<!-- Google Map HTML Codes -->
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0776758261786!2d139.77559331474592!3d35.67508933791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601896eb159fc48d%3A0x447a25745837bed8!2sm3Logi!5e0!3m2!1sen!2s!4v1539855483649"
					data-tm-width="100%"
					height="500"
					frameborder="0"
					allowfullscreen=""
				></iframe>
			</div>
		</div>
		
	</section>

	
</template>