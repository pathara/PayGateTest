$(document).ready(function(){ 
    $('.nav-item').on("click", function(){

    $('.nav-item').removeClass('active');

    $(this).addClass('active');
    });

    /*On scroll added fixed on the title PayGate*/
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {
            $(".main-header-fixed").css('background-color', '#faa61a');
            $(".main-header-fixed").css('color', '#ffffff');
        } else {
            $(".main-header-fixed").css('background-color', 'inherit');
            $(".main-header-fixed").css('color', 'inherit');
        }
    });

});

// Hide submenus
$('.collapse').collapse('hide'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

/*toggle menu active link when page refresh*/
$(function() {
    var linkToggle = localStorage.getItem("link-toggle");
    var linkID = localStorage.getItem("link-id");

    if (localStorage.hasOwnProperty('link-toggle')) {
        var linkToggleSlice = linkToggle.slice(0, -1);
        $(linkToggle).collapse('show'); 
        $(linkToggleSlice).collapse('show');
        $(linkID).addClass("active");
        
        $("a[href='"+linkToggle+"']").find('i').toggleClass('fa-caret-right fa-caret-down');
        $("a[href='"+linkToggleSlice+"']").find('i').toggleClass('fa-caret-right fa-caret-down');
    }else{
        $(linkID).addClass("active");
    }

    $("#mySidebar").on("click", 'a', function() {
        var id = $(this).attr('id');
        var ifToggle = $(this).attr('data-toggle');
        var submenuID = $(this).parent().parent().attr('id');
        var current = $(this).attr('href');
        var currentMenu = current.slice(0, -1);
        $('.list-group-item').removeClass("active");
        $(this).find('i').toggleClass('fa-caret-right fa-caret-down');
        $(this).addClass("active");
        if (typeof ifToggle !== typeof undefined && ifToggle !== false) {
            localStorage.removeItem('link-toggle');
            localStorage.removeItem('link-id');
        }else{
            localStorage.setItem('link-toggle',  "#"+submenuID);
            localStorage.setItem('link-id',  "#"+id);
        }
    });
});

/*sidebar menu toggle to open*/
function openNav() {
  const mq = window.matchMedia( "(min-width: 500px)" );

  if (mq.matches) {
    // window width is at least 500px
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "180px";
    } else {
    // window width is less than 500px
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.paddingTop = "0px";
    document.getElementById("mySidebar").style.paddingLeft = "0px";
    document.getElementById("mySidebar").style.paddingRight = "0px";
    }
}
/*sidebar menu toggle to close*/
function closeNav() {
  const mq = window.matchMedia( "(min-width: 500px)" );

  if (mq.matches) {
    // window width is at least 500px
    
    } else {
    // window width is less than 500px
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("mySidebar").style.paddingTop = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    }
}

