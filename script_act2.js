$(document).ready(function(){
    
    var kyogre_shiny = false
    var rayquaza_shiny = false
    var groudon_shiny = false

    $("#ky_shiny").click(function(){
        if (kyogre_shiny == false) {
            $("#ky_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/1/18/Spr_5b_382_s.png");
                $(this).fadeIn(400);
                kyogre_shiny = true;
            })
        }
        
    });

    $("#ky_orig").click(function(){
        if (kyogre_shiny) {
            $("#ky_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/1/10/Spr_5b_382.png");
                $(this).fadeIn(400);
                kyogre_shiny = false;
            })
        }        
    });

    $("#rq_shiny").click(function(){
        if (rayquaza_shiny == false) {
            $("#rq_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/6/6c/Spr_5b_384_s.png");
                $(this).fadeIn(400);
                rayquaza_shiny = true;
            })
        }   
    });

    $("#rq_orig").click(function(){
        if (rayquaza_shiny == true) {
            $("#rq_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/5/55/Spr_5b_384.png");
                $(this).fadeIn(400);
                rayquaza_shiny = false;
            })
        }  
    });

    $("#gr_shiny").click(function(){
        if (groudon_shiny == false) {
            $("#gr_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_383_s.png");
                $(this).fadeIn(400);
                groudon_shiny = true;
            })
        }
    });

    $("#gr_orig").click(function(){
        if (groudon_shiny == true) {
            $("#gr_sprite").fadeOut(400, function() {
                $(this).attr("src","https://archives.bulbagarden.net/media/upload/e/ed/Spr_5b_383.png");
                $(this).fadeIn(400);
                groudon_shiny = false;
            })
        }
    });

    $(".kentry").hide();
    $(".rentry").hide();
    $(".gentry").hide();

    var kyrub_selected = false;
    var kysap_selected = false;
    var kyeme_selected = false;
    var kyfr_selected = false;
    var kylg_selected = false;
    var kydia_selected = false;
    var kyprl_selected = false;
    var kyplt_selected = false;
    var kyhg_selected = false;
    var kyss_selected = false;
    var kyblk_selected = false;
    var kywht_selected = false;
    var kyblk2_selected = false;
    var kywht2_selected = false;
    var kyx_selected = false;
    var kyy_selected = false;
    var kyor_selected = false;
    var kyas_selected = false;

    $("#ky_rub").click(function() {
        $(".kentry").hide(300);
        if (kyrub_selected == false){
            kysap_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kruben").slideDown(500);
            $("#kentrypanel").css({"background-color": "#a00000", "color" : "white"});
            kyrub_selected = true;       
        } else {
            kyrub_selected = false;
            $("#kruben").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
             
    });
    $("#ky_sap").click(function() {
        $(".kentry").hide(300);
        if (kysap_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#ksapen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#0000a0", "color" : "white"});
            kysap_selected = true;  
        } else {
            kysap_selected = false;
            $("#ksapen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_eme").click(function() {
        $(".kentry").fadeOut(300);
        if (kyeme_selected == false){
            kyeme_selected = true;  
            kyrub_selected = kysap_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kemeen").fadeIn(500);
            $("#kentrypanel").css({"background-color": "#00a000", "color" : "white"});
        } else {
            kyeme_selected = false;
            $("#kemeen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_fr").click(function() {
        $(".kentry").hide(300);
        if (kyfr_selected == false){
            kyrub_selected = kysap_selected = kyeme_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kfren").slideDown(500);
            $("#kentrypanel").css({"background-color": "#ff7327", "color" : "black"});
            kyfr_selected = true;       
        } else {
            kyfr_selected = false;
            $("#kfren").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_lg").click(function() {
        $(".kentry").hide(300);
        if (kylg_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kysap_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#klgen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#00dd00", "color" : "black"});
            kylg_selected = true;       
        } else {
            kylg_selected = false;
            $("#klgen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_dia").click(function() {
        $(".kentry").hide(300);
        if (kydia_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kysap_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kdiaen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#aaaaff", "color" : "black"});
            kydia_selected = true;       
        } else {
            kydia_selected = false;
            $("#kdiaen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_prl").click(function() {
        $(".kentry").hide(300);
        if (kyprl_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kysap_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kprlen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#ffaaaa", "color" : "black"});
            kyprl_selected = true;       
        } else {
            kyprl_selected = false;
            $("#kprlen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_plt").click(function() {
        $(".kentry").hide(300);
        if (kyplt_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kysap_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kplten").slideDown(500);
            $("#kentrypanel").css({"background-color": "#999999", "color" : "black"});
            kyplt_selected = true;       
        } else {
            kyplt_selected = false;
            $("#kplten").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_hg").click(function() {
        $(".kentry").hide(300);
        if (kyhg_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kysap_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#khgen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#b69e00", "color" : "black"});
            kyhg_selected = true;       
        } else {
            kyhg_selected = false;
            $("#khgen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_ss").click(function() {
        $(".kentry").hide(300);
        if (kyss_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kysap_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kssen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#c0c0e1", "color" : "black"});
            kyss_selected = true;       
        } else {
            kyss_selected = false;
            $("#kssn").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_blk").click(function() {
        $(".kentry").hide(300);
        if (kyblk_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kysap_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kblken").slideDown(500);
            $("#kentrypanel").css({"background-color": "#444444", "color" : "white"});
            kyblk_selected = true;       
        } else {
            kyblk_selected = false;
            $("#kblken").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_wht").click(function() {
        $(".kentry").hide(300);
        if (kywht_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kysap_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kwhten").slideDown(500);
            $("#kentrypanel").css({"background-color": "#e1e1e1", "color" : "black"});
            kywht_selected = true;       
        } else {
            kywht_selected = false;
            $("#kwhten").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_blk2").click(function() {
        $(".kentry").hide(300);
        if (kyblk2_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kysap_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kblk2en").slideDown(500);
            $("#kentrypanel").css({"background-color": "#424b50", "color" : "white"});
            kyblk2_selected = true;       
        } else {
            kyblk2_selected = false;
            $("#kblk2en").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_wht2").click(function() {
        $(".kentry").hide(300);
        if (kywht2_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kysap_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kwht2en").slideDown(500);
            $("#kentrypanel").css({"background-color": "#e3ced0", "color" : "black"});
            kywht2_selected = true;       
        } else {
            kywht2_selected = false;
            $("#kwht2en").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_x").click(function() {
        $(".kentry").hide(300);
        if (kyx_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kysap_selected = kyy_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kxen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#025da6", "color" : "white"});
            kyx_selected = true;       
        } else {
            kyx_selected = false;
            $("#kxen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_y").click(function() {
        $(".kentry").hide(300);
        if (kyy_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kysap_selected = kyor_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#kyen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#ea1a3e", "color" : "white"});
            kyy_selected = true;       
        } else {
            kyy_selected = false;
            $("#kyen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_or").click(function() {
        $(".kentry").hide(300);
        if (kyor_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kysap_selected = kyas_selected = false;
            $("#kselect").fadeOut(400);
            $("#koren").slideDown(500);
            $("#kentrypanel").css({"background-color": "#ab2813", "color" : "white"});
            kyor_selected = true;       
        } else {
            kyor_selected = false;
            $("#koren").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#ky_as").click(function() {
        $(".kentry").hide(300);
        if (kyas_selected == false){
            kyrub_selected = kyeme_selected = kyfr_selected = kylg_selected = false;
            kydia_selected = kyprl_selected = kyplt_selected = kyhg_selected = kyss_selected = false;
            kyblk_selected = kywht_selected = kyblk2_selected = kywht2_selected = false; 
            kyx_selected = kyy_selected = kyor_selected = kysap_selected = false;
            $("#kselect").fadeOut(400);
            $("#kasen").slideDown(500);
            $("#kentrypanel").css({"background-color": "#26649c", "color" : "white"});
            kyas_selected = true;       
        } else {
            kyas_selected = false;
            $("#kasen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#kentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });

    var rqrub_selected = false;
    var rqsap_selected = false;
    var rqeme_selected = false;
    var rqfr_selected = false;
    var rqlg_selected = false;
    var rqdia_selected = false;
    var rqprl_selected = false;
    var rqplt_selected = false;
    var rqhg_selected = false;
    var rqss_selected = false;
    var rqblk_selected = false;
    var rqwht_selected = false;
    var rqblk2_selected = false;
    var rqwht2_selected = false;
    var rqx_selected = false;
    var rqy_selected = false;
    var rqor_selected = false;
    var rqas_selected = false;

    $("#rq_rub").click(function() {
        $(".rentry").hide(300);
        if (rqrub_selected == false){
            rqsap_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rruben").slideDown(500);
            $("#rentrypanel").css({"background-color": "#a00000", "color" : "white"});
            rqrub_selected = true;       
        } else {
            rqrub_selected = false;
            $("#rruben").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
             
    });
    $("#rq_sap").click(function() {
        $(".rentry").hide(300);
        if (rqsap_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rsapen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#0000a0", "color" : "white"});
            rqsap_selected = true;       
        } else {
            rqsap_selected = false;
            $("#rsapen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_eme").click(function() {
        $(".rentry").hide(300);
        if (rqeme_selected == false){
            rqrub_selected = rqsap_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#remeen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#00a000", "color" : "white"});
            kyeme_selected = true;       
        } else {
            reme_selected = false;
            $("#remeen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_fr").click(function() {
        $(".rentry").hide(300);
        if (rqfr_selected == false){
            rqrub_selected = rqsap_selected = rqeme_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rfren").slideDown(500);
            $("#rentrypanel").css({"background-color": "#ff7327", "color" : "black"});
            rqfr_selected = true;       
        } else {
            rqfr_selected = false;
            $("#rfren").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_lg").click(function() {
        $(".rentry").hide(300);
        if (rqlg_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqsap_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rlgen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#00dd00", "color" : "black"});
            rqlg_selected = true;       
        } else {
            rqlg_selected = false;
            $("#rlgen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_dia").click(function() {
        $(".rentry").hide(300);
        if (rqdia_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqsap_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rdiaen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#aaaaff", "color" : "black"});
            kydia_selected = true;       
        } else {
            rqsap_selected = false;
            $("#rdiaen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_prl").click(function() {
        $(".rentry").hide(300);
        if (rqprl_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqsap_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = kyas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rprlen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#ffaaaa", "color" : "black"});
            rqprl_selected = true;       
        } else {
            rqprl_selected = false;
            $("#rprlen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_plt").click(function() {
        $(".rentry").hide(300);
        if (rqplt_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqsap_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rplten").slideDown(500);
            $("#rentrypanel").css({"background-color": "#999999", "color" : "black"});
            rqplt_selected = true;       
        } else {
            rqplt_selected = false;
            $("#rplten").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_hg").click(function() {
        $(".rentry").hide(300);
        if (rqhg_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqsap_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rhgen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#b69e00", "color" : "black"});
            rqhg_selected = true;       
        } else {
            rqhg_selected = false;
            $("#rhgen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_ss").click(function() {
        $(".rentry").hide(300);
        if (rqss_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqsap_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rssen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#c0c0e1", "color" : "black"});
            rqss_selected = true;       
        } else {
            rqss_selected = false;
            $("#rssn").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_blk").click(function() {
        $(".rentry").hide(300);
        if (rqblk_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqsap_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rblken").slideDown(500);
            $("#rentrypanel").css({"background-color": "#444444", "color" : "white"});
            rqblk_selected = true;       
        } else {
            rqblk_selected = false;
            $("#rblken").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_wht").click(function() {
        $(".rentry").hide(300);
        if (rqwht_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqsap_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rwhten").slideDown(500);
            $("#rentrypanel").css({"background-color": "#e1e1e1", "color" : "black"});
            rqwht_selected = true;       
        } else {
            rqwht_selected = false;
            $("#rwhten").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_blk2").click(function() {
        $(".rentry").hide(300);
        if (rqblk2_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqsap_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rblk2en").slideDown(500);
            $("#rentrypanel").css({"background-color": "#424b50", "color" : "white"});
            rqblk2_selected = true;       
        } else {
            rqblk2_selected = false;
            $("#rblk2en").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_wht2").click(function() {
        $(".rentry").hide(300);
        if (rqwht2_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqsap_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rwht2en").slideDown(500);
            $("#rentrypanel").css({"background-color": "#e3ced0", "color" : "black"});
            rqwht2_selected = true;       
        } else {
            rqwht2_selected = false;
            $("#rwht2en").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_x").click(function() {
        $(".rentry").hide(300);
        if (rqx_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqsap_selected = rqy_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#rxen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#025da6", "color" : "white"});
            rqx_selected = true;       
        } else {
            rqx_selected = false;
            $("#rqen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_y").click(function() {
        $(".rentry").hide(300);
        if (rqy_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqsap_selected = rqor_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#ryen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#ea1a3e", "color" : "white"});
            rqy_selected = true;       
        } else {
            rqy_selected = false;
            $("#ryen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_or").click(function() {
        $(".rentry").hide(300);
        if (rqsap_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqsap_selected = rqas_selected = false;
            $("#rselect").fadeOut(400);
            $("#roren").slideDown(500);
            $("#rentrypanel").css({"background-color": "#ab2813", "color" : "white"});
            rqor_selected = true;       
        } else {
            rqor_selected = false;
            $("#roren").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });
    $("#rq_as").click(function() {
        $(".rentry").hide(300);
        if (rqas_selected == false){
            rqrub_selected = rqeme_selected = rqfr_selected = rqlg_selected = false;
            rqdia_selected = rqprl_selected = rqplt_selected = rqhg_selected = rqss_selected = false;
            rqblk_selected = rqwht_selected = rqblk2_selected = rqwht2_selected = false; 
            rqx_selected = rqy_selected = rqor_selected = rqsap_selected = false;
            $("#rselect").fadeOut(400);
            $("#rasen").slideDown(500);
            $("#rentrypanel").css({"background-color": "#26649c", "color" : "white"});
            rqas_selected = true;       
        } else {
            rqas_selected = false;
            $("#rasen").fadeOut(400);
            $("#rselect").slideDown(500);
            $("#rentrypanel").css({"background-color": "gainsboro", "color" : "black"})
        }
    });

    var grrub_selected = false;
    var grsap_selected = false;
    var greme_selected = false;
    var grfr_selected = false;
    var grlg_selected = false;
    var grdia_selected = false;
    var grprl_selected = false;
    var grplt_selected = false;
    var grhg_selected = false;
    var grss_selected = false;
    var grblk_selected = false;
    var grwht_selected = false;
    var grblk2_selected = false;
    var grwht2_selected = false;
    var grx_selected = false;
    var gry_selected = false;
    var gror_selected = false;
    var gras_selected = false;

    $("#gr_rub").click(function() {
        $(".gentry").hide(300);
        if (grrub_selected == false){
            grsap_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gruben").slideDown(500);
            $("#gentrypanel").css({"background-color": "#a00000", "color" : "white"});
            grrub_selected = true;       
        } else {
            grrub_selected = false;
            $("#gruben").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
             
    });
    $("#gr_sap").click(function() {
        $(".gentry").hide(300);
        if (grsap_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gsapen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#0000a0", "color" : "white"});
            grsap_selected = true;  
        } else {
            grsap_selected = false;
            $("gsapen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_eme").click(function() {
        $(".gentry").fadeOut(300);
        if (greme_selected == false){
            greme_selected = true;  
            grrub_selected = grsap_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gemeen").fadeIn(500);
            $("#gentrypanel").css({"background-color": "#00a000", "color" : "white"});
        } else {
            greme_selected = false;
            $("#gemeen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_fr").click(function() {
        $(".gentry").hide(300);
        if (grfr_selected == false){
            grrub_selected = grsap_selected = greme_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gfren").slideDown(500);
            $("#gentrypanel").css({"background-color": "#ff7327", "color" : "black"});
            grfr_selected = true;       
        } else {
            grfr_selected = false;
            $("#gfren").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_lg").click(function() {
        $(".gentry").hide(300);
        if (grlg_selected == false){
            grrub_selected = greme_selected = grfr_selected = grsap_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#glgen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#00dd00", "color" : "black"});
            grlg_selected = true;       
        } else {
            grlg_selected = false;
            $("#glgen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_dia").click(function() {
        $(".gentry").hide(300);
        if (grdia_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grsap_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gdiaen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#aaaaff", "color" : "black"});
            grdia_selected = true;       
        } else {
            grdia_selected = false;
            $("#gdiaen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_prl").click(function() {
        $(".gentry").hide(300);
        if (grprl_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grsap_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gprlen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#ffaaaa", "color" : "black"});
            grprl_selected = true;       
        } else {
            grprl_selected = false;
            $("#gprlen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_plt").click(function() {
        $(".gentry").hide(300);
        if (grplt_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grsap_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gplten").slideDown(500);
            $("#gentrypanel").css({"background-color": "#999999", "color" : "black"});
            grplt_selected = true;       
        } else {
            grplt_selected = false;
            $("#gplten").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_hg").click(function() {
        $(".gentry").hide(300);
        if (grhg_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grsap_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#ghgen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#b69e00", "color" : "black"});
            grhg_selected = true;       
        } else {
            grhg_selected = false;
            $("#ghgen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_ss").click(function() {
        $(".gentry").hide(300);
        if (grss_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grsap_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gssen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#c0c0e1", "color" : "black"});
            grss_selected = true;       
        } else {
            grss_selected = false;
            $("#gssn").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_blk").click(function() {
        $(".gentry").hide(300);
        if (grblk_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grsap_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gblken").slideDown(500);
            $("#gentrypanel").css({"background-color": "#444444", "color" : "white"});
            grblk_selected = true;       
        } else {
            grblk_selected = false;
            $("#gblken").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_wht").click(function() {
        $(".gentry").hide(300);
        if (grwht_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grsap_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gwhten").slideDown(500);
            $("#gentrypanel").css({"background-color": "#e1e1e1", "color" : "black"});
            grwht_selected = true;       
        } else {
            grwht_selected = false;
            $("#gwhten").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_blk2").click(function() {
        $(".gentry").hide(300);
        if (grblk2_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grsap_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gblk2en").slideDown(500);
            $("#gentrypanel").css({"background-color": "#424b50", "color" : "white"});
            grblk2_selected = true;       
        } else {
            grblk2_selected = false;
            $("#kblk2en").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_wht2").click(function() {
        $(".gentry").hide(300);
        if (grwht2_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grsap_selected = false; 
            grx_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gwht2en").slideDown(500);
            $("#gentrypanel").css({"background-color": "#e3ced0", "color" : "black"});
            grwht2_selected = true;       
        } else {
            grwht2_selected = false;
            $("#gwht2en").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_x").click(function() {
        $(".gentry").hide(300);
        if (grx_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grsap_selected = gry_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gxen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#025da6", "color" : "white"});
            grx_selected = true;       
        } else {
            grx_selected = false;
            $("#gxen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_y").click(function() {
        $(".gentry").hide(300);
        if (gry_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = grsap_selected = gror_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#gyen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#ea1a3e", "color" : "white"});
            gry_selected = true;       
        } else {
            gry_selected = false;
            $("#gyen").fadeOut(400);
            $("#kselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_or").click(function() {
        $(".gentry").hide(300);
        if (gror_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = grsap_selected = gras_selected = false;
            $("#gselect").fadeOut(400);
            $("#goren").slideDown(500);
            $("#gentrypanel").css({"background-color": "#ab2813", "color" : "white"});
            gror_selected = true;       
        } else {
            gror_selected = false;
            $("#goren").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });
    $("#gr_as").click(function() {
        $(".gentry").hide(300);
        if (gras_selected == false){
            grrub_selected = greme_selected = grfr_selected = grlg_selected = false;
            grdia_selected = grprl_selected = grplt_selected = grhg_selected = grss_selected = false;
            grblk_selected = grwht_selected = grblk2_selected = grwht2_selected = false; 
            grx_selected = gry_selected = gror_selected = grsap_selected = false;
            $("#gselect").fadeOut(400);
            $("#gasen").slideDown(500);
            $("#gentrypanel").css({"background-color": "#26649c", "color" : "white"});
            gras_selected = true;       
        } else {
            gras_selected = false;
            $("#gasen").fadeOut(400);
            $("#gselect").slideDown(500);
            $("#gentrypanel").css({"background-color": "gainsboro", "color" : "black"});
        }
    });

    $("#kyform").hide();
    $("#rqform").hide();
    $("#grform").hide();

    $("#kyfeedback").click(function (){
        $("#kyfeedback").hide(300);
        $("#kyform").show(300);
        $("#kyform").css({"text-align": "left"});
        $("#kyform").animate({
            lineHeight: "+=1em"
        }, "fast");
        
    });

    $("#rqfeedback").click(function (){
        $("#rqfeedback").hide(300);
        $("#rqform").show(300);
        $("#rqform").css({"text-align": "left"});
        $("#rqform").animate({
            lineHeight: "+=1em"
        }, "fast");
    });

    $("#grfeedback").click(function (){
        $("#grfeedback").hide(300);
        $("#grform").show(300);
        $("#grform").css({"text-align": "left"});
        $("#grform").animate({
            lineHeight: "+=1em"
        }, "fast");
    });
});