// for page 2
let i = 1;
let j = 1;


function addNewWEField() {

    const t = ++i;
    function sjob() {
        return "sJobDiv" + t;
    }
    function semp() {
        return "sEmpDiv" + t;
    }
    function ljob() {
        return "lJobDiv" + t;
    }
    function lemp() {
        return "lEmpDiv" + t;
    }
    function Sempjobdiv() {
        return "SempJobDiv" + t;
    }
    function startdiv() {
        return "StartDiv" + t;
    }
    function enddiv() {
        return "EndDiv" + t;
    }
    function endalldiv() {
        return "EndAllDiv" + t;
    }
    function startenddiv() {
        return "StartEndDiv" + t;
    }
    function endspan() {
        return "EndSpan" + t;
    }
    function closespan() {
        return "EndSpan" + (t - 1);
    }
    function lempjobdiv() {
        return "LempJobDiv" + t;
    }
    function closediv() {
        return "closeDiv" + t;
    }
    function closebtn() {
        return "closeBtn" + t;
    }
    function lemployeer() {
        return "lEmployeer" + t;
    }
    function lemplabel() {
        return "lempLabel1" + t;
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
    function semployeer() {
        return "sEmployeer" + t;
    }
    function sjobtitle() {
        return "sJob_Title" + t;
    }

    // Creating div to store all the div

    const LempJobDivOB = document.createElement('div');
    LempJobDivOB.setAttribute('id', lempjobdiv());

    // LempJobDivOB.setAttribute('onclick', closeField());

    // creating div to contain the close button

    const closeDivOB = document.createElement('div');
    closeDivOB.setAttribute('id', closediv());
    closeDivOB.classList.add('w-full');
    closeDivOB.classList.add('lg:h-14');
    closeDivOB.classList.add('h-10');
    closeDivOB.classList.add('flex');
    closeDivOB.classList.add('justify-end');
    closeDivOB.classList.add('items-end');

    // creating the close button

    const closeBtnOB = document.createElement('button');
    closeBtnOB.setAttribute('id', closebtn());
    closeBtnOB.classList.add('lg:h-9');
    closeBtnOB.classList.add('lg:w-9');
    closeBtnOB.classList.add('h-7');
    closeBtnOB.classList.add('w-7');
    closeBtnOB.classList.add('lg:mr-8');
    closeBtnOB.classList.add('mr-4');
    closeBtnOB.innerHTML = '<img src="delete.png" alt="delete image">';

    // Adding new job Title for small screen

    const snewJobTitle = document.createElement("input");
    snewJobTitle.setAttribute('type', 'text');
    snewJobTitle.setAttribute('placeholder', 'Job Title');
    snewJobTitle.setAttribute('id', sjobtitle());
    snewJobTitle.classList.add("border");
    snewJobTitle.classList.add("border-white");
    snewJobTitle.classList.add("h-16");
    snewJobTitle.classList.add("w-[500px]");
    snewJobTitle.classList.add("md:w-[640px]");
    snewJobTitle.classList.add("pl-2");
    snewJobTitle.classList.add("rounded-xl");

    // creating new div for job title for small screen

    const sjobTitleDiv = document.createElement("div");
    sjobTitleDiv.classList.add("flex");
    sjobTitleDiv.classList.add("justify-center");
    sjobTitleDiv.classList.add("lg:hidden");
    sjobTitleDiv.classList.add("transparent-yellow");
    sjobTitleDiv.classList.add("border-4");
    sjobTitleDiv.classList.add("border-t-0");
    sjobTitleDiv.classList.add("border-white");
    sjobTitleDiv.classList.add("py-5");
    sjobTitleDiv.classList.add("rounded-b-xl");

    sjobTitleDiv.setAttribute("id", sjob());

    // adding new employeer for small screen

    const snewEmployeer = document.createElement("input");
    snewEmployeer.setAttribute('type', 'text');
    snewEmployeer.setAttribute('placeholder', 'Employeer');
    snewEmployeer.setAttribute('id', semployeer());
    snewEmployeer.classList.add('border');
    snewEmployeer.classList.add('border-white');
    snewEmployeer.classList.add('h-16');
    snewEmployeer.classList.add('w-[500px]');
    snewEmployeer.classList.add('md:w-[640px]');
    snewEmployeer.classList.add('pl-2');
    snewEmployeer.classList.add('rounded-xl');

    // creating new div for employeer title for small screen

    const semployeerDiv = document.createElement('div');
    semployeerDiv.classList.add('mt-7');
    semployeerDiv.classList.add('flex');
    semployeerDiv.classList.add('justify-center');
    semployeerDiv.classList.add('lg:hidden');
    semployeerDiv.classList.add('transparent-yellow');
    semployeerDiv.classList.add('border-4');
    semployeerDiv.classList.add('border-b-0');
    semployeerDiv.classList.add('border-white');
    semployeerDiv.classList.add('py-5');
    semployeerDiv.classList.add('rounded-t-xl');

    semployeerDiv.setAttribute("id", semp());

    // adding new job title label for large screen

    const lnewJobTitleLabel = document.createElement('label');
    lnewJobTitleLabel.classList.add('lg:text-xl');
    lnewJobTitleLabel.classList.add('lg:font-semibold');
    lnewJobTitleLabel.innerText = "Job Title";

    // adding new br between label and input in Job Title

    const lnewJobTitleBR = document.createElement("br");

    // adding new job title input for large screen

    const lnewJobTitleInput = document.createElement('input');
    lnewJobTitleInput.classList.add('w-[500px]');
    lnewJobTitleInput.classList.add('border-4');
    lnewJobTitleInput.classList.add('border-white');
    lnewJobTitleInput.classList.add('pl-2');
    lnewJobTitleInput.classList.add('h-16');
    lnewJobTitleInput.classList.add('lg:mt-3');
    lnewJobTitleInput.classList.add('lg:h-16');
    lnewJobTitleInput.classList.add('lg:text-xl');
    lnewJobTitleInput.classList.add('rounded-xl');
    lnewJobTitleInput.setAttribute('placeholder', 'Job Title');
    lnewJobTitleInput.setAttribute('id', ljob_title());

    // adding new br between label and input in employeer in large screen

    const lnewEmployeerBR = document.createElement("br");

    // adding new employeer lebel for large screen

    const lnewEmployeerLabelOB = document.createElement('label');
    lnewEmployeerLabelOB.classList.add('lg:text-xl');
    lnewEmployeerLabelOB.classList.add('lg:font-semibold');
    lnewEmployeerLabelOB.innerText = "Employeer";

    // adding new employeer input for large screen

    const lnewEmployeerInputOB = document.createElement('input');
    lnewEmployeerInputOB.classList.add('w-[500px]');
    lnewEmployeerInputOB.classList.add('border-4');
    lnewEmployeerInputOB.classList.add('border-white');
    lnewEmployeerInputOB.classList.add('pl-2');
    lnewEmployeerInputOB.classList.add('h-16');
    lnewEmployeerInputOB.classList.add('lg:mt-3');
    lnewEmployeerInputOB.classList.add('lg:h-16');
    lnewEmployeerInputOB.classList.add('rounded-xl');
    lnewEmployeerInputOB.classList.add('lg:text-xl');
    lnewEmployeerInputOB.setAttribute('placeholder', 'Employeer');
    lnewEmployeerInputOB.setAttribute('id', lemployeer());

    // adding div for job title for large screen

    const ljobTitleDiv = document.createElement("div");
    ljobTitleDiv.setAttribute("id", ljob());

    // adding div for employeer for large screen

    const lemployeerdiv = document.createElement("div");
    lemployeerdiv.setAttribute("id", lemp());

    // adding div to contain both the employee and job title for large screen

    const lSEmpJobDiv = document.createElement("div");
    lSEmpJobDiv.classList.add('hide');
    lSEmpJobDiv.classList.add('lg:mt-7');
    lSEmpJobDiv.classList.add('lg:flex');
    lSEmpJobDiv.classList.add('lg:justify-evenly');
    lSEmpJobDiv.classList.add('border-4');
    lSEmpJobDiv.classList.add('border-white');
    lSEmpJobDiv.classList.add('transparent-yellow');
    lSEmpJobDiv.classList.add('lg:py-5');
    lSEmpJobDiv.classList.add('rounded-xl');
    lSEmpJobDiv.setAttribute("id", Sempjobdiv())

    // creating label for start date 

    const StartLabelOB = document.createElement("label");
    StartLabelOB.classList.add("lg:text-xl");
    StartLabelOB.classList.add("lg:font-semibold");
    StartLabelOB.classList.add("hide");
    StartLabelOB.innerText = "Start Date";

    // creating br for start Date

    const StartBROB = document.createElement('br');

    // creating input for the start date

    const StartInputOB = document.createElement("input");
    StartInputOB.setAttribute('type', 'text');
    StartInputOB.setAttribute('placeholder', 'Start Date');
    StartInputOB.setAttribute('id', startdate());
    StartInputOB.classList.add('border-4');
    StartInputOB.classList.add('border-white');
    StartInputOB.classList.add('h-16');
    StartInputOB.classList.add('w-[227px]');
    StartInputOB.classList.add('pl-2');
    StartInputOB.classList.add('md:w-[310px]');
    StartInputOB.classList.add('lg:mt-3');
    StartInputOB.classList.add('lg:h-16');
    StartInputOB.classList.add('lg:w-[500px]');
    StartInputOB.classList.add('lg:text-xl');
    StartInputOB.classList.add('rounded-xl');

    // creating label for end date

    const EndLabelOB = document.createElement('label');
    EndLabelOB.classList.add('lg:text-xl');
    EndLabelOB.classList.add('lg:font-semibold');
    EndLabelOB.classList.add('hide');
    EndLabelOB.innerText = "End Date";

    // creating br for start Date

    const EndBROB = document.createElement('br');

    // creating input for end date

    const EndInputOB = document.createElement('input');
    EndInputOB.setAttribute('type', 'text');
    EndInputOB.setAttribute('placeholder', 'End Date');
    EndInputOB.setAttribute('id', enddate());
    EndInputOB.classList.add('border');
    EndInputOB.classList.add('border-white');
    EndInputOB.classList.add('h-16');
    EndInputOB.classList.add('w-[227px]');
    EndInputOB.classList.add('pl-2');
    EndInputOB.classList.add('md:w-[310px]');
    EndInputOB.classList.add('lg:mt-3');
    EndInputOB.classList.add('lg:h-16');
    EndInputOB.classList.add('lg:w-[500px]');
    EndInputOB.classList.add('lg:text-xl');
    EndInputOB.classList.add('rounded-xl');

    // creating div to add the start date

    const StartDivOB = document.createElement('div');
    StartDivOB.setAttribute('id', startdiv());


    // creating div to add the end date

    const EndDivOB = document.createElement('div');
    EndDivOB.setAttribute('id', enddiv());

    // creating input to add "i currently work here"

    const SpanInputOB = document.createElement("input");
    SpanInputOB.classList.add('md:w-5');
    SpanInputOB.classList.add('md:border');
    SpanInputOB.classList.add('md:border-black');
    SpanInputOB.setAttribute('type', 'checkbox');

    // creating label to add "i currently work here"

    const SpanLabelOB = document.createElement('label');
    SpanLabelOB.setAttribute('for', 'Current');
    SpanLabelOB.classList.add('md:text-xl');
    SpanLabelOB.classList.add('md:font-semibold');
    SpanLabelOB.classList.add('lg:text-xl');
    SpanLabelOB.innerText = "I currently work here";

    // creating span to add all the above two content

    const SpanOB = document.createElement('span');
    SpanOB.setAttribute('id', endspan());
    SpanOB.classList.add('my-4');
    SpanOB.classList.add('flex');
    SpanOB.classList.add('justify-between');
    SpanOB.classList.add('w-[170px]');
    SpanOB.classList.add('md:w-[220px]');
    SpanOB.classList.add('lg:w-[230px]');

    // creating div to add the end div and span

    const EndAllDivOB = document.createElement('div');
    EndAllDivOB.setAttribute('id', endalldiv());
    EndAllDivOB.classList.add('flex');
    EndAllDivOB.classList.add('flex-col');

    // creating div to add all the start end div

    const StartEndDivOB = document.createElement('div');
    StartEndDivOB.setAttribute('id', startenddiv());
    StartEndDivOB.classList.add('mt-8');
    StartEndDivOB.classList.add('flex');
    StartEndDivOB.classList.add('justify-evenly');
    StartEndDivOB.classList.add('mb-6');
    StartEndDivOB.classList.add('border-4');
    StartEndDivOB.classList.add('border-white');
    StartEndDivOB.classList.add('transparent-pink');
    StartEndDivOB.classList.add('py-4');
    StartEndDivOB.classList.add('rounded-2xl');

    const AddBtnOB = document.getElementById("AddBtn");

    const weOB = document.getElementById('we');
    weOB.insertBefore(LempJobDivOB, AddBtnOB);

    const EmpJobStaEndOB = document.getElementById(lempjobdiv());
    EmpJobStaEndOB.appendChild(closeDivOB);
    EmpJobStaEndOB.appendChild(semployeerDiv);
    EmpJobStaEndOB.appendChild(sjobTitleDiv);
    EmpJobStaEndOB.appendChild(lSEmpJobDiv);
    EmpJobStaEndOB.appendChild(StartEndDivOB);


    const ClDivOB = document.getElementById(closediv());
    ClDivOB.appendChild(closeBtnOB);

    const clBtnOB = document.getElementById(closebtn());
    clBtnOB.onclick = function () {
        EmpJobStaEndOB.style.display = "none";
    }

    const empDivS = document.getElementById(semp());
    empDivS.appendChild(snewEmployeer);

    const JobDivS = document.getElementById(sjob());
    JobDivS.appendChild(snewJobTitle);

    const SempJobDivL = document.getElementById(Sempjobdiv());
    SempJobDivL.appendChild(lemployeerdiv);
    SempJobDivL.appendChild(ljobTitleDiv);

    const empDivL = document.getElementById(lemp());
    empDivL.appendChild(lnewEmployeerLabelOB);
    empDivL.appendChild(lnewEmployeerBR);
    empDivL.appendChild(lnewEmployeerInputOB);

    const JobDivL = document.getElementById(ljob());
    JobDivL.appendChild(lnewJobTitleLabel);
    JobDivL.appendChild(lnewJobTitleBR);
    JobDivL.appendChild(lnewJobTitleInput);

    const StEnDiOB = document.getElementById(startenddiv());
    StEnDiOB.appendChild(StartDivOB);
    StEnDiOB.appendChild(EndAllDivOB);

    const StDivOB = document.getElementById(startdiv());
    StDivOB.appendChild(StartLabelOB);
    StDivOB.appendChild(StartBROB);
    StDivOB.appendChild(StartInputOB);

    const EnAllDiv = document.getElementById(endalldiv());
    EnAllDiv.appendChild(EndDivOB);
    EnAllDiv.appendChild(SpanOB);

    const EnDivOB = document.getElementById(enddiv());
    EnDivOB.appendChild(EndLabelOB);
    EnDivOB.appendChild(EndBROB);
    EnDivOB.appendChild(EndInputOB);

    const SpOB = document.getElementById(endspan());
    SpOB.appendChild(SpanInputOB);
    SpOB.appendChild(SpanLabelOB);

    const clspanOB = document.getElementById(closespan());
    clspanOB.classList.add("hidden");
}
function present() {
    const current = document.getElementById('Current');
    if (current.checked) {
        const EndInputOB1 = document.getElementById(enddate());
        console.log(enddate());
        EndInputOB1.value = 'Present';
    }
}
// function open(){
//     const miniwindowOB = document.getElementById('miniWindow');
//     miniwindowOB.classList.remove('hidden');
//     }

iFrameResize({ log: true }, "#templateOpen")

