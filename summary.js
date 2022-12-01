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

function add1() {
    const add1OB = document.getElementById('BlankSpaceForStrength');
    add1OB.innerHTML += 'Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Job Title position. Ready to help team achieve company goals.';
}
function add2() {
    const add2OB = document.getElementById('BlankSpaceForStrength');
    add2OB.innerHTML += 'Enthusiastic Job Title eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Task Job Title and training in Skill. Motivated to learn, grow and excel in Industry.';
}
function add3() {
    const add3OB = document.getElementById('BlankSpaceForStrength');
    add3OB.innerHTML += 'Dedicated Industry professional with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.';
}
function add4() {
    const add4OB = document.getElementById('BlankSpaceForStrength');
    add4OB.innerHTML += 'To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.';
}
function add5() {
    const add5OB = document.getElementById('BlankSpaceForStrength');
    add5OB.innerHTML += 'Experienced Job Title with over Number years of experience in Industry. Excellent reputation for resolving problems and improving customer satisfaction.';
}
function add6() {
    const add6OB = document.getElementById('BlankSpaceForStrength');
    add6OB.innerHTML += 'Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.';
}
function add7() {
    const add7OB = document.getElementById('BlankSpaceForStrength');
    add7OB.innerHTML += 'Reliable employee seeking Job Title position. Offering excellent communication and good judgment.';
}
// function bold(){
//     // const boldOB = document.getElementById('BlankSpaceForStrength');


// }


function OpenScreen() {

    const openscreen1OB = document.getElementById('SmallScreen_1');
    openscreen1OB.classList.toggle('hide');

    const openscreen2OB = document.getElementById('SmallScreen_2');
    openscreen2OB.classList.toggle('hide');

}
// jQuery(function($) {
//     $('#bold').click(function(){
//         var highlight = window.getSelection();  
//         var span = '<span class="bold">' + highlight + '</span>';
//         var text = $('#BlankSpaceForStrength').html();
//         $('#BlankSpaceForStrength').html(text.replace(highlight, span));
//     });
// });

// document.getElementById("bold").click(function(){
//     let highlight = window.getSelection();  
//     let span = '<span class="font-bold">' + highlight + '</span>';
//     let text = document.getElementById("jvgv").innerHTML;
//     document.getElementById("jvgv").innerHTML = text.replace(highlight, span);
// });

// function bold() {
//     var sel, range, node;
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.getRangeAt && sel.rangeCount) {
//             range = window.getSelection().getRangeAt(0);

//             var html = '<span style="font-weight:bold;">' + range + '</span>'
//             range.deleteContents();

//             var el = document.createElement("div");
//             el.innerHTML = html;
//             var frag = document.createDocumentFragment(), node, lastNode;
//             while ( (node = el.firstChild) ) {
//                 lastNode = frag.appendChild(node);
//             }
//             range.insertNode(frag);
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         range.collapse(false);
//         range.pasteHTML(html);
//     }

// }

// function bold() {
//     var target = document.getElementById("BlankSpaceForStrength");
//     if (target.style.fontWeight == "bolder") {
//         target.style.fontWeight = "normal";
//     } else {
//         target.style.fontWeight = "bolder";
//     }
//     // let high = window.getSelection();
//     console.log(target);
// }



// function italic() {
//     var target = document.getElementById("BlankSpaceForStrength");
//     if (target.style.fontStyle == "italic") {
//         target.style.fontStyle = "normal";
//     } else {
//         target.style.fontStyle = "italic";
//     }
// }

// function underline() {
//     var target = document.getElementById("BlankSpaceForStrength");
//     if (target.style.textDecoration == "underline") {
//         target.style.textDecoration = "none";
//     } else {
//         target.style.textDecoration = "underline";
//     }
// }

function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
        (activeElTagName == "textarea") || (activeElTagName == "input" && /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
        (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

// document.onkeyup = document.onselectionchange = document.onclick = function () {
    function bold(){
    let highlight = getSelectionText();
    let span = '<span class="font-bold">' + highlight + '</span>';
    // console.log(span);
    // console.log(highlight);
    let text = document.getElementById("BlankSpaceForStrength").innerHTML;
    // console.log(text);
    document.getElementById("BlankSpaceForStrength").innerHTML = text.replace(highlight, span);
};
    function italic(){
    let highlight = getSelectionText();
    let span = '<span class="italic">' + highlight + '</span>';
    // console.log(span);
    // console.log(highlight);
    let text = document.getElementById("BlankSpaceForStrength").innerHTML;
    // console.log(text);
    document.getElementById("BlankSpaceForStrength").innerHTML = text.replace(highlight, span);
};
    function underline(){
    let highlight = getSelectionText();
    let span = '<span>' + highlight + '</span>';
    // console.log(span);
    // console.log(highlight);
    if(span.style.text-decoration==underline){
        span.style.textdecoration = none;
    }
    else{
        span.style.textdecoration = underline;
    }
    let text = document.getElementById("BlankSpaceForStrength").innerHTML;
    // console.log(text);
    document.getElementById("BlankSpaceForStrength").innerHTML = text.replace(highlight, span);
};