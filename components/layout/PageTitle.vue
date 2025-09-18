<template>
    <section class="page-title" style="background-image: url(images/background/2.jpg);">
        <div class="auto-container">
            <div class="title-outer">
                <h1 class="title">{{ title }}</h1>
                <ul class="page-breadcrumb">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/">Pages</NuxtLink></li>
                    <li>{{ title }}</li>
                </ul>
            </div>
        </div>
  </section>
</template>

<script>
    export default {
      name: "PageTitle",
      props: {
        title: {
          type: String
        }
      }
    }
</script>
<style scoped>

</style>