$(document).ready(function() {
    $('#msg-wrap').hide();//on cache par defaut les messages
    $('.conversation').click(function() {
        var id = this.id.substring(5);//ici on recupere les 5 premiers caracteres de l'id qui sont menu_ et numero de l'id genre menu_1
        $(this).siblings('.conversation').removeClass('active');//on cache le active des autres cases quand on clique sur un des messages de gauche
        $(this).addClass('active');// on place la couleur bleu active sur la case cliquée
        // on cache les messages dont l'id est différente de celle courante et on montre celle que l'on a recup
        $('[id^=message_]').hide();
        $('#message_'+id).show();
        $('#msg-wrap').show();
    });
});

