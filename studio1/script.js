( function (){
    "use strict";
    console.log("JS running");
    const form = document.querySelector("#madlib_text");



    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const adj1 = document.querySelector("#adj1").value;
        const verb2 = document.querySelector("#verb2").value;
        const adj4 = document.querySelector("#adj4").value;
        const adj5 = document.querySelector("#adj5").value;
        const adj6 = document.querySelector("#adj6").value;
        const adj7 = document.querySelector("#adj7").value;
        const verb3 = document.querySelector("#verb3").value;
        const noun2 = document.querySelector("#noun2").value;
        const adj9 = document.querySelector("#adj9").value;

        const text1 = `Hi <span>${name}</span>，I am so <span>${adj1}</span> to hear from you. I really miss you since the last time we talked. I really been missing you. Hope you had a wonderful year past year. I <span>${verb2}</span> you must been enjoying your life. It has been a <span>${adj4}</span> year due to everything that is going on. I am really <span>${adj5}</span> that it has finally get over. For the coming year, I would like to wish you all to be <span>${adj6}</span> and <span>${adj7}</span> for the new year. For your family members who are still studying, I would like to <span>${verb3}</span> them a good grade in school. For your family members who are working, I would like to wish them a good <span>${noun2}</span> in the upcoming year at work. Hope they all get some <span>${adj9}</span> boss and able to have some promotion. For elederly, I would hope them to be adj for the upcoming year. At this special time of year, I would want to say Happy New Year to you and your family members. All in all, Happy New Year! I wish you all to be happy for the whole year.`
    

        document.querySelector("#text1").innerHTML = text1;
        document.querySelector("#madlib_text").style.display = "none";
        document.querySelector("#madlib_answer").className = "showing";

    });
})();