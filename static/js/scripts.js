function table() {
    // Declare variables
    var input, filter, table, tr, td, i, hidden;
    input = document.getElementById("tableSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("relicTable");
    tr = table.getElementsByTagName("tr");
    emptyResults = document.getElementById("emptyResults");

    em = $('#emptyResults');
    hidden = ($('#relicTable').find(":hidden").not("script").length) / 4;

    resultsLogic();


    // Loop through all scripts rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];


        if (tr[i].childElementCount != 0) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    hidden = ($('#relicTable').find(":hidden").not("script").length) / 4;

    //Logic if no results are found ( all elements hidden)
    resultsLogic();

    console.log(hidden);

}

function resultsLogic() {
    var table, tr, hidden;
    hidden = ($('#relicTable').find(":hidden").not("script").length) / 4;
    table = document.getElementById("relicTable");
    tr = table.getElementsByTagName("tr");
    em = $('#emptyResults');

    if (hidden < tr.length - 1) {
        em.fadeOut(1);
    } else {
        em.fadeIn('fast');
    }
}

$(document).ready(function () {
    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');

        if ($target != 'all') {
            $('.table>tbody tr').css('display', 'none');
            $('.table>tbody tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table>tbody tr').css('display', 'none').fadeIn('slow');
        }
    });
});