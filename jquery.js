$('.open-5').each(function(){
2
        $(this).css("height",$(this).height()+"px");
3
});
4
$('.open-5:not(:first)').hide();
5
$('.btn-5').click(function () {
6
    $(this).next('.open-5').slideToggle('slow').siblings('.open-5').slideUp('slow');
7
    $(this).siblings('.btn-5').removeClass('active');
8
    $(this).toggleClass('active');
9
});
