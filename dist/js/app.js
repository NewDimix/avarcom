$(window).on("load",function(){function t(t){$(".js-settings-page").hide(),$(".js-settings-table").fadeIn(100),$(t).show()}function e(){$(".js-settings-table").hide(),$(".js-settings-page").fadeIn(100),$(".js-settings-table table").hide()}$preloader=$(".js-loader"),$loader=$preloader.find(".loader__img"),$loader.fadeOut(),$preloader.delay(0).fadeOut("slow"),$(".js-btn-admins").click(function(){t(".js-table-admins")}),$(".js-btn-commissars").click(function(){t(".js-table-commissars")}),$(".js-btn-dispatchers").click(function(){t(".js-table-dispatchers")}),$(".js-btn-back").click(function(){e()}),$(".js-account-menu button").click(function(t){t.preventDefault(),e(),$(".js-account-menu .active").removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-href");$(".tab").not(a).css({display:"none"}),$(a).fadeIn(100),localStorage.setItem("activeContent",a)});var a=localStorage.getItem("activeContent");a&&($(".js-account-menu .active").removeClass("active"),$('.js-account-menu button[data-href="'+a+'"]').addClass("active"),$(".tab").not(a).css({display:"none"}),$(a).fadeIn(100))});