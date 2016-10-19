function scrollknight(menu,offset,active_class) {
    var l_id,
        menu_height = menu.height(),
        menu_items = menu.find("a");
        scroll_div = menu_items.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
    $(window).scroll(function() {
        var dist = $(this).scrollTop() + menu_height + offset;
        console.log(dist);
        var cur = scroll_div.map(function() {
            if ($(this).offset().top < dist)
                return this;
        });
        cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
        if (l_id !== id) {
           l_id = id;
           menu_items
             .parent().removeClass(active_class)
             .end().filter("[href='#"+id+"']").parent().addClass(active_class);
       }
        });
}
