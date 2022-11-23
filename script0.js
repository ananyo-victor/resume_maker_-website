function close1() {
    const temppageOB = document.getElementById('temppage');
    temppageOB.setAttribute('class','hidden');

    const oneandallOB = document.getElementById('oneandall');
    oneandallOB.removeAttribute('class','blur-sm');
    oneandallOB.removeAttribute('class','fixed');
    console.log("hi");
}
function open1(){
    
const miniwindowOB = document.getElementById('miniWindow');
miniwindowOB.classList.toggle('hidden');
}

function close2(){
    
const miniwindowOB = document.getElementById('miniWindow');
miniwindowOB.classList.toggle('hidden');
miniwindowOB.classList.add('hidden');

}