let i = 1;
function AddField() {
    const t = ++i;
    let k = 0;
    let l = 0;
    const m = t % 2;
    let n = 5*(t-1);

    let arr = ["transparent-pink", "transparent-yellow"];
    function divob() {
        return "div" + t;
    }
    function sdiv(s) {
        return "sdiv" + (n + s);
    }

    function ldiv() {
        return "ldiv" + t;
    }

    function ldiv11() {
        return "ldiv" + t + "-1";
    }
    function ldiv12() {
        return "ldiv" + t + "-2";
    }
    function ldiv13() {
        return "ldiv" + t + "-3";
    }

    function sname() {
        return "sName" + t;
    }
    function sstate() {
        return "sState" + t;
    }
    function scity() {
        return "sCity" + t;
    }
    function sdegree() {
        return "sDegree" + t;
    }
    function sFieldofstate() {
        return "sField-of-Study" + t;
    }
    function spassingyear() {
        return "sPassing-Year" + t;
    }

    function ldiv111() {
        return "ldiv" + t + "-1-1";
    }
    function ldiv112() {
        return "ldiv" + t + "-1-2";
    }
    function ldiv121() {
        return "ldiv" + t + "-2-1";
    }
    function ldiv122() {
        return "ldiv" + t + "-2-2";
    }
    function ldiv131() {
        return "ldiv" + t + "-3-1";
    }
    function ldiv132() {
        return "ldiv" + t + "-3-2";
    }

    function lname() {
        return "lName" + t;
    }
    function lstate() {
        return "lState" + t;
    }
    function lcity() {
        return "lCity" + t;
    }
    function ldegree() {
        return "lDegree" + t;
    }
    function lFieldofstate() {
        return "lField-of-Study" + t;
    }
    function lpassingyear() {
        return "lPassing-Year" + t;
    }

    function lnamelabel() {
        return "lName-label" + t;
    }
    function lstatelabel() {
        return "lState-label" + t;
    }
    function lcitylabel() {
        return "lCity-label" + t;
    }
    function ldegreelabel() {
        return "lDegree-label" + t;
    }
    function lFieldofstatelabel() {
        return "lField-of-Study-label" + t;
    }
    function lpassingyearlabel() {
        return "lPassing-Year-label" + t;
    }

    const divOB = document.createElement('div');
    divOB.setAttribute('id', divob());
    divOB.classList.add('mt-10');
    divOB.classList.add('w-full');
    divOB.classList.add('border-4');
    divOB.classList.add(arr[m]);
    divOB.classList.add('border-white');
    divOB.classList.add('rounded-xl');

    const sdiv1ob = document.createElement('div');
    sdiv1ob.setAttribute('id', sdiv(t));
    sdiv1ob.classList.add('mt-5');
    sdiv1ob.classList.add('flex');
    sdiv1ob.classList.add('justify-center');
    sdiv1ob.classList.add('lg:hidden');
    sdiv1ob.classList.add(t);


    const sdiv2ob = document.createElement('div');
    sdiv2ob.setAttribute('id', sdiv(t + 1));
    sdiv2ob.classList.add('mt-6');
    sdiv2ob.classList.add('flex');
    sdiv2ob.classList.add('justify-center');
    sdiv2ob.classList.add('lg:hidden');

    const sdiv3ob = document.createElement('div');
    sdiv3ob.setAttribute('id', sdiv(t + 2));
    sdiv3ob.classList.add('mt-6');
    sdiv3ob.classList.add('flex');
    sdiv3ob.classList.add('justify-center');
    sdiv3ob.classList.add('lg:hidden');

    const sdiv4ob = document.createElement('div');
    sdiv4ob.setAttribute('id', sdiv(t + 3));
    sdiv4ob.classList.add('mt-6');
    sdiv4ob.classList.add('flex');
    sdiv4ob.classList.add('justify-center');
    sdiv4ob.classList.add('lg:hidden');

    const sdiv5ob = document.createElement('div');
    sdiv5ob.setAttribute('id', sdiv(t + 4));
    sdiv5ob.classList.add('mt-6');
    sdiv5ob.classList.add('flex');
    sdiv5ob.classList.add('justify-center');
    sdiv5ob.classList.add('lg:hidden');

    const sdiv6ob = document.createElement('div');
    sdiv6ob.setAttribute('id', sdiv(t + 5));
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

    const ldiv11OB = document.createElement('div');
    ldiv11OB.setAttribute('id', ldiv11());
    ldiv11OB.classList.add('hide');
    ldiv11OB.classList.add('lg:mt-8');
    ldiv11OB.classList.add('lg:flex');
    ldiv11OB.classList.add('lg:justify-evenly');

    const ldiv12OB = document.createElement('div');
    ldiv12OB.setAttribute('id', ldiv12());
    ldiv12OB.classList.add('hide');
    ldiv12OB.classList.add('lg:mt-8');
    ldiv12OB.classList.add('lg:flex');
    ldiv12OB.classList.add('lg:justify-evenly');

    const ldiv13OB = document.createElement('div');
    ldiv13OB.setAttribute('id', ldiv13());
    ldiv13OB.classList.add('hide');
    ldiv13OB.classList.add('lg:mt-8');
    ldiv13OB.classList.add('lg:flex');
    ldiv13OB.classList.add('lg:justify-evenly');

    const sinput1 = document.createElement('input');
    sinput1.setAttribute('id', sname());
    sinput1.setAttribute('type', 'text');
    sinput1.setAttribute('placeholder', 'Name');
    sinput1.classList.add('h-16');
    sinput1.classList.add('w-[500px]');
    sinput1.classList.add('border-2');
    sinput1.classList.add('border-white');
    sinput1.classList.add('rounded-xl');
    sinput1.classList.add('pl-2');
    sinput1.classList.add('md:w-[640px]');

    const sinput2 = document.createElement('input');
    sinput2.setAttribute('id', scity());
    sinput2.setAttribute('type', 'text');
    sinput2.setAttribute('placeholder', 'City');
    sinput2.classList.add('h-16');
    sinput2.classList.add('w-[500px]');
    sinput2.classList.add('border-2');
    sinput2.classList.add('border-white');
    sinput2.classList.add('rounded-xl');
    sinput2.classList.add('pl-2');
    sinput2.classList.add('md:w-[640px]');

    const sinput3 = document.createElement('input');
    sinput3.setAttribute('id', sstate());
    sinput3.setAttribute('type', 'text');
    sinput3.setAttribute('placeholder', 'State');
    sinput3.classList.add('h-16');
    sinput3.classList.add('w-[500px]');
    sinput3.classList.add('border-2');
    sinput3.classList.add('border-white');
    sinput3.classList.add('rounded-xl');
    sinput3.classList.add('pl-2');
    sinput3.classList.add('md:w-[640px]');

    const sinput4 = document.createElement('input');
    sinput4.setAttribute('id', sdegree());
    sinput4.setAttribute('type', 'text');
    sinput4.classList.add('h-16');
    sinput4.classList.add('w-[500px]');
    sinput4.classList.add('border-2');
    sinput4.classList.add('border-white');
    sinput4.classList.add('rounded-xl');
    sinput4.classList.add('pl-2');
    sinput4.classList.add('md:w-[640px]');

    const sinput5 = document.createElement('input');
    sinput5.setAttribute('id', sFieldofstate());
    sinput5.setAttribute('type', 'text');
    sinput5.setAttribute('placeholder', 'Field of Study');
    sinput5.classList.add('h-16');
    sinput5.classList.add('w-[500px]');
    sinput5.classList.add('border-2');
    sinput5.classList.add('border-white');
    sinput5.classList.add('rounded-xl');
    sinput5.classList.add('pl-2');
    sinput5.classList.add('md:w-[640px]');

    const sinput6 = document.createElement('input');
    sinput6.setAttribute('id', spassingyear());
    sinput6.setAttribute('type', 'text');
    sinput6.setAttribute('placeholder', 'Passing Year');
    sinput6.classList.add('h-16');
    sinput6.classList.add('w-[500px]');
    sinput6.classList.add('border-2');
    sinput6.classList.add('border-white');
    sinput6.classList.add('rounded-xl');
    sinput6.classList.add('pl-2');
    sinput6.classList.add('md:w-[640px]');

    const ldiv111OB = document.createElement('div');
    ldiv111OB.setAttribute('id', ldiv111());
    ldiv111OB.classList.add('lg:flex');
    ldiv111OB.classList.add('lg:flex-col');

    const ldiv112OB = document.createElement('div');
    ldiv112OB.setAttribute('id', ldiv112());
    ldiv112OB.classList.add('lg:flex');
    ldiv112OB.classList.add('lg:flex-col');

    const ldiv121OB = document.createElement('div');
    ldiv121OB.setAttribute('id', ldiv121());
    ldiv121OB.classList.add('lg:flex');
    ldiv121OB.classList.add('lg:flex-col');

    const ldiv122OB = document.createElement('div');
    ldiv122OB.setAttribute('id', ldiv122());
    ldiv122OB.classList.add('lg:flex');
    ldiv122OB.classList.add('lg:flex-col');

    const ldiv131OB = document.createElement('div');
    ldiv131OB.setAttribute('id', ldiv131());
    ldiv131OB.classList.add('lg:flex');
    ldiv131OB.classList.add('lg:flex-col');

    const ldiv132OB = document.createElement('div');
    ldiv132OB.setAttribute('id', ldiv132());
    ldiv132OB.classList.add('lg:flex');
    ldiv132OB.classList.add('lg:flex-col');

    const label1 = document.createElement('label');
    label1.setAttribute('id', lnamelabel());
    label1.classList.add('lg:text-2xl');
    label1.classList.add('lg:font-semibold');
    label1.innerText = "Name";

    const linput1 = document.createElement('input');
    linput1.setAttribute('id', lname());
    linput1.setAttribute('type', 'text');
    linput1.setAttribute('placeholder', 'Name');
    linput1.classList.add('w-[500px]');
    linput1.classList.add('border-2');
    linput1.classList.add('border-white');
    linput1.classList.add('rounded-xl');
    linput1.classList.add('pl-2');
    linput1.classList.add('h-16');
    linput1.classList.add('lg:mt-3');
    linput1.classList.add('lg:h-16');
    linput1.classList.add('lg:text-xl');

    const label2 = document.createElement('label');
    label2.setAttribute('id', lcitylabel());
    label2.classList.add('lg:text-2xl');
    label2.classList.add('lg:font-semibold');
    label2.innerText = "City";

    const linput2 = document.createElement('input');
    linput2.setAttribute('id', lcity());
    linput2.setAttribute('type', 'text');
    linput2.setAttribute('placeholder', 'City');
    linput2.classList.add('w-[500px]');
    linput2.classList.add('border-2');
    linput2.classList.add('border-white');
    linput2.classList.add('rounded-xl');
    linput2.classList.add('pl-2');
    linput2.classList.add('h-16');
    linput2.classList.add('lg:mt-3');
    linput2.classList.add('lg:h-16');
    linput2.classList.add('lg:text-xl');

    const label3 = document.createElement('label');
    label3.setAttribute('id', lstatelabel());
    label3.classList.add('lg:text-2xl');
    label3.classList.add('lg:font-semibold');
    label3.innerText = "State";

    const linput3 = document.createElement('input');
    linput3.setAttribute('id', lstate());
    linput3.setAttribute('type', 'text');
    linput3.setAttribute('placeholder', 'State');
    linput3.classList.add('w-[500px]');
    linput3.classList.add('border-2');
    linput3.classList.add('border-white');
    linput3.classList.add('rounded-xl');
    linput3.classList.add('pl-2');
    linput3.classList.add('h-16');
    linput3.classList.add('lg:mt-3');
    linput3.classList.add('lg:h-16');
    linput3.classList.add('lg:text-xl');

    const label4 = document.createElement('label');
    label4.setAttribute('id', ldegreelabel());
    label4.classList.add('lg:text-2xl');
    label4.classList.add('lg:font-semibold');
    label4.innerText = "Degree";

    const linput4 = document.createElement('input');
    linput4.setAttribute('id', ldegree());
    linput4.setAttribute('type', 'text');
    linput4.classList.add('w-[500px]');
    linput4.classList.add('border-2');
    linput4.classList.add('border-white');
    linput4.classList.add('rounded-xl');
    linput4.classList.add('pl-2');
    linput4.classList.add('h-16');
    linput4.classList.add('lg:mt-3');
    linput4.classList.add('lg:h-16');
    linput4.classList.add('lg:text-xl');

    const label5 = document.createElement('label');
    label5.setAttribute('id', lFieldofstatelabel());
    label5.classList.add('lg:text-2xl');
    label5.classList.add('lg:font-semibold');
    label5.innerText = "Field of Study";

    const linput5 = document.createElement('input');
    linput5.setAttribute('id', lFieldofstate());
    linput5.setAttribute('type', 'text');
    linput5.setAttribute('placeholder', 'Field of Study');
    linput5.classList.add('w-[500px]');
    linput5.classList.add('border-2');
    linput5.classList.add('border-white');
    linput5.classList.add('rounded-xl');
    linput5.classList.add('pl-2');
    linput5.classList.add('h-16');
    linput5.classList.add('lg:mt-3');
    linput5.classList.add('lg:h-16');
    linput5.classList.add('lg:text-xl');

    const label6 = document.createElement('label');
    label6.setAttribute('id', lpassingyearlabel());
    label6.classList.add('lg:text-2xl');
    label6.classList.add('lg:font-semibold');
    label6.innerText = "Passing Year";

    const linput6 = document.createElement('input');
    linput6.setAttribute('id', lpassingyear());
    linput6.setAttribute('type', 'text');
    linput6.setAttribute('placeholder', 'Passing Year');
    linput6.classList.add('w-[500px]');
    linput6.classList.add('border-2');
    linput6.classList.add('border-white');
    linput6.classList.add('rounded-xl');
    linput6.classList.add('pl-2');
    linput6.classList.add('h-16');
    linput6.classList.add('lg:mt-3');
    linput6.classList.add('lg:h-16');
    linput6.classList.add('lg:text-xl');

    const AddBtn = document.getElementById("AddBtn1");

    const mainOB = document.getElementById("main");

    mainOB.insertBefore(divOB, AddBtn);

    const addOB = document.getElementById(divob());
    addOB.appendChild(sdiv1ob);
    addOB.appendChild(sdiv2ob);
    addOB.appendChild(sdiv3ob);
    addOB.appendChild(sdiv4ob);
    addOB.appendChild(sdiv5ob);
    addOB.appendChild(sdiv6ob);
    addOB.appendChild(ldivOB);


    const sdiv1 = document.getElementById(sdiv(t));
    const sdiv2 = document.getElementById(sdiv(t + 1));
    const sdiv3 = document.getElementById(sdiv(t + 2));
    const sdiv4 = document.getElementById(sdiv(t + 3));
    const sdiv5 = document.getElementById(sdiv(t + 4));
    const sdiv6 = document.getElementById(sdiv(t + 5));

    let sinputt = [sinput1, sinput2, sinput3, sinput4, sinput5, sinput6];
    let sdivv = [sdiv1, sdiv2, sdiv3, sdiv4, sdiv5, sdiv6];

    for (let i = 0; i < 6; i++) {
        sdivv[i].appendChild(sinputt[i]);
    }

    const ldivv1 = document.getElementById(ldiv());
    ldivv1.appendChild(ldiv11OB);
    ldivv1.appendChild(ldiv12OB);
    ldivv1.appendChild(ldiv13OB);

    const ldiv11obb = document.getElementById(ldiv11());
    const ldiv12obb = document.getElementById(ldiv12());
    const ldiv13obb = document.getElementById(ldiv13());

    let ldiv123OB = [ldiv11obb, ldiv12obb, ldiv13obb];
    let ldiv112233 = [ldiv111OB, ldiv112OB, ldiv121OB, ldiv122OB, ldiv131OB, ldiv132OB];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            ldiv123OB[i].appendChild(ldiv112233[k++]);
        }
    }


    let content = [label1, linput1, label2, linput2, label3, linput3, label4, linput4, label5, linput5, label6, linput6];

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
            ldiv112233[i].appendChild(content[l++]);
        }
    }
    n += 5;
}