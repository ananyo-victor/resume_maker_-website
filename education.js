iFrameResize({ log: true }, "#templateOpen1")
let i=1;
function AddNewField(){
    const t=++i;

    function divob(){
        return "div" +t;
    }
function sdiv(s){
    return "sdiv" +(6+s);
}

function ldiv(){
    return "ldiv" +t;
}

function ldiv11(){
    return "ldiv" +t +"-1";
}
function ldiv12(){
    return "ldiv" +t +"-2";
}
function ldiv13(){
    return "ldiv" +t +"-3";
}

function sname(){
    return "sName" +t;
}
function sstate(){
    return "sState" +t;
}
function scity(){
    return "sCity" +t;
}
function sdegree(){
    return "sDegree" +t;
}
function sFieldofstate(){
    return "sField-of-Study" +t;
}
function spassingyear(){
    return "sPassing-Year" +t;
}

function ldiv111(){
    return "ldiv" +t +"-1-1";
}
function ldiv112(){
    return "ldiv" +t +"-1-2";
}
function ldiv121(){
    return "ldiv" +t +"-2-1";
}
function ldiv122(){
    return "ldiv" +t +"-2-2";
}
function ldiv131(){
    return "ldiv" +t +"-3-1";
}
function ldiv132(){
    return "ldiv" +t +"-3-2";
}

function lname(){
    return "lName" +t;
}
function lstate(){
    return "lState" +t;
}
function lcity(){
    return "lCity" +t;
}
function ldegree(){
    return "lDegree" +t;
}
function lFieldofstate(){
    return "lField-of-Study" +t;
}
function lpassingyear(){
    return "lPassing-Year" +t;
}

function lnamelabel(){
    return "lName-label" +t;
}
function lstatelabel(){
    return "lState-label" +t;
}
function lcitylabel(){
    return "lCity-label" +t;
}
function ldegreelabel(){
    return "lDegree-label" +t;
}
function lFieldofstatelabel(){
    return "lField-of-Study-label" +t;
}
function lpassingyearlabel(){
    return "lPassing-Year-label" +t;
}

const divOB = document.createElement('div');
divOB.setAttribute('id', divob());
divOB.classList.add('mt-10'); 
divOB.classList.add('w-full'); 
divOB.classList.add('border-4'); 
divOB.classList.add('transparent-yellow'); 
divOB.classList.add('border-white'); 
divOB.classList.add('rounded-xl');

const sdiv1ob = document.createElement('div');
sdiv1ob.setAttribute('id', sdiv(t));
sdiv1ob.classList.add('mt-5');
sdiv1ob.classList.add('flex');
sdiv1ob.classList.add('justify-center');
sdiv1ob.classList.add('lg:hidden');

const sdiv2ob = document.createElement('div');
sdiv2ob.setAttribute('id', sdiv(t));
sdiv2ob.classList.add('mt-6');
sdiv2ob.classList.add('flex');
sdiv2ob.classList.add('justify-center');
sdiv2ob.classList.add('lg:hidden');

const sdiv3ob = document.createElement('div');
sdiv3ob.setAttribute('id'.sdiv(t));
sdiv3ob.classList.add('mt-6');
sdiv3ob.classList.add('flex');
sdiv3ob.classList.add('justify-center');
sdiv3ob.classList.add('lg:hidden');

const sdiv4ob = document.createElement('div');
sdiv4ob.setAttribute('id'.sdiv(t));
sdiv4ob.classList.add('mt-6');
sdiv4ob.classList.add('flex');
sdiv4ob.classList.add('justify-center');
sdiv4ob.classList.add('lg:hidden');

const sdiv5ob = document.createElement('div');
sdiv5ob.setAttribute('id'.sdiv(t));
sdiv5ob.classList.add('mt-6');
sdiv5ob.classList.add('flex');
sdiv5ob.classList.add('justify-center');
sdiv5ob.classList.add('lg:hidden');

const sdiv6ob = document.createElement('div');
sdiv6ob.setAttribute('id'.sdiv(t));
sdiv6ob.classList.add('mt-6');
sdiv6ob.classList.add('flex');
sdiv6ob.classList.add('justify-center');
sdiv6ob.classList.add('lg:hidden');

const ldivOB = document.createElement('div');
ldivOB.setAttribute('id', ldiv());
ldivOB.classList.add('justify-evenly');
ldivOB.classList.add('lg:flex');
ldivOB.classList.add('lg:flex-col');
ldivOB.classList.add('mb-5');

const ldiv11 
}