let delete_hook_submenu = null


jQuery(document).ready(function ($) {

    /**
     * Custom dropdown
     */

    $('.nav-link').click(function () {
        event.preventDefault()

        if($(this).hasClass('dropdown-btn')){
            return Dropdown(this)
        }

        return SubMenuClose()
    })

    function Dropdown(el) {

        let submenu = $(el).next()

        let _container = $(el).attr('aria-container')
        let container = $(_container)

        if(!_container){
            return SubMenuClose()
        }

        // index in document.all
        let index = $(el).index('*')

        if(container.attr('aria-owns') === index.toString()){
            container.empty()
            container.attr('aria-owns',0)
        }else{
            container.empty()
            container.attr('aria-owns', index)
            container.append(submenu.html())
        }

    }

    function SubMenuClose() {

        let container = $('#sub-menu')
        container.attr('aria-owns',0)
        container.empty()

    }
})