
let option_menu = {
    sub_menu_show: false,
    sub_menu_check: false,
    sub_child_menu_show: false
}

let exception_selectors = [
    '#sub-menu',
    '#top-panel'
]

jQuery(document).ready(function ($) {

    /**
     * Custom dropdown
     */
    let body = $("body")




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
            SubMenuClose()
        }else{
            container.empty()
            container.attr('aria-owns', index)
            container.append(submenu.html())
            option_menu.sub_menu_show = true
        }

    }



    function SubMenuClose() {

        let container = $('#sub-menu')
        container.attr('aria-owns',0)
        container.empty()
        option_menu.sub_menu_show = false
    }



    function SubChildMenuClose() {
        let container = $('#sub-child-menu')
        container.attr('aria-owns',0)
        container.empty()
    }

    function filter(el){

        for(name of exception_selectors)
        {
            if(el.closest(name).length){
                return false
            }
        }

        return true

    }

    // after open menu

    body.click(function () {

        if(option_menu.sub_menu_check)
        {

            let el = $(event.target)

            if(filter(el)){
                option_menu.sub_menu_check = false
                SubMenuClose()
            }

        }

        if(option_menu.sub_menu_show){

            option_menu.sub_menu_check = true

        }

    })

})

