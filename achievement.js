let i = 1;
let j = 1;
let k = 1;
let l = 1;

function AddNewField1() {
    const t = ++i;
    // console.log('a' + t);

    function achievement() {
        return "Achievement" + t;
    }
    function lachievement() {
        return "Achievement " + (t+1);
    }
    function alabel() {
        return "Alabel" + t;
    }
    function div1211() {
        return "div1-2-1-" + t;
    }
    function ainput() {
        return "Ainput" + t;
    }
    function abutton() {
        return "Abutton" + t;
    }


    const achievementOB = document.createElement('div');
    achievementOB.setAttribute('id', achievement());
    achievementOB.classList.add('mt-5');

    const alabelob = document.createElement('label');
    alabelob.setAttribute('id', alabel());
    alabelob.innerText = lachievement();
    alabelob.classList.add('lg:text-3xl');
    alabelob.classList.add('lg:font-semibold');
    alabelob.classList.add('hide');

    const div1211ob = document.createElement('div');
    div1211ob.setAttribute('id', div1211());
    div1211ob.classList.add('flex');
    div1211ob.classList.add('lg:mt-10');

    const ainputob = document.createElement('input');
    ainputob.setAttribute('id', ainput());
    ainputob.classList.add('h-16');
    ainputob.classList.add('w-[450px]');
    ainputob.classList.add('lg:h-20');
    ainputob.classList.add('lg:w-[900px]');
    ainputob.classList.add('border');
    ainputob.classList.add('border-white');
    ainputob.classList.add('rounded-xl');
    ainputob.classList.add('pl-2');
    ainputob.classList.add('md:w-[500px]');
    ainputob.classList.add('text-2xl');

    const abuttonob = document.createElement('button');
    abuttonob.setAttribute('id', abutton());
    abuttonob.classList.add('ml-7');
    abuttonob.classList.add('h-16');
    abuttonob.classList.add('w-[70px]');
    abuttonob.classList.add('lg:h-20');
    abuttonob.classList.add('lg:w-[100px]');
    abuttonob.classList.add('border');
    abuttonob.classList.add('border-white');
    abuttonob.classList.add('rounded-xl');

    const EndBROB1 = document.createElement('br');


    const div2ob = document.getElementById('div1-3');

    const div1ob = document.getElementById('div1-2');
    div1ob.insertBefore(achievementOB, div2ob);
    // achievementOB.insertAdjacentElement('beforebegin', div2ob);

    const newachievementOB = document.getElementById(achievement());
    newachievementOB.appendChild(alabelob);
    newachievementOB.appendChild(EndBROB1);
    newachievementOB.appendChild(div1211ob);

    const newdiv1211ob = document.getElementById(div1211());
    newdiv1211ob.appendChild(ainputob);
    newdiv1211ob.appendChild(abuttonob);
}

