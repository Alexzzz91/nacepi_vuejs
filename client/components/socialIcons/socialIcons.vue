<template>
    <div class="na-cepi__footer__socials">
        <div 
            class="na-cepi__footer__socials-item"
            v-for="social in socialsElems"
        >
            <a :href="social.url">
                <svgicon :icon="social.icon" width="60" height="60" color="#fff"></svgicon>
            </a>
        </div>
    </div>
</template>

<script>
import '../../compiled-icons/'
import socials from './socials.js'
export default {
    name: 'socialIcons',
    created() {
        socials.forEach(social => {
            this.socialsElems.push({
                url: social.url,
                icon: social.icon
            })
        })
    }
    , data() {
        return {
            socialsElems: []
        }
    }
}
</script>
