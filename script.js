// for page 2

const i = 1;
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


    // Creating div to store all the div

    const LempJobDivOB = document.createElement('div');
    LempJobDivOB.setAttribute('id', lempjobdiv());
    LempJobDivOB.classList.add('border-2');
    LempJobDivOB.classList.add('border-black');
    LempJobDivOB.classList.add('mt-3');
    // LempJobDivOB.setAttribute('onclick', closeField());

    // creating div to contain the close button

    const closeDivOB = document.createElement('div');
    closeDivOB.setAttribute('id', closediv());
    closeDivOB.classList.add('w-full');
    closeDivOB.classList.add('xl:h-14');
    closeDivOB.classList.add('h-10');
    closeDivOB.classList.add('flex');
    closeDivOB.classList.add('justify-end');
    closeDivOB.classList.add('items-end');

    // creating the close button

    const closeBtnOB = document.createElement('button');
    closeBtnOB.setAttribute('id', closebtn());
    closeBtnOB.classList.add('xl:h-9');
    closeBtnOB.classList.add('xl:w-9');
    closeBtnOB.classList.add('h-7');
    closeBtnOB.classList.add('w-7');
    closeBtnOB.classList.add('xl:mr-8');
    closeBtnOB.classList.add('mr-4');
    closeBtnOB.classList.add('border');
    closeBtnOB.classList.add('border-black');

    // Adding new job Title for small screen

    const snewJobTitle = document.createElement("input");
    snewJobTitle.setAttribute('type', 'text');
    snewJobTitle.setAttribute('placeholder', 'Job Title');
    snewJobTitle.classList.add("border");
    snewJobTitle.classList.add("border-black");
    snewJobTitle.classList.add("h-16");
    snewJobTitle.classList.add("w-[500px]");
    snewJobTitle.classList.add("md:w-[640px]");
    snewJobTitle.classList.add("pl-2");

    // creating new div for job title for small screen

    const sjobTitleDiv = document.createElement("div");
    sjobTitleDiv.classList.add("mt-7");
    sjobTitleDiv.classList.add("flex");
    sjobTitleDiv.classList.add("justify-center");
    sjobTitleDiv.classList.add("xl:hidden");
    sjobTitleDiv.setAttribute("id", sjob());

    // adding new employeer for small screen

    const snewEmployeer = document.createElement("input");
    snewEmployeer.setAttribute('type', 'text');
    snewEmployeer.setAttribute('placeholder', 'Employeer');
    snewEmployeer.classList.add('border');
    snewEmployeer.classList.add('border-black');
    snewEmployeer.classList.add('h-16');
    snewEmployeer.classList.add('w-[500px]');
    snewEmployeer.classList.add('md:w-[640px]');
    snewEmployeer.classList.add('pl-2');

    // creating new div for employeer title for small screen

    const semployeerDiv = document.createElement('div');
    semployeerDiv.classList.add('mt-7');
    semployeerDiv.classList.add('flex');
    semployeerDiv.classList.add('justify-center');
    semployeerDiv.classList.add('xl:hidden');
    semployeerDiv.setAttribute("id", semp());

    // adding new job title label for large screen

    const lnewJobTitleLabel = document.createElement('label');
    lnewJobTitleLabel.classList.add('xl:text-xl');
    lnewJobTitleLabel.classList.add('xl:font-semibold');
    lnewJobTitleLabel.innerText = "Job Title";

    // adding new br between label and input in Job Title

    const lnewJobTitleBR = document.createElement("br");

    // adding new job title input for karge screen

    const lnewJobTitleInput = document.createElement('input');
    lnewJobTitleInput.classList.add('w-[500px]');
    lnewJobTitleInput.classList.add('border');
    lnewJobTitleInput.classList.add('border-black');
    lnewJobTitleInput.classList.add('pl-2');
    lnewJobTitleInput.classList.add('h-16');
    lnewJobTitleInput.classList.add('xl:mt-3');
    lnewJobTitleInput.classList.add('xl:h-16');
    lnewJobTitleInput.classList.add('xl:text-xl');
    lnewJobTitleInput.setAttribute('placeholder', 'Job Title');

    // adding new br between label and input in employeer in large screen

    const lnewEmployeerBR = document.createElement("br");

    // adding new employeer lebel for large screen

    const lnewEmployeerLabel = document.createElement('label');
    lnewEmployeerLabel.classList.add('xl:text-xl');
    lnewEmployeerLabel.classList.add('xl:font-semibold');
    lnewEmployeerLabel.innerText = "Employeer";

    // adding new employeer input for large screen

    const lnewEmployeerInput = document.createElement('input');
    lnewEmployeerInput.classList.add('w-[500px]');
    lnewEmployeerInput.classList.add('border');
    lnewEmployeerInput.classList.add('border-black');
    lnewEmployeerInput.classList.add('pl-2');
    lnewEmployeerInput.classList.add('h-16');
    lnewEmployeerInput.classList.add('xl:mt-3');
    lnewEmployeerInput.classList.add('xl:h-16');
    lnewEmployeerInput.classList.add('xl:text-xl');
    lnewEmployeerInput.setAttribute('placeholder', 'Employeer');

    // adding div for job title for large screen

    const ljobTitleDiv = document.createElement("div");
    ljobTitleDiv.setAttribute("id", ljob());

    // adding div for employeer for large screen

    const lemployeerdiv = document.createElement("div");
    lemployeerdiv.setAttribute("id", lemp());

    // adding div to contain both the employee and job title for large screen

    const lSEmpJobDiv = document.createElement("div");
    // lSEmpJobDiv.classList.add('xl:mt-12');
    lSEmpJobDiv.classList.add('xl:flex');
    lSEmpJobDiv.classList.add('xl:justify-evenly');
    lSEmpJobDiv.classList.add('hide');
    lSEmpJobDiv.setAttribute("id", Sempjobdiv())

    // creating label for start date 

    const StartLabelOB = document.createElement("label");
    StartLabelOB.classList.add("xl:text-xl");
    StartLabelOB.classList.add("xl:font-semibold");
    StartLabelOB.classList.add("hide");
    StartLabelOB.innerText = "Start Date";

    // creating br for start Date

    const StartBROB = document.createElement('br');

    // creating input for the start date

    const StartInputOB = document.createElement("input");
    StartInputOB.setAttribute('type', 'text');
    StartInputOB.setAttribute('placeholder', 'Start Date');
    StartInputOB.classList.add('border');
    StartInputOB.classList.add('border-black');
    StartInputOB.classList.add('h-16');
    StartInputOB.classList.add('w-[227px]');
    StartInputOB.classList.add('pl-2');
    StartInputOB.classList.add('md:w-[310px]');
    StartInputOB.classList.add('xl:mt-3');
    StartInputOB.classList.add('xl:h-16');
    StartInputOB.classList.add('xl:w-[500px]');
    StartInputOB.classList.add('xl:text-xl');

    // creating label for end date

    const EndLabelOB = document.createElement('label');
    EndLabelOB.classList.add('xl:text-xl');
    EndLabelOB.classList.add('xl:font-semibold');
    EndLabelOB.classList.add('hide');
    EndLabelOB.innerText = "End Date";

    // creating br for start Date

    const EndBROB = document.createElement('br');

    // creating input for end date

    const EndInputOB = document.createElement('input');
    EndInputOB.setAttribute('type', 'text');
    EndInputOB.setAttribute('placeholder', 'End Date');
    EndInputOB.classList.add('border');
    EndInputOB.classList.add('border-black');
    EndInputOB.classList.add('h-16');
    EndInputOB.classList.add('w-[227px]');
    EndInputOB.classList.add('pl-2');
    EndInputOB.classList.add('md:w-[310px]');
    EndInputOB.classList.add('xl:mt-3');
    EndInputOB.classList.add('xl:h-16');
    EndInputOB.classList.add('xl:w-[500px]');
    EndInputOB.classList.add('xl:text-xl');

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
    SpanLabelOB.classList.add('xl:text-xl');
    SpanLabelOB.innerText = "I currently work here";

    // creating span to add all the above two content

    const SpanOB = document.createElement('span');
    SpanOB.setAttribute('id', endspan());
    SpanOB.classList.add('my-4');
    SpanOB.classList.add('flex');
    SpanOB.classList.add('justify-between');
    SpanOB.classList.add('w-[170px]');
    SpanOB.classList.add('md:w-[220px]');
    SpanOB.classList.add('xl:w-[230px]');

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
    empDivL.appendChild(lnewEmployeerLabel);
    empDivL.appendChild(lnewEmployeerBR);
    empDivL.appendChild(lnewEmployeerInput);

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
    // console.log(closespan());
}


