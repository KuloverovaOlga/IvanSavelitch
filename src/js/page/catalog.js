import $ from "jquery";
import "jquery-ui/ui/widgets/slider";

let slider = $( "#range-price" ).slider({
    range: true,
    min: 0,
    max: 2000,
    values: [ 300, 1000 ],
    slide: function( event, ui ) {
      $( "#price-from" ).val(ui.values[0]);
      $( "#price-to" ).val(ui.values[1]);
    }
});
$('#price-from').val(slider.slider("values", 0));
$( "#price-to" ).val(slider.slider("values", 1));

$('#price-from').on('input', function() {
    if (Number($(this).val()) < Number($("#price-to").val())) {
        slider.slider('values', 0, $(this).val());
    }
});
$( "#price-to" ).on('input', function() {
    if (Number($(this).val()) > Number($('#price-from').val())) {
        slider.slider('values', 1, $(this).val());
    }
});

$( ".catalog_container-top--sort").find('select').selectmenu();