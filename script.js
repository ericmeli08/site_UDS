const button = document.querySelector(".conect");
const main = document.querySelector('.form');

let x = 0;

function time () {
    if (getComputedStyle(main).display == "none")
    {
        main.style.display= "block";
    }
    else
    {
        main.style.display = "none";
    }
}

function anime () {
     main.classList.toggle("anime1");
    main.classList.toggle("anime2");
}
function color (check)
{
    if(check.checked)
        check.className = ' check';
}
button.addEventListener("click", function () {
    anime();
    if (x==0)
    {
        x=1;
        time();
        /*setTimeout(time,2000);*/
    }
    else
    {
       setTimeout(time,0);
        x=0;
    }
});