// page 5

function OpenScreen2() {
    const SmallScreen_2OB = document.getElementById('SmallScreen_2');
    SmallScreen_2OB.removeAttribute('class', 'hide');
    SmallScreen_2OB.classList.add('flex');
    SmallScreen_2OB.classList.add('w-[600px]');
    SmallScreen_2OB.classList.add('flex-col');
    SmallScreen_2OB.classList.add('bg-yellow-300');
    SmallScreen_2OB.classList.add('mx-auto');


    const SmallScreen_1OB = document.getElementById('SmallScreen_1');
    SmallScreen_1OB.classList.add('hide');

}

function OpenScreen1() {
    const SmallScreen_1OB = document.getElementById('SmallScreen_1');
    SmallScreen_1OB.removeAttribute('class', 'hide');
    SmallScreen_1OB.classList.add('w-[600px]');
    SmallScreen_1OB.classList.add('mx-auto');


    const SmallScreen_2OB = document.getElementById('SmallScreen_2');
    SmallScreen_2OB.classList.add('hidden');

    const TopicNameOB = document.getElementById('TopicName');
    TopicNameOB.classList.add('hide');
}

function add1(){
    const add1OB = document.getElementById('BlankSpaceForStrength');
    add1OB.value += 'Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Job Title position. Ready to help team achieve company goals.';
}
function add2(){
    const add2OB = document.getElementById('BlankSpaceForStrength');
    add2OB.value += 'Enthusiastic Job Title eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Task Job Titleand training in Skill. Motivated to learn, grow and excel in Industry.';
}
function add3(){
    const add3OB = document.getElementById('BlankSpaceForStrength');
    add3OB.value += 'Dedicated Industry professional with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.';
}
function add4(){
    const add4OB = document.getElementById('BlankSpaceForStrength');
    add4OB.value += 'To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.';
}
function add5(){
    const add5OB = document.getElementById('BlankSpaceForStrength');
    add5OB.value += 'Experienced Job Title with over Number years of experience in Industry. Excellent reputation for resolving problems and improving customer satisfaction.';
}
function add6(){
    const add6OB = document.getElementById('BlankSpaceForStrength');
    add6OB.value += 'Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.';
}
function add7(){
    const add7OB = document.getElementById('BlankSpaceForStrength');
    add7OB.value += 'Reliable employee seeking Job Title position. Offering excellent communication and good judgment.';
}
function bold(){
    const boldOB = document.getElementById('BlankSpaceForStrength');
    // boldOB.
}
function jsredir() {
    window.location.href = "Temp1.html";
  }