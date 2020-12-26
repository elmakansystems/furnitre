window.onload = ()=>{
    const imgs = document.querySelectorAll(".logo-cont")
    const images = document.querySelectorAll(".logo-cont img")
    const mainImage = document.querySelector(".main-logo img")
    const brands = document.querySelectorAll(".logo-cont")
    document.body.click()
    setTimeout(() => {
    let i =0
        let addClass = setInterval(() => {
            brands[i].classList.add("cont-animaiton")
            images[i].style.boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.1)"
            // imgs[i].classList.add("line")
            i++
            if(i===imgs.length) clearInterval(addClass)
        }, 50)

        
        
        mainImage.classList.add("logo-animation")
}, 1500)


setTimeout(() => {
    let x =0
        let addLineClass = setInterval(() => {
            imgs[x].classList.add("line")
            x++
            if(x===imgs.length) clearInterval(addLineClass)
        }, 50)
        
    }, 2000)


    setTimeout(() => {
        const music = document.getElementById("bgMusic")
        music.click()
        music.play()
    }, 5000)
    
    
}
