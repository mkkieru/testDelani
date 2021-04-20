$(document).ready(function() {
    $("#design").click(function() {
        $("#hidden1").slideToggle();
        $("#design").slideToggle();
    });
    $("#development").click(function() {
        $("#hidden2").slideToggle();
        $("#development").slideToggle();
    });
    $("#product").click(function() {
        $("#hidden3").slideToggle();
        $("#product").slideToggle();
    });
});
$(document).ready(function() {
    $("#hidden1").click(function() {
        $("#hidden1").slideToggle();
        $("#design").slideToggle();
    });
    $("#hidden2").click(function() {
        $("#hidden2").slideToggle();
        $("#development").slideToggle();
    });
    $("#hidden3").click(function() {
        $("#hidden3").slideToggle();
        $("#product").slideToggle();
    });
});
$(document).ready(function() {
    $("#class1").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class2").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class3").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class4").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class5").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class6").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class7").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
    $("#class8").hover(function() {
        $(this).css("opacity", "0.5");
    }, function() {
        $(this).css("opacity", "1");
    });
})


function thanks() {
    var name = document.getElementById("name").value;
    alert(name + " we have received your message. Thank you for reaching out to us.")
}