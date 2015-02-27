$('[data-select]').each(function(k,v){
    var select = $(this).find('select');
    var ops = select.find('option');
    var s_wrap = $('<div></div>');
    var s_s = $('<div class="jselect_s"></div>');
    var s_ul =$('<ul></ul>');
    var s_li;
    var selected = select.find('option:selected').length?select.find('option:selected'):ops.eq(0);
    s_wrap.append(
        s_s.html(selected.html()).attr('data-value',selected.attr('value'))
    );
    ops.each(function(k1,v1){
        v1 = $(this);
        s_li = $('<li class="jselect_opt"></li>')
        s_li.html(v1.html()).attr('data-value',v1.attr('value'));
        s_ul.append(s_li);
    });
    s_ul.hide();
    s_wrap.append(s_ul);
    $(this).append(s_wrap);
    select.hide();
}).on('click','.jselect_s',function(){
    $(this).parent().find('ul').toggle();
}).on('click','.jselect_opt',function(){
    var self = $(this);
    var ul = self.parent();
    var s = self.closest('[data-select]');
    var title = s.find('.jselect_s');
    s.find('select').val(self.attr('data-value'));
    title.html(self.html()).attr('data-value',self.attr('value'));
    ul.hide();
});
