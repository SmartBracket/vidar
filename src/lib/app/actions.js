'use client'
export function changingToAnotherRoute(clickedLink){
    if(window.location.pathname !== clickedLink.currentTarget.getAttribute('href')){
        // document.getElementById('app').classList.add('app_loading')
        return true
    }else{
        return false
    }
}