function AddNewField2() {
    const t = ++j;
    console.log('h' + t);

    function hobbies() {
        return "Hobbies" + t;
    }
    function hlabel() {
        return "Hlabel" + t;
    }
    function div2211() {
        return "div2-2-1-" + t;
    }
    function hinput() {
        return "Hinput" + t;
    }
    function hbutton() {
        return "Hbutton" + t;
    }


    const hobbiesOB = document.createElement('div');
    hobbiesOB.setAttribute('id', hobbies());
    hobbiesOB.classList.add('mt-5');

    const hlabelob = document.createElement('label');
    hlabelob.setAttribute('id', hlabel());
    hlabelob.classList.add('lg:text-3xl');
    hlabelob.classList.add('lg:font-semibold');
    hlabelob.classList.add('hide');

    const div2211ob = document.createElement('div');
    div2211ob.setAttribute('id', div2211());
    div2211ob.classList.add('flex');
    div2211ob.classList.add('lg:mt-10');

    const hinputob = document.createElement('input');
    hinputob.setAttribute('id', hinput());
    hinputob.classList.add('h-16');
    hinputob.classList.add('w-[450px]');
    hinputob.classList.add('lg:h-20');
    hinputob.classList.add('lg:w-[900px]');
    hinputob.classList.add('border');
    hinputob.classList.add('border-white');
    hinputob.classList.add('rounded-xl');
    hinputob.classList.add('pl-2');
    hinputob.classList.add('md:w-[500px]');
    hinputob.classList.add('text-2xl');

    const hbuttonob = document.createElement('button');
    hbuttonob.setAttribute('id', hbutton());
    hbuttonob.classList.add('ml-7');
    hbuttonob.classList.add('h-16');
    hbuttonob.classList.add('w-[70px');
    hbuttonob.classList.add('lg:h-20');
    hbuttonob.classList.add('lg:w-[100px]');
    hbuttonob.classList.add('border');
    hbuttonob.classList.add('border-white');
    hbuttonob.classList.add('rounded-xl');

    const div4ob = document.getElementById('div2-3');
    const div3ob = document.getElementById('div2-2');
    div3ob.insertBefore(hobbiesOB, div4ob);

    const newhobbiesOB = document.getElementById(hobbies());
    newhobbiesOB.appendChild(hlabelob);
    newhobbiesOB.appendChild(div2211ob);

    const newdiv2211ob = document.getElementById(div2211());
    newdiv2211ob.appendChild(hinputob);
    newdiv2211ob.appendChild(hbuttonob);
}
function AddNewField3() {
    const t = ++k;
    console.log('c' + t);

    function certificate() {
        return "Certificate" + t;
    }
    function lcertificate() {
        return "Certificate " + (t+1);
    }
    function clabel() {
        return "Clabel" + t;
    }
    function div3211() {
        return "div3-2-1-" + t;
    }
    function cinput() {
        return "Cinput" + t;
    }
    function cbutton() {
        return "Cbutton" + t;
    }

    const certificateOB = document.createElement('div');
    certificateOB.setAttribute('id', certificate());
    certificateOB.classList.add('mt-5');

    const clabelob = document.createElement('label');
    clabelob.setAttribute('id', clabel());
    clabelob.innerText = lcertificate();
    clabelob.classList.add('lg:text-3xl');
    clabelob.classList.add('lg:font-semibold');
    clabelob.classList.add('hide');

    const div3211ob = document.createElement('div');
    div3211ob.setAttribute('id', div3211());
    div3211ob.classList.add('flex');
    div3211ob.classList.add('lg:mt-10');

    const cinputob = document.createElement('input');
    cinputob.setAttribute('id', cinput());
    cinputob.classList.add('h-16');
    cinputob.classList.add('w-[450px]');
    cinputob.classList.add('lg:h-20');
    cinputob.classList.add('lg:w-[900px]');
    cinputob.classList.add('border');
    cinputob.classList.add('border-white');
    cinputob.classList.add('rounded-xl');
    cinputob.classList.add('pl-2');
    cinputob.classList.add('md:w-[500px]');
    cinputob.classList.add('text-2xl');

    const cbuttonob = document.createElement('button');
    cbuttonob.setAttribute('id', cbutton());
    cbuttonob.classList.add('ml-7');
    cbuttonob.classList.add('h-16');
    cbuttonob.classList.add('w-[70px]');
    cbuttonob.classList.add('lg:h-20');
    cbuttonob.classList.add('lg:w-[100px]');
    cbuttonob.classList.add('border');
    cbuttonob.classList.add('border-white');
    cbuttonob.classList.add('rounded-xl');

    const div6ob = document.getElementById('div3-3');
    const div5ob = document.getElementById('div3-2');
    div5ob.insertBefore(certificateOB, div6ob);

    const newcertificateOB = document.getElementById(certificate());
    newcertificateOB.appendChild(clabelob);
    newcertificateOB.appendChild(div3211ob);

    const newdiv3211ob = document.getElementById(div3211());
    newdiv3211ob.appendChild(cinputob);
    newdiv3211ob.appendChild(cbuttonob);
}
function AddNewField4() {
    const t = ++l;
    console.log('p' + t);
    function project() {
        return "Projects" + t;
    }
    function plabel() {
        return "Plabel" + t;
    }
    function div4211() {
        return "div4-2-1-" + t;
    }
    function pinput() {
        return "Pinput" + t;
    }
    function pbutton() {
        return "Pbutton" + t;
    }


    const projectsOB = document.createElement('div');
    projectsOB.setAttribute('id', project());
    projectsOB.classList.add('mt-5');

    const plabelob = document.createElement('label');
    plabelob.setAttribute('id', plabel());
    plabelob.classList.add('lg:text-3xl');
    plabelob.classList.add('lg:font-semibold');
    plabelob.classList.add('hide');

    const div4211ob = document.createElement('div');
    div4211ob.setAttribute('id', div4211());
    div4211ob.classList.add('flex');
    div4211ob.classList.add('lg:mt-10');

    const pinputob = document.createElement('input');
    pinputob.setAttribute('id', pinput());
    pinputob.classList.add('h-16');
    pinputob.classList.add('w-[450px]');
    pinputob.classList.add('lg:h-20');
    pinputob.classList.add('lg:w-[900px]');
    pinputob.classList.add('border');
    pinputob.classList.add('border-white');
    pinputob.classList.add('rounded-xl');
    pinputob.classList.add('pl-2');
    pinputob.classList.add('md:w-[500px]');
    pinputob.classList.add('text-2xl');

    const pbuttonob = document.createElement('button');
    pbuttonob.setAttribute('id', pbutton());
    pbuttonob.classList.add('ml-7');
    pbuttonob.classList.add('h-16');
    pbuttonob.classList.add('w-[70px]');
    pbuttonob.classList.add('lg:h-20');
    pbuttonob.classList.add('lg:w-[100px]');
    pbuttonob.classList.add('border');
    pbuttonob.classList.add('border-white');
    pbuttonob.classList.add('rounded-xl');

    const div8ob = document.getElementById('div4-3');
    const div7ob = document.getElementById('div4-2');
    div7ob.insertBefore(projectsOB , div8ob);

    const newprojectOB = document.getElementById(project());
    newprojectOB.appendChild(plabelob);
    newprojectOB.appendChild(div4211ob);

    const newdiv4211ob = document.getElementById(div4211());
    newdiv4211ob.appendChild(pinputob);
    newdiv4211ob.appendChild(pbuttonob);
}

