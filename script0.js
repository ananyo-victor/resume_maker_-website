function preview1() {
    const previewOB = document.getElementById('preview');
    previewOB.classList.toggle('hidden');
    const cancelpreviewOB = document.getElementById('cancelPreview');
    cancelpreviewOB.classList.toggle('hidden');
    const oneandallOB = document.getElementById('oneandall');
    oneandallOB.classList.toggle('fixed');
    oneandallOB.classList.toggle('blur-sm');
    // console.log("hi");
    fun();
}
function open1() {

    const miniwindowOB = document.getElementById('miniWindow');
    miniwindowOB.classList.toggle('hidden');
}
let i = 1;
function generateResume() {
    const t = ++i;
    function semployeer() {
        return "sEmployeer" + t;
    }
    function sjobtitle() {
        return "sJob_Title" + t;
    }
    function lemployeer() {
        return "lEmployeer" + t;
    }
    function ljob_title() {
        return "lJob_Title" + t;
    }
    function startdate() {
        return "StartDate" + t;
    }
    function enddate() {
        return "EndDate" + t;
    }
    // const PhoneNumber = document.getElementById('PhoneNumber').value;
    let Fname = document.getElementById('FName').value;
    localStorage.setItem("Fname", Fname);
    const Mname = document.getElementById('MName').value;
    localStorage.setItem("Mname", Mname);
    const Lname = document.getElementById('LName').value;
    localStorage.setItem("Lname", Lname);
    const Proffession = document.getElementById('Proffession').value;
    localStorage.setItem("Proffession", Proffession);
    const Address = document.getElementById('Address').value;
    localStorage.setItem("Address", Address);
    const Country = document.getElementById('Country').value;
    localStorage.setItem("Country", Country);
    const City = document.getElementById('City').value;
    localStorage.setItem("City", City);
    const PhoneNumber = document.getElementById('PhoneNumber').value;
    localStorage.setItem("PhoneNumber", PhoneNumber);
    const Email = document.getElementById('Email').value;
    localStorage.setItem("Email", Email);

    
    const semployeerOB = document.getElementById(semployeer()).value;
    localStorage.setItem("semployeer", semployeerOB);
    const sjobtitle = document.getElementById(sjobtitle()).value;
    localStorage.setItem(sjobtitle(), "sjobtitle");
    const lemployeer = document.getElementById(lemployeer()).value;
    localStorage.setItem(lemployeer(), lemployeer);
    const ljob_title = document.getElementById(ljob_title()).value;
    localStorage.setItem(ljob_title(), ljob_title);
    const startdate = document.getElementById(startdate()).value;
    localStorage.setItem(startdate(), startdate);
    const enddate = document.getElementById(enddate()).value;
    localStorage.setItem(enddate(), enddate);
    fun();




}
function fun() {
    document.getElementById('namet1').innerText = localStorage.getItem('Fname') + " ";
    document.getElementById('namet1').innerText += localStorage.getItem('Mname') + " ";
    document.getElementById('namet1').innerText += localStorage.getItem('Lname');
    document.getElementById('professiont1').innerText = localStorage.getItem('Proffession');
    document.getElementById('phonet1').innerText = localStorage.getItem('PhoneNumber');
    document.getElementById('mailt1').innerText = localStorage.getItem('Email');


    document.getElementById('mailt1').innerText = localStorage.getItem('semployeer');
    document.getElementById('mailt1').innerText = localStorage.getItem('sjobtitle');
    document.getElementById('mailt1').innerText = localStorage.getItem('lemployeer');
    document.getElementById('mailt1').innerText = localStorage.getItem('ljob_title');
    document.getElementById('startdate').innerText = localStorage.getItem('startdate');
    document.getElementById('mailt1').innerText = localStorage.getItem('enddate');
}