window.onload = function () {

    // CLICK ELEMENT TO SCROLL TO ELEMENT
        function scroll() {

            const img = document.getElementById('wine-img')
            const menu = document.getElementById('wine-menu-section')
            const restImg = document.getElementById('restaurant-img')
            const restArea = document.getElementById('restaurant-section')
            const homeImg = document.querySelector('.homevineyardimage')
            const damsteepImg = document.querySelector('.damsteepimage')
            const netherwoodImg = document.querySelector('.netherwood-vineyard-image')
            const homeArea = document.getElementById('home-vineyard')
            const damsteepArea = document.getElementById('damsteep-vineyard')
            const netherwoodArea = document.getElementById('netherwood-vineyard')
            const vineyardImg = document.getElementById('vineyard-img')
            const vineyards = document.getElementById('vineyard-section')
            const accommodation = document.getElementById('accom-img')
            const accommodationArea = document.getElementById('bnb')

            function scrollClick(target, endPoint) {

                target.addEventListener('click', () => {
                    endPoint.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                })
            }

            scrollClick(img, menu)
            scrollClick(restImg, restArea)
            scrollClick(homeImg, homeArea)
            scrollClick(damsteepImg, damsteepArea)
            scrollClick(netherwoodImg, netherwoodArea)
            scrollClick(vineyardImg, vineyards)
            scrollClick(accommodation, accommodationArea)
        }

        scroll()

    // DYNAMIC NAV BAR

    function dynamicNav() {
        var navBar = document.querySelector('header');
        var headroom = new Headroom(navBar);
        headroom.init();
    }

    dynamicNav()
}