let i = 1;

function addNewField() {
    const t = ++i;
    const m = t % 2;

    let arr = ["transparent-pink", "transparent-yellow"];

    // small screen started

    function sdiv() {
        return "sdiv" + t;
    }

    function sdiv1_1() {
        return "sdiv" + t + "_1";
    }

    function sdiv1_2() {
        return "sdiv" + t + "_2";
    }

    function sdiv1_1_1() {
        return "sdiv" + t + "_1_1"
    }

    function sdiv1_1_2() {
        return "sdiv" + t + "_1_2";
    }

    function sskilllabel() {
        return "sskilllabel" + t;
    }

    function sskillinput() {
        return "sskillinput" + t;
    }

    function slevellabel() {
        return "slevellabel" + t;
    }

    function sbutton() {
        return "sbutton" + t;
    }

    function sselectlevel() {
        return "sselectlevel" + t;
    }

    function soption1_1() {
        return "soption" + t + "_1";
    }

    function soption1_2() {
        return "soption" + t + "_2";
    }

    function soption1_3() {
        return "soption" + t + "_4";
    }

    function soption1_4() {
        return "soption" + t + "_4";
    }

    const sdivOB = document.createElement('div');
    sdivOB.setAttribute('id', sdiv());
    sdivOB.classList.add('flex');
    sdivOB.classList.add('justify-between');
    sdivOB.classList.add('mt-5');
    sdivOB.classList.add('pb-5');
    sdivOB.classList.add('lg:hidden');
    sdivOB.classList.add(arr[m]);
    sdivOB.classList.add('rounded-xl');
    sdivOB.classList.add('border-2');
    sdivOB.classList.add('border-white');
    console.log(arr[m]);
    console.log(sdiv());

    const sdiv11OB = document.createElement('div');
    sdiv11OB.setAttribute('id', sdiv1_1());
    sdiv11OB.classList.add('pl-9');
    sdiv11OB.classList.add('md:pl-5');
    sdiv11OB.classList.add('flex');
    sdiv11OB.classList.add('flex-col');
    sdiv11OB.classList.add('items-center');

    const sdiv12OB = document.createElement('div');
    sdiv12OB.setAttribute('id', sdiv1_2());
    sdiv12OB.classList.add('w-20');
    sdiv12OB.classList.add('flex');
    sdiv12OB.classList.add('justify-center');
    sdiv12OB.classList.add('items-center');

    const sdiv111OB = document.createElement('div');
    sdiv111OB.setAttribute('id', sdiv1_1_1());
    sdiv111OB.classList.add('mt-4');

    const sdiv112OB = document.createElement('div');
    sdiv112OB.setAttribute('id', sdiv1_1_2());
    sdiv112OB.classList.add('mt-4');

    const sskilllabelOB = document.createElement('label');
    sskilllabelOB.setAttribute('id', sskilllabel());
    sskilllabelOB.classList.add('text-xl');
    sskilllabelOB.classList.add('font-semibold');
    sskilllabelOB.innerText = 'Skill';

    const EndBROB1 = document.createElement('br');
    const EndBROB2 = document.createElement('br');

    const sskillinputOB = document.createElement('input');
    sskillinputOB.setAttribute('id', sskillinput());
    sskillinputOB.setAttribute('type', 'text');
    sskillinputOB.classList.add('h-14');
    sskillinputOB.classList.add('w-[450px]');
    sskillinputOB.classList.add('border-2');
    sskillinputOB.classList.add('border-white');
    sskillinputOB.classList.add('rounded-xl');
    sskillinputOB.classList.add('pl-2');
    sskillinputOB.classList.add('text-gray-400');
    sskillinputOB.classList.add('md:w-[580px]');
    sskillinputOB.classList.add('mt-3');

    const slevellabelOB = document.createElement('label');
    slevellabelOB.setAttribute('id', slevellabel());
    slevellabelOB.classList.add('text-xl');
    slevellabelOB.classList.add('font-semibold');
    slevellabelOB.innerText = 'Level';

    const sselectlevelOB = document.createElement('select');
    sselectlevelOB.setAttribute('id', sselectlevel());
    sselectlevelOB.classList.add('h-14');
    sselectlevelOB.classList.add('w-[450px]');
    sselectlevelOB.classList.add('border-2');
    sselectlevelOB.classList.add('border-white');
    sselectlevelOB.classList.add('rounded-xl');
    sselectlevelOB.classList.add('pl-2');
    sselectlevelOB.classList.add('md:w-[580px]');
    sselectlevelOB.classList.add('mt-3');

    const soption11OB = document.createElement('option');
    soption11OB.setAttribute('id', soption1_1());
    soption11OB.setAttribute('value', 'default');
    soption11OB.classList.add('text-base');
    soption11OB.innerText = "Options";

    const soption12OB = document.createElement('option');
    soption12OB.setAttribute('id', soption1_2());
    soption12OB.setAttribute('value', 'high');
    soption12OB.classList.add('text-base');
    soption12OB.innerText = "Expert";

    const soption13OB = document.createElement('option');
    soption13OB.setAttribute('id', soption1_3());
    soption13OB.setAttribute('value', 'medium');
    soption13OB.classList.add('text-base');
    soption13OB.innerText = "Intermidiate";

    const soption14OB = document.createElement('option');
    soption14OB.setAttribute('id', soption1_4());
    soption14OB.setAttribute('value', 'low');
    soption14OB.classList.add('text-base');
    soption14OB.innerText = "Beginner";


    const sbuttonOB = document.createElement('button');
    sbuttonOB.setAttribute('id', sbutton());
    sbuttonOB.setAttribute('onclick', 'close2()');
    sbuttonOB.classList.add('h-5');
    sbuttonOB.classList.add('w-5');
    sbuttonOB.innerHTML = '<img src="delete.png" alt="" srcset="">';


    // small screen ended


    // large screen started

    function ldiv() {
        return "ldiv" + t;
    }
    function ldiv11() {
        return "ldiv" + t + "_1";
    }
    function ldiv12() {
        return "ldiv" + t + "_2";
    }
    function ldiv13() {
        return "ldiv" + t + "_3";
    }
    function lskilllabel() {
        return "lskilllabel" + t;
    }
    function lskillinput() {
        return "lskillinput" + t;
    }
    function llevellabel() {
        return "llevellabel" + t;
    }
    function lselectlevel() {
        return "lselectlevel" + t;
    }
    function loption11() {
        return "loption" + t + "_1";
    }
    function loption12() {
        return "loption" + t + "_2";
    }
    function loption13() {
        return "loption" + t + "_3";
    }
    function loption14() {
        return "loption" + t + "_4";
    }

    function lbutton() {
        return "lbutton" + t;
    }


    const ldivOB = document.createElement('div');
    ldivOB.setAttribute('id', ldiv());
    ldivOB.classList.add('lg:flex');
    ldivOB.classList.add('justify-evenly');
    ldivOB.classList.add('mt-5');
    ldivOB.classList.add('pb-5');
    ldivOB.classList.add('hide');
    ldivOB.classList.add(arr[m]);
    ldivOB.classList.add('rounded-xl');
    ldivOB.classList.add('border-4');
    ldivOB.classList.add('border-white');

    const ldiv11OB = document.createElement('div');
    ldiv11OB.setAttribute('id', ldiv11());
    ldiv11OB.classList.add('mt-4');

    const ldiv12OB = document.createElement('div');
    ldiv12OB.setAttribute('id', ldiv12());
    ldiv12OB.classList.add('mt-4');

    const ldiv13OB = document.createElement('div');
    ldiv13OB.setAttribute('id', ldiv13());
    ldiv13OB.classList.add('mt-7');
    ldiv13OB.classList.add('pt-7');
    ldiv13OB.classList.add('w-20');
    ldiv13OB.classList.add('flex');
    ldiv13OB.classList.add('justify-center');
    ldiv13OB.classList.add('items-center');

    const lskilllabelOB = document.createElement('label');
    lskilllabelOB.setAttribute('id', lskilllabel());
    lskilllabelOB.classList.add('text-xl');
    lskilllabelOB.classList.add('font-semibold');
    lskilllabelOB.innerText = 'Skill';

    const lskillinputOB = document.createElement('input');
    lskillinputOB.setAttribute('id', lskillinput());
    lskillinputOB.setAttribute('type', 'text');
    lskillinputOB.classList.add('h-16');
    lskillinputOB.classList.add('w-[450px]');
    lskillinputOB.classList.add('border');
    lskillinputOB.classList.add('border-white');
    lskillinputOB.classList.add('rounded-xl');
    lskillinputOB.classList.add('pl-2');
    lskillinputOB.classList.add('lg:mt-4');
    lskillinputOB.classList.add('lg:h-16');
    lskillinputOB.classList.add('lg:text-xl');

    const llevellabelOB = document.createElement('label');
    llevellabelOB.setAttribute('id', llevellabel());
    llevellabelOB.classList.add('text-xl');
    llevellabelOB.classList.add('font-semibold');
    llevellabelOB.innerText = 'Level';

    const lselectlevelOB = document.createElement('select');
    lselectlevelOB.setAttribute('id', lselectlevel());
    lselectlevelOB.classList.add('h-16');
    lselectlevelOB.classList.add('w-[450px]');
    lselectlevelOB.classList.add('border');
    lselectlevelOB.classList.add('border-white');
    lselectlevelOB.classList.add('rounded-xl');
    lselectlevelOB.classList.add('pl-2');
    lselectlevelOB.classList.add('lg:mt-4');
    lselectlevelOB.classList.add('lg:h-16');
    lselectlevelOB.classList.add('lg:text-xl');

    const loption11OB = document.createElement('option');
    loption11OB.setAttribute('id', loption11());
    loption11OB.setAttribute('value', 'default');
    loption11OB.classList.add('text-base');
    loption11OB.innerText = 'Options';

    const loption12OB = document.createElement('option');
    loption12OB.setAttribute('id', loption12());
    loption12OB.setAttribute('value', 'high');
    loption12OB.classList.add('text-base');
    loption12OB.innerText = 'Expert';

    const loption13OB = document.createElement('option');
    loption13OB.setAttribute('id', loption13());
    loption13OB.setAttribute('value', 'medium');
    loption13OB.classList.add('text-base');
    loption13OB.innerText = 'Intermidiate';

    const loption14OB = document.createElement('option');
    loption14OB.setAttribute('id', loption14());
    loption14OB.setAttribute('value', 'low');
    loption14OB.classList.add('text-base');
    loption14OB.innerText = 'Beginner';


    const lbuttonOB = document.createElement('button');
    lbuttonOB.setAttribute('id', lbutton());
    lbuttonOB.setAttribute('onclick', 'close2()');
    lbuttonOB.classList.add('h-8');
    lbuttonOB.classList.add('w-8');
    lbuttonOB.innerHTML = '<img src="delete.png" alt="" srcset="">';

    // large screen ended

    const AddBtnOB = document.getElementById("AddBtn");

    const weOB = document.getElementById('we');
    weOB.insertBefore(sdivOB, AddBtnOB);
    weOB.insertBefore(ldivOB, AddBtnOB);

    // small screen started

    const a12 = document.getElementById(sdiv());
    a12.appendChild(sdiv11OB);
    a12.appendChild(sdiv12OB);

    const a123 = document.getElementById(sdiv1_1());
    a123.appendChild(sdiv111OB);
    a123.appendChild(sdiv112OB);

    const a1234 = document.getElementById(sdiv1_1_1());
    a1234.appendChild(sskilllabelOB);
    // a1234.appendChild(EndBROB1);
    a1234.appendChild(sskillinputOB);

    const a12345 = document.getElementById(sdiv1_1_2());
    a12345.appendChild(slevellabelOB);
    // a12345.appendChild(EndBROB2);
    a12345.appendChild(sselectlevelOB);

    const a123456 = document.getElementById(sselectlevel());
    a123456.appendChild(soption11OB);
    a123456.appendChild(soption12OB);
    a123456.appendChild(soption13OB);
    a123456.appendChild(soption14OB);

    const a1123 = document.getElementById(sdiv1_2());
    a1123.appendChild(sbuttonOB);

    // small screen ended

    // large screen started

    const b12 = document.getElementById(ldiv());
    b12.appendChild(ldiv11OB);
    b12.appendChild(ldiv12OB);
    b12.appendChild(ldiv13OB);

    const b1234 = document.getElementById(ldiv11());
    b1234.appendChild(lskilllabelOB);
    b1234.appendChild(EndBROB1);
    b1234.appendChild(lskillinputOB);

    const b12345 = document.getElementById(ldiv12());
    b12345.appendChild(llevellabelOB);
    b12345.appendChild(EndBROB2);
    b12345.appendChild(lselectlevelOB);

    const b123456 = document.getElementById(lselectlevel());
    b123456.appendChild(loption11OB);
    b123456.appendChild(loption12OB);
    b123456.appendChild(loption13OB);
    b123456.appendChild(loption14OB);

    const b1123 = document.getElementById(ldiv13());
    b1123.appendChild(lbuttonOB);

    // large screen ended

    const oneandallOB = document.getElementById('oneandall');
    oneandallOB.classList.remove('h-screen');
    oneandallOB.classList.add('h-full');
    oneandallOB.classList.add('lg:h-sceen');

    const clBtnOB1 = document.getElementById(lbutton());
    const clBtnOB2 = document.getElementById(sbutton());
    clBtnOB1.onclick = function () {
        ldivOB.style.display = "none";
    }
    clBtnOB2.onclick = function () {
        sdivOB.style.display = "none";
    }
}

// function open2(){

//     const ab123 = document.getElementById(ldiv());
//     ab123.classList.add('hidden');
    
//     const abc123 = document.getElementById(sdiv());
//     abc123.classList.add('hidden');

// }