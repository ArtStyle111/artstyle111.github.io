document.addEventListener('DOMContentLoaded', function() {
   $(document).on('focusout',"[name='" + window.field_id + "']", function () {
        if ($(this).val().match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/)) {
            var obj = new Object();
            obj.email = $(this).val();
            $.ajax(
                {
                    url: "/bitrix/services/newit.abandonedcarts/add_elem.php",
                    dataType: "text",
                    data: obj,
                    type: "post",
                    success: function (ans) {
                        console.log(ans);
                    }
                });
            return false;
        }
    });
});